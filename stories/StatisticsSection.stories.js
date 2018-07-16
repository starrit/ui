import React from 'react';

import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import StatisticsSection from 'app/components/StatisticsSection';

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

storiesOf('StatisticsSection', module)
    .addDecorator(story => (
        <Router>
            {story()}
        </Router>
    ))
    .add('Default', () => (
        <StatisticsSection title="Show Statistics" data={statistics} />
    ));
