import React, {useContext} from 'react';
const LoadingContext=React.createContext({})
export function useLoadingContext(){
    return useContext(LoadingContext)
}

export default LoadingContext;
