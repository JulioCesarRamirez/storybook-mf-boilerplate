export const INCREMENT = 'INCREMENT';
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';

export const increment = () => ({
  type: INCREMENT,
});

export const incrementAsync = () => ({
  type: INCREMENT_ASYNC,
});
