import jsdomGlobal from 'jsdom-global';

import {expect} from 'chai';
import React from 'react';
import {renderIntoDocument, findRenderedDOMComponentWithTag} from 'react-addons-test-utils';

import Header from './Header';

describe('component: Header', () => {
  let jsdomGlobalClean;
  let hEl;

  const children = 'Header text';
  const className = 'SpecificHeader';

  before(() => {
    jsdomGlobalClean = jsdomGlobal();

    const renderedComponent = renderIntoDocument(
      <Header className={className}>{children}</Header>
    );

    hEl = findRenderedDOMComponentWithTag(
      renderedComponent,
      'h1'
    );
  });

  after(() => {
    jsdomGlobalClean();
  });

  it('should set children for h* element', () => {
    expect(hEl.innerHTML).to.equal(children);
  });

  it('should set className for h* element', () => {
    expect(hEl.getAttribute('class')).to.equal(className);
  });
});
