import styled from 'styled-components';

export const Loading = styled.div`
  color: #333;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const Pokemon = styled.header`
  display:flex;
  flex-direction: column;
  align-items: center;
  a{
    color: black;
    font-size: 15px;
    text-decoration: none;
  }
  img {
    border-radius: 50%;
    margin-top: 10px;
    width:120px;
    height:100px;
  }
  h1{
    font-size: 22px;
  }
  h2{
    font-size: 16px;
    margin-top: 7px;
  }
  p{
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    text-align: center;
  }
`
export const List = styled.ul`
  list-style : none;
  margin-top: 3px;

  li{
    padding : 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  & + li {
    border-top: 1px solid #eee;
  }}`;