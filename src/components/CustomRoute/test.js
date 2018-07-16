import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';

import {CustomRoute} from './';

function DummyComponent() {
  return <div>Auth protected Dummy Component</div>;
}

function DummyLoginComponent() {
  return <div>Login component</div>;
}

describe('CustomRoute Component', () => {
  it('should render component correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <CustomRoute routes={[]} />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render component with routes.js', () => {
    const routes = [{
      path: '/route1',
      component: DummyComponent,
      public: true
    }];

    const tree = renderer.create(
      <MemoryRouter initialEntries={['/route1']}>
        <CustomRoute routes={routes} />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should redirect to Login route for non public route', () => {
    const routes = [{
      path: '/route1',
      component: DummyComponent
    }, {
      path: '/login',
      component: DummyLoginComponent,
      public: true
    }];

    const tree = renderer.create(
      <MemoryRouter initialEntries={['/route1']}>
        <CustomRoute routes={routes} />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
