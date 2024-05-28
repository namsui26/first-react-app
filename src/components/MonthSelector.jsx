import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => (props.active ? 'blue' : 'white')};
  color: ${props => (props.active ? 'white' : 'black')};
  margin: 5px;
  padding: 10px;
`;

const MonthSelector = ({ selectedMonth, setSelectedMonth }) => {
  return (
    <div>
      <h3>월 선택</h3>
      <div>
        {[...Array(12)].map((_, index) => {
          const month = String(index + 1).padStart(2, '0');
          return (
            <Button
              key={month}
              active={selectedMonth === month}
              onClick={() => setSelectedMonth(month)}
            >
              {index + 1}월
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default MonthSelector;


