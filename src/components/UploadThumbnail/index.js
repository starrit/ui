import React from 'react';
import {Card,
  Icon,
  P,
  ProgressBar,
  Thumbnail
} from '@gstarrltd/fragmented';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import notificationActions from 'AppActions/notifications';
import {uploadThumbnail} from 'AppServices/thumbnail-upload.service';
import {images} from 'constants/Images';
import {icons} from 'constants/Icons';
import styles from './UploadThumbnail.scss';

const supportedImageTypes = [
  'image/png',
  'image/jpg',
  'image/jpeg'
];

export class UploadThumbnail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: props.image,
      preview: null,
      isUploading: false,
      uploaded: 0
    };

    this.focusInput = this.focusInput.bind(this);
    this.onImageSelect = this.onImageSelect.bind(this);
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      image: nextProps.image
    };
  }

  focusInput() {
    this.thumbnail.click();
  }

  onImageSelect(file) {
    if (file && supportedImageTypes.indexOf(file.type) >= 0) {
      const fr = new FileReader();
      fr.onload = (e) => {
        this.setState({
          preview: e.target.result,
          isUploading: true
        }, () => {
          uploadThumbnail(file, this.props.uploadUrl, e => {
            const done = e.position || e.loaded;
            const total = e.totalSize || e.total;
            const loaded = Math.floor(done / total * 1000) / 10;
            this.setState({
              uploaded: loaded
            });
          }, () => {
            this.setState({
              image: this.state.preview,
              preview: null,
              isUploading: false,
              uploaded: 0
            });
            this.props.onChange(e);
            this.props.addNotification({
              text: 'Thumbnail uploaded successfully',
              type: 'positive'
            });
          });
        });
      };
      fr.readAsDataURL(file);
    }
    else if (file) {
      this.props.addNotification({
        text: 'File type not supported',
        type: 'negative'
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Card className={styles.thumbnailCard}>
          <Thumbnail src={this.state.preview || this.state.image} default={images.defaultAddThumbnail} />
          <input
            ref={thumbnail => {
              this.thumbnail = thumbnail;
            }}
            type="file"
            className={styles.thumbnailInput}
            onChange={() => this.onImageSelect(this.thumbnail.files[0])}
            name={this.props.name}
          />
          {this.state.isUploading &&
            <div className={styles.progressWrap}>
              <ProgressBar loaded={this.state.uploaded} circular />
            </div>
          }
        </Card>
        <P className={styles.thumbnailText}>
          <span className={`${styles.thumbnailCopy} pullLeft`}>Thumbnail</span>
          <span className="pullRight">
            <a className={`${styles.iconWrap} ${styles.uploadThumbnail}`} onClick={this.focusInput}><Icon className={styles.thumbnailIcons}>{icons.upload}</Icon></a>
            {this.state.image &&
            <a className={styles.iconWrap} href={this.state.image} download>
              <Icon className={styles.thumbnailIcons}>{icons.download}</Icon>
            </a>
            }
          </span>
        </P>
      </React.Fragment>
    );
  }
}

UploadThumbnail.defaultProps = {
  name: ''
}

UploadThumbnail.propTypes = {
  image: PropTypes.string,
  uploadUrl: PropTypes.string.isRequired,
  name: PropTypes.string,
};

const mapDispatchToProps = dispatch => ({
  addNotification: notf => dispatch(notificationActions.add(notf))
});

export default connect(null, mapDispatchToProps)(UploadThumbnail);
