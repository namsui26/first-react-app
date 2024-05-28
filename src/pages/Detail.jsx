import React from 'react';
import { Link } from 'react-router-dom';

const Detail = () => {
  return (
    <div>
      <h1>Detail Page</h1>
      {/* 디테일 페이지 컨텐츠 */}
      {/* 메인 페이지로 돌아가는 링크 */}
      <Link to="/">Go back to Main Page</Link>
    </div>
  );
};

export default Detail;



