import React from "react";
import userStore from "./user.store";

class RootStore {
    userStore: userStore
    constructor() {
        this.userStore = new userStore(); 
    }

}

const StoresContext = React.createContext(new RootStore())
export const useStore = () => React.useContext(StoresContext)

