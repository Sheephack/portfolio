import { createGlobalStyle } from "styled-components";

declare module "styled-components" {
	export interface DefaultTheme{
		body: string;
		text: string;
		sidebar: string;
		exGlow: string;
		accent: string;
		sky: string;
	}
}

export const GlobalStyles = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	background: ${({ theme }) => theme.body};
	color: ${({ theme }) => theme.text};
	line-height: 1;
	transition: all 0.5s linear;
	font-family: 'Lexend Deca', sans-serif;
}
html{
	scroll-behavior: smooth;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a{
	text-decoration: none;
}

.sideBar__navBar__container{
	background: ${({ theme }) => theme.sidebar};
	box-shadow: ${({ theme }) => theme.exGlow};
}
`;

export const lightTheme = {
	  body: "#ffffff",
	  text: "#121212",
	  sidebar: "#fff",
	  exGlow: "0 0 10px rgba(0 0 0 / 20%)",
	  accent: "#6930D2",
	  sky: "linear-gradient(to bottom, #90dffe 0%,#38a3d1 100%)",
};

export const darkTheme = {
	body: "#121212",
	text: "#ffffff",
	sidebar: "#202020",
	exGlow: "0 0 10px rgba(50 50 50 / 100%)",
	accent: "#FFC715",
	sky: "linear-gradient(to bottom, #090401 50%,#4B1D06 100%)",
};