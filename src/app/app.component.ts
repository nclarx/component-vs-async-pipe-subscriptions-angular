import { Component, OnDestroy } from "@angular/core";
import { ObjectService } from "./object.service";

import { Observable, Subscription } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnDestroy {
  public name = "Angular";
  public objects: Array<any>;
  public objectsWithAsyncPipe: Observable<any>;

  private objectSubscription: Subscription;

  constructor(private objectService: ObjectService) {}

  ngOnInit() {
    this.getObjects();
    this.objectsWithAsyncPipe = this.objectService.getAllObjects();
  }

  ngOnDestroy() {
    this.objectSubscription.unsubscribe();
  }

  getObjects() {
    this.objectSubscription = this.objectService
      .getAllObjects()
      .subscribe(data => {
        console.table(data);
        this.objects = data;
      });
  }
}
