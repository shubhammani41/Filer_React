import { createContext } from "react";


const AppContext = createContext({
    userData:{},
    darkMode: false
});
export { AppContext };