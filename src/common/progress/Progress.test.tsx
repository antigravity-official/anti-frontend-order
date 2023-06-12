import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom'
import Progress from './Progress';

describe('<Progress />', () => {
  it('isVisible prop 이 참이면 "Loading..." 텍스트를 보여준다', () => {
    render(
      <Progress isVisible={true} />
    );
    const loadingElement = screen.queryByText(/Loading/i);
    expect(loadingElement).toBeVisible();
  });

  it('isVisible props이 거짓이면 Progress를 랜더하지 않는다', () => {
    render(
      <Progress isVisible={false} />
    );
    const loadingElement = screen.queryByText(/Loading/i);
    expect(loadingElement).toBeNull();
  });

})