import { Injectable } from '@angular/core';
import {catchError, map, Observable, throwError} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RegisterRequest} from "../../models/RegisterRequest";
import {AuthenticationResponse} from "../../models/AuthentificationResponse";
import {AuthenticationRequest} from "../../models/AuthentificationRequest";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private baseUrl: string = "http://localhost:8080"
  constructor(private http: HttpClient) {

  }

  getAuthToken(): string | null {
    return window.localStorage.getItem("auth_token");
  }

  setAuthToken(token: string | null): void {
    if (token !== null) {
      window.localStorage.setItem("auth_token", token);
    } else {
      window.localStorage.removeItem("auth_token");
    }
  }
  register(registerRequest: RegisterRequest) {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/register`, registerRequest);
  }

  login(authRequest: AuthenticationRequest) {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/login`, authRequest);
  }

  logout() {
    this.setAuthToken(null);
  }

  getData(url:string): Observable<any> {
    let headers: any = {};

    if (this.getAuthToken() !== null) {
      headers = {"Authorization": "Bearer " + this.getAuthToken()};
    }

    const requestOptions = {
      headers: new HttpHeaders(headers)
    };

    return this.http.get<any>(`${this.baseUrl}/${url}`, requestOptions)
  }

  postData(url:string, data:any): Observable<any> {
    let headers: any = {};

    if (this.getAuthToken() !== null) {
      headers = {"Authorization": "Bearer " + this.getAuthToken()};
    }

    const requestOptions = {
      headers: new HttpHeaders(headers)
    };

    return this.http.post<any>(`${this.baseUrl}/${url}`, data, requestOptions)
  }

  deleteData(url:string): Observable<any> {
    let headers: any = {};

    if (this.getAuthToken() !== null) {
      headers = {"Authorization": "Bearer " + this.getAuthToken()};
    }

    const requestOptions = {
      headers: new HttpHeaders(headers)
    };

    return this.http.delete<any>(`${this.baseUrl}/${url}`, requestOptions)
  }
}
