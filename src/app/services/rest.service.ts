import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RESTService {

  private baseUrl: String = environment.URL

  constructor(protected httpClient: HttpClient) {
  }

  get<T>(url: string, params: HttpParams): Observable<T> {
    return this.httpClient.get<T>(this.baseUrl + url, {
      params: params
    });
  }
}
