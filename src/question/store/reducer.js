import {SUBMIT_ANSWER} from "./acitonType";
const defaultState={
    points:0
};
export default (state=defaultState,action)=>{
    switch (action.type) {
        case SUBMIT_ANSWER:
            return {points:state.points+4};
        default:
            return state;
    }
}

