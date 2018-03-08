import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ApiResponseModel } from '../models/api-response-model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {

  constructor(private _httpClient: HttpClient) { }

  getApiData(): Observable<ApiResponseModel> {
    return this._httpClient.get("./assets/data-sources/data.json") as Observable<ApiResponseModel>
  }

}
