import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding :0;
  outline: 0;
  box-sizing: border-box;
}
html,body, #root {
  min-height: 100%;
}
body {
  background: #FFDB58;
}
body, input, button {
  color: #171717;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
}
button {
  cursor: pointer;
}
`;