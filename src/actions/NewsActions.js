import * as constants from '../constants/constants';

export const fetchNewsArticles = () => {
  return function(dispatch) {
    const news_api_url = constants.NEWS_API_URLS[Math.floor(Math.random() * constants.NEWS_API_URLS.length)];
    console.log(news_api_url);
    return fetch(news_api_url)
      .then((response) => response.json())
      .then((json) => {
          dispatch({
            type: constants.FETCH_NEWS_ARTICLES,
            payload: json.articles
          });
      })
      .catch((error) => {
        dispatch({
          type: 'ACTION_DOESNT_EXIST',
          payload: []
        });
      });
  };
}

export const saveNewsArticle = (newsArticle) =>  {
  return function(dispatch) {
    dispatch({
      type: constants.SAVE_NEWS_ARTICLE,
      payload: newsArticle
    });
  };
}

export const unsaveNewsArticle = (newsArticle) =>  {
  return function(dispatch) {
    dispatch({
      type: constants.UNSAVE_NEWS_ARTICLE,
      payload: newsArticle
    });
  };
}

export const addFilter = (newsSource) => {
  return function(dispatch) {
    dispatch({
      type: constants.ADD_FILTER,
      payload: newsSource
    });
  };
}

export const removeFilter = (newsSource) => {
  return function(dispatch) {
    dispatch({
      type: constants.REMOVE_FILTER,
      payload: newsSource
    });
  };
}

export const clearFilters = () => {
  return function(dispatch) {
    dispatch({
      type: constants.CLEAR_FILTERS
    });
  };
}
