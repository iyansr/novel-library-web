import Axios from 'axios';
// const url = 'https://novel-library-backend.herokuapp.com';
// const development = 'http://localhost:3367';

export const genres = () => {
	return {
		type: 'GET_GENRES',
		payload: Axios.get(`https://stormy-eyrie-12807.herokuapp.com/api/v2/genre`),
	};
};
