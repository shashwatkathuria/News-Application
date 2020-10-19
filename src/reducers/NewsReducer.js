import * as constants from '../constants/constants';

const initialState = {
  newsArticles: [],
  savedNewsArticles: [],
  filteredNewsSources: []
};

export default function newsReducer(state = initialState, action) {
  switch(action.type) {
    case constants.FETCH_NEWS_ARTICLES:
      const articles = action.payload.map(article => ({
            ...article,
            title: article.title.replace('- ' + article.source.name, "")
          }));
      return {
        ...state,
        newsArticles: [...articles]
      };
    case constants.SAVE_NEWS_ARTICLE:
      return {
        ...state,
        savedNewsArticles: [...state.savedNewsArticles, action.payload]
      };
    case constants.UNSAVE_NEWS_ARTICLE:
      return {
        ...state,
        savedNewsArticles: [...state.savedNewsArticles.filter(article => article.title !== action.payload.title)]
      };
    case constants.ADD_FILTER:
      return {
        ...state,
        filteredNewsSources: [...state.filteredNewsSources, action.payload]
      };
    case constants.REMOVE_FILTER:
      return {
        ...state,
        filteredNewsSources: [...state.filteredNewsSources.filter(newsSource => newsSource !== action.payload)]
      };
    case constants.CLEAR_FILTERS:
      return {
        ...state,
        filteredNewsSources: []
      };
    default:
      return state;
  }
}
