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

type AddItemButtonProps = {
  dark?: boolean;
};

export const AddItemButton = styled.button<AddItemButtonProps>`
  width: 100%;
  max-width: 300px;
  padding: 10px 12px;
  background-color: #ffffff3d;
  border-radius: 4px;
  border: none;
  text-align: left;
  transition: background 85ms ease-in;
  color: ${(props) => (props.dark ? "#000" : "#fff")};
  cursor: pointer;

  &:hover {
    background-color: #ffffff52;
  }
`;

export const NewItemFormContainer = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const NewItemButton = styled.button`
  background-color: #5aac44;
  color: #fff;
  padding: 6px 12px;
  text-align: center;
  box-shadow: none;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    transform: scale(0.95);
  }
`;

export const NewItemInput = styled.input`
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  border-radius: 4px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;
