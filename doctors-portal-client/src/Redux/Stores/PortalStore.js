import { createStore } from "redux";
import { portalReducer } from "../Reducers/PortalReducers";

export const portalStore = createStore(portalReducer);