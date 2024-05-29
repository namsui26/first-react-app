// MonthSelector.jsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setSelectedMonth } from '../redux/slices/monthsSlice'; // 액션 생성자 가져오기

const Button = styled.button.attrs(props => ({
  type: 'button',
  active: undefined // active 속성 필터링
}))`
  background-color: ${props => (props.active ? 'blue' : 'white')};
  color: ${props => (props.active ? 'white' : 'black')};
  margin: 10px;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: ${props => (props.active ? 'blue' : '#f0f0f0')};
  }
`;

const MonthSelectorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  background-color: skyblue;
  border-radius: 10px;
  max-width: 980px;
  margin: auto;
  padding: 10px;
`;

const MonthSelectorContents = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  justify-items: center;
  width: 100%;
`;

const MonthSelector = () => {
  const dispatch = useDispatch();
  const selectedMonth = useSelector(state => state?.months?.selectedMonth); // 선택된 월 상태 가져오기

  const handleSelectMonth = month => {
    dispatch(setSelectedMonth(month)); // 선택된 월을 업데이트하는 액션 디스패치
  };

  return (
    <MonthSelectorContainer>
      <MonthSelectorContents>
        {[...Array(12)].map((_, index) => {
          const month = String(index + 1).padStart(2, '0');
          return (
            <Button
              key={month}
              active={selectedMonth === month}
              onClick={() => handleSelectMonth(month)}
            >
              {index + 1}월
            </Button>
          );
        })}
      </MonthSelectorContents>
    </MonthSelectorContainer>
  );
};

export default MonthSelector;




