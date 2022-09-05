import React, { useMemo, useEffect, useContext, createContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import App from './components/App';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: lightslategrey};
  }
`

const contextData = createContext(/* defaultValue */);
export const useData = () => useContext(contextData);


export default function Context() {
	let textData = { text: 'Data from Context component' };

	const value = useMemo(() => ({
		textData
	 }), [/* upon change */]);

	return (
		<>
			<contextData.Provider value={value}>
				<GlobalStyle />
				<App />
			</contextData.Provider>
		</>
	);
};