import {
    AGENT_LIST_SUCCESS,
    AGENT_LIST_FAIL,
    AGENT_LIST_REQUEST,
} from "../constants/agentConstants";

export const agentListReducer = (state = { agents: [] }, action) => {
    switch (action.type) {
        case AGENT_LIST_REQUEST:
            return { loading: true, agents: [] };

        case AGENT_LIST_SUCCESS:
            return { loading: false, agents: action.payload };

        case AGENT_LIST_FAIL:
            return { loading: false, error: action.payload };
        
        default:
            return state;
    }
};
