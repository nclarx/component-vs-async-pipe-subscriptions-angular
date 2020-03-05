import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

export interface ObjectModel {
  id: number;
  name: string;
}

@Injectable()
export class ObjectService {
  constructor() {}

  getAllObjects(): Observable<ObjectModel[]> {
    return of([
      {
        id: 1,
        name: "Object One"
      },
      {
        id: 2,
        name: "Object Two"
      }
    ]);
  }
}
