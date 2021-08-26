const ROUTES = {
  ALL: '/all',
};

const generateURL = (route) => `${process.env.REACT_APP_API_URL}${route}`;

export { ROUTES, generateURL };
