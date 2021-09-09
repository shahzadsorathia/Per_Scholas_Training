import { GET_URL } from './actions';
const initialState = {
	gifURL: ''
};
function reducer1(state = initialState, action) {
	switch (action.type) {
		case GET_URL_START:
			return { ...state, gifURL: action.load };
            

		default:
			return state;
	}
}
