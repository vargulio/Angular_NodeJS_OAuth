import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Rx";

const apiUrl = '';

@Injectable()
export class HttpService {


  private headers: HttpHeaders;

  constructor(public http: HttpClient) {
    this.headers = new HttpHeaders();
  }


  private generateUrlParams(params: any): HttpParams {
    let httpParams: HttpParams = new HttpParams();
    for (const key in params) {
      httpParams = httpParams.set(key, params[key]);
    }
    return httpParams;
  }

  public get(url: string, urlParams: any = {}): Observable<any> {
    const params: HttpParams = this.generateUrlParams(urlParams);
    return this.http.get(apiUrl + url, {
      headers: this.headers,
      params: params,
      responseType: 'json'
    });
  }

  public post(url: string, data: any = {}, urlParams: any = {}): Observable<any> {
    const params: HttpParams = this.generateUrlParams(urlParams);
    return this.http.post(apiUrl + url, data, {
      headers: this.headers,
      params: params,
      responseType: 'json'
    });
  }

  public put(url: string, data: any = {}, urlParams: any = {}): Observable<any> {
    const params: HttpParams = this.generateUrlParams(urlParams);
    return this.http.put(apiUrl + url, data, {
      headers: this.headers,
      params: params,
      responseType: 'json'
    });
  }

  public delete(url: string, urlParams: any = {}): Observable<any> {
    const params: HttpParams = this.generateUrlParams(urlParams);
    return this.http.delete(apiUrl + url, {
      headers: this.headers,
      params: params,
      responseType: 'json'
    });
  }
}