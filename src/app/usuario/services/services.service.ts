import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private apiUrl = "https://api.github.com/users"

  constructor(private http: HttpClient) { }


  getUserByName(username: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/${username}`)
  }
}
