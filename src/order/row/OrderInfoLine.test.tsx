import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import OrderInfoLine from './OrderInfoLine';


describe('<OrderInfoLine />', () => {
  it('line prop으로 빈 문자를 입력받으면 <br/>태그를 랜더한다.', () => {
    const utils = render(
      <OrderInfoLine line={''}/>
    )
    
    expect(utils.container.childNodes[0].nodeName.toLowerCase()).toBe('br');
  })
  
  it('line prop으로 string을 입력받으면 <div></div> 태그 내 문자를 랜더한다.', () => {
    const line = 'test'
    const utils = render(
      <OrderInfoLine line={line}/>
    )

    const childNode = utils.container.childNodes[0]
    expect(childNode.nodeName.toLowerCase()).toBe('div');
    expect(childNode.textContent).toBe('test');
  })
})