import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {
 
  private url="http://localhost:3000/session";
  constructor(private http: HttpClient) { }
  sendsession(Session,id) {
    return this.http.post(`${this.url}/${id}`, Session).subscribe(res => console.log('Done'));
   }
   getSessions() {
     return this.http.get(`${this.url}/`);
   }
    
   delete(id) {
     return this.http.delete(`${this.url}/delete/${id}`).subscribe(res => console.log('Done'));
   }
}
