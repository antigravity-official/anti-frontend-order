import React from 'react';
import Header from '../components/common/Header';

const Main = () => {
  return (
    <div className="mt-[140px]">
      <Header />
      <div className="flex">
        <div className="w-[100%] text-2xl pt-[100px] text-center">상단의 주문조회를 클릭해주세요!</div>
      </div>
    </div>
  );
};

export default Main;
