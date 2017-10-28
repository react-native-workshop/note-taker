import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home.component';

describe('Home component', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Home />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
