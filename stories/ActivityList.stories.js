import React from 'react';

import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import ActivityList from 'app/components/ActivityList';

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

storiesOf('ActivityList', module)
    .addDecorator(story => (
        <Router>
            {story()}
        </Router>
    ))
    .add('Default', () => (
        <ActivityList data={activity} />
    ));
