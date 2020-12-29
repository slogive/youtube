// The action creators
export const changeNavBarVisibility = () => ({ type: 'INC' });
export const changeSearch = (payload) => ({ type: 'SEARCH', payload });
export const changeSearchStatus = (payload) => ({
  type: 'SEARCH_STATUS',
  payload,
});
