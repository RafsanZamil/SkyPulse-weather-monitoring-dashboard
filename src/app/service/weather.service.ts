import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private _http: HttpClient) {}
  TopHeadlinesNews =
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=1ec6e4e7a7b14a97b892f44987ea972a';
  tcHeadlines(): Observable<any> {
    return this._http.get(this.TopHeadlinesNews);
  }
}
