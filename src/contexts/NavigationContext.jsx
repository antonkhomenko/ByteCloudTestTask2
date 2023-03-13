import {createContext, useReducer, useState} from "react";

export const NavigationContext = createContext(0);
export const NavigationDispatchContext = createContext(null);

export const NavigationProvider = ({children}) => {

    const [step, setStep] = useState(1);

    return (
        <NavigationContext.Provider value={step}>
            <NavigationDispatchContext.Provider value={setStep}>
                {children}
            </NavigationDispatchContext.Provider>
        </NavigationContext.Provider>
    )
}

