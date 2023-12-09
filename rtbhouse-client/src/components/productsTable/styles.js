import { styled } from "styled-components";

export const ColumnHeader = styled.div`
    width: 160px;
    display:flex;
    justify-content:center;
    align-items: center;
    border: 1px solid black;
    border-radius: 15px;
    padding: 8px;
    font-weight: bold;
`

export const TableItem = styled.div`
    width: 160px;
    height: 20px;
    display:flex;
    justify-content:center;
    align-items: center;
    font-size: 0.8em;
`

export const Row = styled.article`
  width: 100%;
  display:flex;
  justify-content:space-evenly;
  align-items: center;
  gap: 8px;
`

