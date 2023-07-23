import { ADD_TO_SAVED } from "../constants/savedConstants";

export const savedReducer = (state = { savedProperties: [] }, action) => {
    switch (action.type) {
        case ADD_TO_SAVED:
            // Check if the property isn't already in saved properties
            const item = action.payload;
            const existItem = state.savedProperties.find(
                (x) => x.property === item.property
            );

            if (existItem) {
                // Update the existing property with the new information
                return {
                    ...state,
                    savedProperties: state.savedProperties.map((x) =>
                        x.property === existItem.property ? item : x
                    ),
                };
                // If the property doesn't exist, add it to the savedProperties array
            } else {
                return {
                    ...state,
                    savedProperties: [...state.savedProperties, item],
                };
            }

        default:
            return state;
    }
};
