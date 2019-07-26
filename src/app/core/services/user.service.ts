import { Injectable } from '@angular/core';
import { User } from '../../shared/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    fullName: '',
    email: '',
    password: ''
  };
  constructor(private http: HttpClient) { }

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  getUserPayload() {
    var token = this.getToken();
    if(token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    console.log(userPayload);
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }

  postUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/register', user, this.noAuthHeader);
  }

  login(authCredentials){
    return this.http.post(environment.apiBaseUrl+'/authenticate', authCredentials, this.noAuthHeader);
  }

  setToken(token: string){
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken(){
    localStorage.removeItem('token');
  }

  getUserProfile() {
    return this.http.get(environment.apiBaseUrl + '/userProfile');
  }
}
