import React from 'react';
import {Provider} from './contextProvider';

const ContextProvider = ({children, ...rest}) => (
		<Provider value={{...rest}}>
			{children}
		</Provider>
);

export default ContextProvider;
