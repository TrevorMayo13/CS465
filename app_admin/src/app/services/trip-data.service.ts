import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import { Trip } from '../models/trip';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor(private http: Http) { }

  private apiBaseUrl = "http://localhost:3000/api/";
  private tripUrl = `${this.apiBaseUrl}trips/`;

  public getTrips(): Promise<Trip[]> {
    console.log('Inside TripDataService#getTrips')
    return this.http
      .get(`${this.apiBaseUrl}trips`)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  public addTrip(formData: Trip): Promise<Trip> {
    console.log("Inside TripDataService#addTrip");

    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("travlr-token")}`,
    });

    return this.http
      .post(this.tripUrl, formData, { headers: headers } as RequestOptionsArgs)  // Cast headers to RequestOptionsArgs
      .toPromise()
      .then((response) => response.json() as Trip[])
      .catch(this.handleError);
  }

  public getTrip(tripCode: string): Promise<Trip> {
    console.log('Inside TripDataService#getTrip(tripCode)');
    return this.http
      .get(this.tripUrl + tripCode)
      .toPromise()
      .then(response => response.json() as Trip)
      .catch(this.handleError);
  }

  public updateTrip(formData: Trip): Promise<Trip> {
    console.log("Inside TripDataService#updateTrip");

    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("travlr-token")}`,
    });

    return this.http
      .put(this.tripUrl + formData.code, formData, { headers: headers } as RequestOptionsArgs)  // Cast headers to RequestOptionsArgs
      .toPromise()
      .then((response) => response.json() as Trip[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    const url: string = `${this.apiBaseUrl}${urlPath}`;
    console.log(url);
    console.log(user);
    return this.http
      .post(url, user, { headers: new Headers({ "Content-Type": "application/json" }) } as RequestOptionsArgs)  // Cast headers to RequestOptionsArgs
      .toPromise()
      .then(response => response.json() as AuthResponse)
      .catch(this.handleError);
  }
}
