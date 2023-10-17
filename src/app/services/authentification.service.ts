import { Injectable } from '@angular/core';
import {catchError, map, Observable, throwError} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private baseUrl: string = "http://localhost:8080"
  public registerUrl: string = `${this.baseUrl}/register`
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

  postData(url:string,data:any){
    let headers:any = {};

    if (this.getAuthToken() !== null){
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.getAuthToken()
      });
    }
    return this.http.post(this.baseUrl + url, data, { headers }).pipe(
        map((response: any) => {
          // Handle and return the response data
          return response;
        }),
        catchError((error: any) => {
          // Handle and forward the error
          console.error('POST request error:', error);
          return throwError(error);
        })
    );
  }

  request(method, url, data) {
    let headers = {};

    if (this.getAuthToken() !== null) {
      headers = {
        'Authorization': 'Bearer ' + this.getAuthToken()
      };
    }

    const requestOptions = {
      method: method,
      headers: headers,
      body: data ? JSON.stringify(data) : undefined
    };

    return fetch(url, requestOptions)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        });
  }
}
