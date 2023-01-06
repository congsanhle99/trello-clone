import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding: 20px;
  background-color: #3179ba;
`;

export const ColumnContainer = styled.div`
  width: 300px;
  min-height: 40px;
  background-color: #ebecf0;
  margin-right: 20px;
  padding: 8px 8px;
  border-radius: 4px;
  /* flex-grow: 0; */
`;

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

export const CardContainer = styled.div`
  max-width: 300px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: #091e4240 0px 1px 0px 0px;
  cursor: pointer;
`;
