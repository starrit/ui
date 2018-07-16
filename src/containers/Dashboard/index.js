import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import s from './DashboardComponent';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/user';

const activity = [
  {
    id: '1',
    file: {
      name: 'Filename_0123.mpg',
      link: '',
    },
    action: 'uploaded',
    action_by: 'Jennifer Johnson',
    timestamp: '2018-04-26T15:39:45',
  }, {
    id: '2',
    file: {
      name: 'Filename_0123.mpg',
      link: '',
    },
    action: 'uploaded',
    action_by: 'Jennifer Johnson',
    timestamp: '2018-04-26T15:39:45',
  }, {
    id: '3',
    file: {
      name: 'Filename_0123.mpg',
      link: '',
    },
    action: 'uploaded',
    action_by: 'Jennifer Johnson',
    timestamp: '2018-04-26T15:39:45',
  }, {
    id: '4',
    file: {
      name: 'Filename_0123.mpg',
      link: '',
    },
    action: 'uploaded',
    action_by: 'Jennifer Johnson',
    timestamp: '2018-04-26T15:39:45',
  }, {
    id: '5',
    file: {
      name: 'Filename_0123.mpg',
      link: '',
    },
    action: 'uploaded',
    action_by: 'Jennifer Johnson',
    timestamp: '2018-04-26T15:39:45',
  },
];

const statistics = [
  {
    id: 1,
    title: 'Most played episodes',
    data: [
      {
        id: 1,
        title: 'Something Show',
        item: {
          name: 'Ep. 15 - "Something title"',
          link: '',
        },
      },
      {
        id: 2,
        title: 'Something Show',
        item: {
          name: 'Ep. 15 - "Something title"',
          link: '',
        },
      },
      {
        id: 3,
        title: 'Something Show',
        item: {
          name: 'Ep. 15 - "Something title"',
          link: '',
        },
      },
    ],
    moreLink: {
      name: 'View all',
      link: '',
    },
  },
  {
    id: 2,
    title: 'Most popular shows',
    data: [
      {
        id: 1,
        title: 'Something Show',
        item: {
          name: 'Ep. 15 - "Something title"',
          link: '',
        },
      },
      {
        id: 2,
        title: 'Something Show',
        item: {
          name: 'Ep. 15 - "Something title"',
          link: '',
        },
      },
      {
        id: 3,
        title: 'Something Show',
        item: {
          name: 'Ep. 15 - "Something title"',
          link: '',
        },
      },
    ],
    moreLink: {
      name: 'View all',
      link: '',
    },
  },
  {
    id: 3,
    title: 'Highest Rated',
    data: [
      {
        id: 1,
        title: 'Something Show',
        item: {
          name: 'Ep. 15 - "Something title"',
          link: '',
        },
      },
      {
        id: 2,
        title: 'Something Show',
        item: {
          name: 'Ep. 15 - "Something title"',
          link: '',
        },
      },
      {
        id: 3,
        title: 'Something Show',
        item: {
          name: 'Ep. 15 - "Something title"',
          link: '',
        },
      },
    ],
    moreLink: {
      name: 'View all',
      link: '',
    },
  },
];

class DashboardComponent extends Component {
  render() {
    return (
      <div>
       DashBoard
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});


export default connect(mapStateToProps)(DashboardComponent);
