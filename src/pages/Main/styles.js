import styled from 'styled-components';

export const Title = styled.h1`
  color:black;
  /*color: ${props => props.error ? 'red':'black'};
  font-family: Arial, Helvetica, sans-serif;
  
  small {
    font-size: 16px;
  }*/
`;
export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  input {
    flex:1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;
export const SearchButton = styled.button.attrs(props => ({
  type: 'submit'
})) `
  background: #FFDB58;
  border: 0;
  padding : 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  list-style : none;
  margin-top: 30px;

  li{
    padding : 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  & + li {
    border-top: 1px solid #eee;
  }
  a{
    color: #333;
    text-decoration: none;
  }
  span{
    margin-right: 450px;
  }
  }
`;