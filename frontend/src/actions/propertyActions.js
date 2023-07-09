import axios from "axios";
import {
    PROPERTY_LIST_REQUEST,
    PROPERTY_LIST_SUCCESS,
    PROPERTY_LIST_FAIL,
} from "../constants/propertyConstants";

export const listProperties = () => async (dispatch) => {
    try {
        dispatch({ type: PROPERTY_LIST_REQUEST }) // This dispatch is going to fire off first reducers

        const { data } = await axios.get("/api/properties");
        dispatch({
            type: PROPERTY_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PROPERTY_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
