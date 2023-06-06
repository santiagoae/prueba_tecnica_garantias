import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURL } from 'src/BaseUrl';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

  export class userService {
    constructor(private http: HttpClient) {
      // Constructor del servicio
    }
  
    // Métodos del servicio
    obtenerUsuarios(): Observable<any> {
        return this.http.get<any>(`${baseURL}/users`);
    }
  }

  