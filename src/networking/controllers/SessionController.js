import httpClient from '../httpClient';
import TokenService from '../tokenService';

class SessionController {
  static async login(username, password) {
    const response = await httpClient.post('/auth/signin', {
      username,
      password,
    });

    TokenService.setUser(response.data);
  }

  static async signUp(username, password, email) {
    const response = await httpClient.post('/auth/signup', {
      email,
      password,
      username,
    });

    TokenService.setUser(response.data);
  }

  static getUser() {
    return httpClient.get('/test/user');
  }
}

export default SessionController;
