import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
    margin: 0;
		background-color: ${(props) => props.theme.color.background};
	}
`;

export default GlobalStyle;
