import styled from 'styled-components';

export const CartContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

export const CartTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 1.5em;
  color: #333;
`;

export const EmptyCartMessage = styled.p`
  text-align: center;
  color: #777;
  font-size: 1.2em;
`;
