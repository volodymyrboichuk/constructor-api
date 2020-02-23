import React, {useReducer, useEffect} from 'react';
import Provider from '../context/Provider';
import useJsonBox from 'react-jsonbox';
import {materialReducer} from '../reducers/materialReducer';


const withCrud = (Component) => {
    const AppProvider = (props) => {
        const [state, dispatch] = useReducer(materialReducer, []);
        const crud = useJsonBox();
        useEffect(() => {
            crud.read().then(({data}) => dispatch({type: 'INIT_CONTENT', data}));
            // eslint-disable-next-line
        }, [])

        return <Provider {...crud} {...props} {...state} dispatch={dispatch}>
            <Component />
        </Provider>
    }
    return AppProvider;
};

export default withCrud;