import axios from "axios";
import { ADD_TO_SAVED } from "../constants/savedConstants";

// getState lets us to get any part of the state, we need this, when we updating lc storage and loading data
export const addToSaved = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/properties/${id}`);

    dispatch({
        type: ADD_TO_SAVED,
        payload: {
            property: data._id,
            address: data.address,
            price: data.price,
            state: data.state,
            city: data.city,
            sqm: data.sqm,
        },
    });

    localStorage.setItem(
        "savedProperties",
        JSON.stringify(getState().saved.savedProperties)
    );
};
