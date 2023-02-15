export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('usuario'));
  
    if (user && user.token) {
        return { 'x-token': user.token };
    } else {
      return {};
    }
  }