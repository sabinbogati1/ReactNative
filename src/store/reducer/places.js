import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE} from "./../actions/actionTypes";

const initialState = {
    places: [],
    selectedPlace: null
}

const reducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName,
                    //image: placeImage
                    image: {
                        uri: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    }
                  })
            };

        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== state.selectedPlace.key;
                  }),
                  selectedPlace: null
            }

        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find(place => {
                    return place.key === action.placeKey;
                  })
            }

        case DESELECT_PLACE:
            return {
                ...state,
                selectedPlace: null

            }

        default:
            return state;
    }
}


export default reducer;