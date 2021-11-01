import { createGlobalStyle } from "styled-components";

import Menu from "./components/Menu/Menu";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
    background-color: #fdf2e9;
    font-family: 'Arial', cursive;
  }
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <div style ={{ textAlign:'center', flex:1, paddingTop:'10%' }}>Welcome</div>
      <Menu />
    </div>
  );
};

export default App;
