// Dependencies
import { createGlobalStyle } from 'styled-components';

// Assets
import  fundo from '../assets/fundo.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
  }
  body {
    background: #121214;
    font-size: 14px;
    color: white;
    font-family: sans-serif, Inter;
		background-image: url(${fundo});
		background-repeat: no-repeat;
		background-size: cover;
	}
`;