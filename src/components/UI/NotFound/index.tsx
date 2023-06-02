import { Link } from 'react-router-dom';
import * as $ from './NotFound.styles';

const NotFound = () => {
  return (
    <$.NotFoundWrapper>
      <p>404 NOT FOUND</p>
      <p>페이지를 찾을 수 없습니다.</p>
      <Link to="/">
        <button>메인화면으로 돌아가기</button>
      </Link>
    </$.NotFoundWrapper>
  );
};

export default NotFound;
