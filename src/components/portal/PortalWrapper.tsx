import React, { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

const createWrapperAndAppendToBody = (wrapperId: string): HTMLDivElement => {
  const element = document.getElementById(wrapperId);

  /* 피드백 1 : element가 없거나, element가 있는데 tagname이 div가 아닐 경우를 확인해야 한다. */
  if (!element || element.tagName !== 'div') {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute('id', wrapperId);
    document.body.appendChild(wrapperElement); /* index.html 에 등록되어 있지 않은 div id 라면 새로 생성한다. */
    return wrapperElement;
  }
  /* 코드 가독성을 위해 else로 분기하지 않는다. */
  return element as HTMLDivElement;
};

// 'react-portal-loading-container' - 로딩중 포탈
const PortalWrapper = ({ children, wrapperId }: { children: React.ReactNode; wrapperId: string }) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLDivElement>();

  useLayoutEffect(() => {
    setWrapperElement(createWrapperAndAppendToBody(wrapperId));
    return () => {
      createWrapperAndAppendToBody(wrapperId).remove();
    };
  }, [wrapperId]);
  return wrapperElement ? createPortal(children, wrapperElement) : null;
};

export default PortalWrapper;
