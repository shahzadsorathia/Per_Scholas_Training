import { EXAMPLE_START } from './actions';
const exampleState = {
	example: '',
	isExample: true,
	errors: ''
};
function exampleReducer(state = exampleState, action) {
	switch (action.type) {
		case EXAMPLE_START:
			return { ...state, isExample: false };

		default:
			return state;
	}
}
