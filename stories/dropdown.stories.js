import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Dropdown from 'AppComponents/Dropdown/';

const options = [
    {
        id: 0,
        text: 'Select Option 1',
    },
    {
        id: 1,
        text: 'Select Option 2',
    },
    {
        id: 2,
        text: 'Select Option 3',
    },
];

storiesOf('Dropdown', module)
    .addDecorator(story => (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
            <div style={{ width: '200px' }}>
                {story()}
            </div>
        </div>
    ))
    .add('With Default Placeholder', () => (
        <Dropdown options={options} />
    ))
    .add('With Custom Placeholder', () => (
        <Dropdown options={options} placeholder="Placeholder Text" />
    ))
    .add('On value change', () => (
        <Dropdown options={options} onChange={action('selected')} />
    ));
