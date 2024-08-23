import styled from 'styled-components';

export const ContainerList = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  
  li {
    list-style: none;
    cursor: pointer;
    font-weight: bold;
    padding: 10px;
    border-radius: 4px;
    transition: background-color 0.3s;
  }

  li:hover {
    background-color: #e2e2e2;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #0056b3;
  }

  span {
    margin-left: 10px;
    font-weight: bold;
  }
`;
