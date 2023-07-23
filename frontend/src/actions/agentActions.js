import axios from "axios";
import {
    AGENT_LIST_SUCCESS,
    AGENT_LIST_FAIL,
    AGENT_LIST_REQUEST,
} from "../constants/agentConstants";

export const listAgents = () => async (dispatch) => {
    try {
        dispatch({ type: AGENT_LIST_REQUEST });

        const { data } = await axios.get("api/agents");
        dispatch({
            type: AGENT_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: AGENT_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
