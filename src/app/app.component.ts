import { Component } from "@angular/core";
import { ObjectService } from "./object.service";

import { Observable } from 'rxjs';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  constructor(private objectService: ObjectService) {}

  objects: Array<any>;

  objectsWithAsyncPipe: Observable<any>;

  ngOnInit() {
    this.getObjects();
    this.objectsWithAsyncPipe = this.objectService.getAllObjects()
  }

  getObjects() {
    this.objectService.getAllObjects().subscribe(data => {
      console.table(data);
      this.objects = data;
    });
  }
}
