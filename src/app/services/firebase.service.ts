import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public firebaseRealtime: AngularFireDatabase) {

  }

  public createFunctionalityList(Payload: any, link: string): void {
    this.firebaseRealtime.list(link).push(Payload).then(res => {
      Payload.idItem = res.key;
      // gán thuộc tính idItem = key;
      // object payload --> link: link + idItem
      this.firebaseRealtime.object(`${link}/` + `${Payload.idItem}`).update(Payload);
    });
  }
  public createFunctionalityObject(Payload: any, link: string): void {
    this.firebaseRealtime.object(link).update(Payload);
  }
  public readFunctionalityList(link: string): any {
    return this.firebaseRealtime.list(link).valueChanges();
  }

  // tslint:disable-next-line:typedef
  public readFunctionalityObject(link: string): any {
    return this.firebaseRealtime.object(link).valueChanges();
  }

  public updateFunctionality(rowdata: any, link: string): any {
    // rowdata.id = id;
    this.firebaseRealtime.object(link).update(rowdata).then((r: any) => r);
  }

  public updateFunctionalityList(rowdata: any, link: string, id: string): any {
    // rowdata.id = id;
    this.firebaseRealtime.object(`${link}/` + `${id}`).update(rowdata).then((r: any) => r);
  }

  public deleteFunctionality(rowdata: any, link: string): any {
    this.firebaseRealtime.object(`${link}/` + `${rowdata.idItem}`).remove().then((r: any) => r);
  }

  public deleteFunctionalityCart(link: string, code: string): any {
    this.firebaseRealtime.object(`${link}/` + `${code}`).remove().then((r: any) => r);
  }

}
