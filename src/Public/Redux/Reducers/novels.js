const initState = {
  novelData: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false
};

export const novels = {
  getNovels: (prevState = initState, action) => {
    switch (action.type) {
      case 'GET_NOVELS_PENDING':
        return {
          ...prevState,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };

      case 'GET_NOVELS_REJECTED':
        return {
          ...prevState,
          isLoading: false,
          isRejected: true
        };
      case 'GET_NOVELS_FULFILLED':
        return {
          ...prevState,
          isLoading: false,
          isFulfilled: true,
          novelData: action.payload.data.data
        };

      default:
        return prevState;
    }
  },
  getNovelsId: (prevState = initState, action) => {
    switch (action.type) {
      case 'GET_NOVELSBYID_PENDING':
        return {
          ...prevState,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };

      case 'GET_NOVELSBYID_REJECTED':
        return {
          ...prevState,
          isLoading: false,
          isRejected: true
        };
      case 'GET_NOVELSBYID_FULFILLED':
        return {
          ...prevState,
          isLoading: false,
          isFulfilled: true,
          novelData: action.payload.data.data[0]
        };

      default:
        return prevState;
    }
  },
  postNovel: (prevState = initState, action) => {
    switch (action.type) {
      case 'POST_NOVEL_PENDING':
        return {
          ...prevState,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };

      case 'POST_NOVEL_REJECTED':
        return {
          ...prevState,
          isLoading: false,
          isRejected: true
        };
      case 'POST_NOVEL_FULFILLED':
        return {
          ...prevState,
          isLoading: false,
          isFulfilled: true,
          novelData: action.payload.data.data
        };

      default:
        return prevState;
    }
  }
};
