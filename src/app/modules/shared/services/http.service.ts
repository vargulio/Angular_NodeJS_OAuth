import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Rx";

const apiUrl = 'http://localhost:3000/';

@Injectable()
export class HttpService {
  
  private headers: HttpHeaders;

  private DEFAULT_REQUEST_OPTIONS = {
    headers: this.headers,
    responseType: 'json',
    withCredentials: true
  };


  constructor(public http: HttpClient) {
    this.headers = new HttpHeaders();
  }

  private generateRequestOptions(newOptionsObj = {})  {
    const requestOptions = JSON.parse(JSON.stringify(this.DEFAULT_REQUEST_OPTIONS));
    for (let key in newOptionsObj) {
      requestOptions[key] = newOptionsObj[key];
    }
    return requestOptions;
  }


  private generateUrlParams(params: any): HttpParams {
    let httpParams: HttpParams = new HttpParams();
    for (const key in params) {
      httpParams = httpParams.set(key, params[key]);
    }
    return httpParams;
  }


  public get(url: string, urlParams: any = {}, requestOptions: any = {}): Observable<any> {
    const params: HttpParams = this.generateUrlParams(urlParams);
    requestOptions = this.generateRequestOptions(requestOptions);
    requestOptions.params = params;
    return this.http.get(apiUrl + url, requestOptions);
  }

  public post(url: string, data: any = {}, urlParams: any = {}, requestOptions: any = {}): Observable<any> {
    const params: HttpParams = this.generateUrlParams(urlParams);
    requestOptions = this.generateRequestOptions(requestOptions);
    requestOptions.params = params;
    return this.http.post(apiUrl + url, data,requestOptions);
  }

  public put(url: string, data: any = {}, urlParams: any = {}, requestOptions: any = {}): Observable<any> {
    const params: HttpParams = this.generateUrlParams(urlParams);
    requestOptions = this.generateRequestOptions(requestOptions);
    requestOptions.params = params;
    return this.http.put(apiUrl + url, data, requestOptions);
  }

  public delete(url: string, urlParams: any = {}, requestOptions: any = {}): Observable<any> {
    const params: HttpParams = this.generateUrlParams(urlParams);
    requestOptions = this.generateRequestOptions(requestOptions);
    requestOptions.params = params;
    return this.http.delete(apiUrl + url,requestOptions);
  }
}