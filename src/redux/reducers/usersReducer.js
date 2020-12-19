import produce from 'immer'
import { ADD_REVIEW } from '../constants';
import { normalizedUsers } from '../../fixtures';
import { arrToMap } from '../utils';

// Используется immer без мутирования данных
const usersReducer = produce((draft = arrToMap(normalizedUsers), action) => {
	const { type, payload, userId } = action;

	switch (type) {
		case ADD_REVIEW:
			const {name} = payload.review
			draft[userId] =  {id: userId, name}
			break;

		// case ADD_REVIEW:
		// 	const { name } = payload.review;
		// 	return {
		// 		...state,
		// 		[userId]: { id: userId, name },
		// 	};

		default:
			return draft;
	}
});

export default usersReducer;
