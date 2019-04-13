import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import Formation from '../models/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private formations: Formation[] = [];
  private formationUpdated = new Subject<Formation[]>();
  uri = 'http://localhost:3000/formation';
  constructor(private http: HttpClient) { }
  private refreshNeeds = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeds;
  }

  addFormation(nameFormation: string, type: string, imageUrl: File, Sujet: string, Description: string, Plan: string) {
    const formationData = new FormData();
    formationData.append("nameFormation", nameFormation);
    formationData.append("type", type);
    formationData.append("imageUrl", imageUrl);
    formationData.append("Sujet", Sujet);
    formationData.append("Description", Description);
    formationData.append("Plan", Plan);

    this.http.post(`${this.uri}/add`, formationData)
    .subscribe(res => console.log('Done'));
  }

  getBusinesses() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editBusiness(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

  updateBusiness(nameFormation, type, nb, id) {

    const obj = {
      nameFormation: nameFormation,
      type: type,
      nb: nb
    };
    this
      .http
      .put(`${this.uri}/update/${id}`, obj).pipe(tap(()=>{
        this.refreshNeed.next();
      }))
      .subscribe(res => console.log('Done'));
  }

 deleteBusiness(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
