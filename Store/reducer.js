import * as actions from './actions';
import Place from '../Model/Place';

const initialState = {
    places: []
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actions.ADD_PLACE:
            const newPlace = new Place(new Date().toString, action.title);
            return {
                places: state.places.concat(newPlace)
            };
        default:
            return state;
    }
}

export default reducer;