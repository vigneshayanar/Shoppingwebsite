export const filterReducer = (state, action) => {
    switch (action.type) {
        case 'SORT_BY_PRICE':
            return { ...state, sort: action.payload };

        case 'FILTER_BY_RATING':
            return { ...state, byRating: action.payload };

        case 'SEARCH_QUERY':
            return { ...state, searchQuery: action.payload };
        case 'FILTER_BY_CATEGORY':
            return { ...state, category: action.payload };
        case "CLEAR_FILTER":
            return {
                ...state,
                byRating: 0,
                searchQuery: "",
                sort: "",
                category: ""
            };

        default:
            return state;
    }
}
