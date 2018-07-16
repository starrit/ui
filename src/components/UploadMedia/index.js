import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Dropzone from 'react-dropzone';
import {FlexContainer, H3, Icon, P, ProgressBar} from '@gstarrltd/fragmented';
import {connect} from 'react-redux';

import actions from 'AppActions/uploadModalState';
import notificationActions from 'AppActions/notifications';
import {uploadMedia, uploadProgress} from 'AppServices/episode.service';
import formatFileSize from 'AppUtils/formatFileSize';
import appConstant from 'constants/app-constants';
import {icons} from 'constants/Icons';
import styles from './UploadMedia.scss';

/**
 * This component will be used to upload Episodes without
 * blocking the user to perform any other action while uploading.
 */
export class UploadMedia extends Component {
  constructor() {
    super();

    this.state = {
      files: []
    };

    this.onDrop = this.onDrop.bind(this);
    this.goToMediaEdit = this.goToMediaEdit.bind(this);
    this.progressCallback = this.progressCallback.bind(this);
    this.uploadSuccessCallback = this.uploadSuccessCallback.bind(this);
  }

  /**
   * This function will be called on clicking the Upload Success Notification.
   * This will redirect the user to the upload Episode Edit page.
   * @param {Media Object} media - Media object of the clicked notification(upload success notification).
   */
  goToMediaEdit(media) {
    this.props.history.push(`/media/${media.id}/edit`);
  }

  progressCallback(file, index, data) {
    if (this.state.files[index].loaded < 100) {
      const loaded = Math.floor((data.received / data.size) * 1000) / 10;
      const newfiles = [].concat(this.state.files);
      newfiles[index].loaded = loaded;
      this.setState({files: newfiles});
    }
  }

  uploadSuccessCallback(file, index) {
    if (this.state.files[index].loaded < 100) {
      this.props.addNotification({
        text: `${file.name} uploaded successfully. Click here to add more information.`,
        type: 'positive',
        timeout: 0,
        onClick: this.goToMediaEdit
      });
    }
  }
  /**
   * This function will be called after dropping the files in the drop area.
   * @param {Array(file)} acceptedFiles - List of files to be uploaded (Passed filetype & filesize validation)
   * @param {Array(file)} rejectedFiles - List of files failed in the filetype & filesize validation.
   */
  onDrop(acceptedFiles, rejectedFiles) {
    const filesUploadingCount = this.state.files.length;
    acceptedFiles.map((file, index) => {
      // Api call for progress
      let intervalId = setInterval(() => {
        uploadProgress().then((res) => {
          if (res.state === 'done') {
            this.progressCallback(file, filesUploadingCount + index, res);
            this.uploadSuccessCallback(file, filesUploadingCount + index);
            clearInterval(intervalId);
          }
          else if (res.state === 'uploading') {
            this.progressCallback(file, filesUploadingCount + index, res);
          }
        });
      }, 5000);

      uploadMedia(file)
        .then(res => {
          clearInterval(intervalId);
          this.progressCallback(file, filesUploadingCount + index, {size: 1, received: 1});
          this.uploadSuccessCallback(file, filesUploadingCount + index);
        })
        .catch(e => {
          // Do something on error in uploading media
          clearInterval(intervalId);
        });
    });

    rejectedFiles.map(file => {
      let reason;
      if (file.size > appConstant.MAX_MEDIA_SIZE) {
        reason = `its size is greater than ${formatFileSize(appConstant.MAX_MEDIA_SIZE)}`;
      }
      else {
        reason = 'its format is not supported';
      }
      this.props.addNotification({
        text: `${file.name} upload rejected because ${reason}`,
        type: 'negative',
        timeout: 0
      });
    });

    this.setState({
      files: this.state.files.concat(acceptedFiles)
    });
  }

  render() {
    if (this.props.isModalOpen) {
      document.body.classList.add(styles.uploadModalOpen);
    }
    else {
      document.body.classList.remove(styles.uploadModalOpen);
    }
    return <div className={`${styles.backdrop} ${this.props.isModalOpen ? '' : 'hidden'}`}>
      <div className={styles.modalWrap}>
        <header className={styles.modalHeader}>
          <H3>Upload Media</H3>
          <a onClick={this.props.closeUploadModal}>
            <Icon>{icons.close}</Icon>
          </a>
        </header>
        <div className={styles.modalBody}>
          <Dropzone
            onDrop={this.onDrop}
            accept="video/*"
            maxSize={appConstant.MAX_MEDIA_SIZE}
            className={styles.dropzone}
            activeClassName={styles.dropzoneActive}
          >
            <H3>Drag and drop file here</H3>
          </Dropzone>
          <div className={styles.uploadFilesWrap}>
            {this.state.files.map(file => (
              <FlexContainer key={file.preview} className={styles.uploadingFile}>
                <P><span title={file.name}>Filename: {file.name}</span></P>
                <P><span>File Size: {formatFileSize(file.size)}</span></P>
                <ProgressBar loaded={file.loaded} />
              </FlexContainer>
            ))}
          </div>
        </div>
      </div>
    </div>;
  }
}

const mapStateToProps = state => ({
  isModalOpen: state.isUploadModalOpen
});

const mapDispatchToProps = dispatch => ({
  /** To close the Upload Modal without interrupting the upload. */
  closeUploadModal: () => dispatch(actions.close()),
  /** To add notification to display. */
  addNotification: notf => dispatch(notificationActions.add(notf))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UploadMedia));
