import { styled } from "styled-components";

export const ColumnHeader = styled.div`
    width: ${props => props.width};
    display:flex;
    justify-content:flex-start;
    align-items: center;
    padding: 8px 0;
    font-weight: bold;
    text-align: center;

`

export const TableItem = styled.div`
    width: ${props => props.width};
    height: 28px;
    display:flex;
    justify-content:  ${props => props.justify || "flex-start" } ;
    align-items: center;
    
`

export const Row = styled.article`
  width: 100%;
  display:flex;
  align-items: center;
  gap: 8px;
`

export const TableContainer = styled.section`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--neutral-color);
  padding: 16px;
  border-radius: 15px;
  box-shadow: 0 0 1px black;

`
