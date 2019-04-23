const ID_TOKEN_KEY = 'id_token';

const getToken = () => window.localStorage.getItem(ID_TOKEN_KEY);

const saveToken = () => window.localStorage.setItem(ID_TOKEN_KEY, ID_TOKEN_KEY);

const destroyToken = () => window.localStorage.removeItem(ID_TOKEN_KEY);

export default { getToken, saveToken, destroyToken };
