import { createGlobalStyle } from "styled-components";

import AceepfimerBold from "../assets/fonts/Acephimere Bold.otf";
import AceepfimerRegular from "../assets/fonts/Acephimere Thin.otf";
import Adaadah from "../assets/fonts/Adadaha.otf";

export const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: 'Aceepfimer-Bold';
		src: local('Aceepfimer-Bold'), url(${AceepfimerBold}) format('truetype');
font-weight: 700;
font-style: normal;
font-display: swap;
	}

	@font-face {
		font-family: 'Aceepfimer-Regular';
		src: url(	${AceepfimerRegular}) format('truetype');
		font-weight: 700;
		font-style: normal;
		font-display: swap;
	}
	@font-face {
		font-family:	'Adaadah'; 
		src: url( ${Adaadah}) format('truetype');
		font-weight: 700;
		font-style: normal;
		font-display: swap;
	}


	* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Aceepfimer-Bold', sans-serif;
    font-weight: 400;
  }
`;
