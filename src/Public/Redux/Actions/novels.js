import Axios from 'axios';

const url = 'https://novel-library-backend.herokuapp.com';
const development = 'http://localhost:3367';

export const novels = {
	getNovels: query => {
		return {
			type: 'GET_NOVELS',
			payload: Axios.get(`${url}/api/novel${query}`),
		};
	},
	postNovel: newNovel => {
		return {
			type: 'POST_NOVEL',
			payload: Axios.post(`${url}/api/novel`, newNovel),
		};
	},
	editNovel: (newNovel, id) => {
		return {
			type: 'EDIT_NOVEL',
			payload: Axios.put(`${url}/api/novel/${id}`, newNovel),
		};
	},
	deleteNovel: id_book => {
		return {
			type: 'DELETE_NOVEL',
			payload: Axios.delete(`${url}/api/novel/${id_book}`),
		};
	},
};
