'use strict';
import List from '../List.component';
import React from 'react';
import renderer from 'react-test-renderer';

describe('List component', function () {
  it('should render correctly', function () {
    var progressBarTree = renderer.create(<List />).toJSON();
    expect(progressBarTree).toMatchSnapshot();
  });
});
