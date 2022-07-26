import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit, OnDestroy {
  title = 'carefordesign';
  private navigationSubscription!: Subscription;


  constructor(private router: Router) {
  }


  ngOnInit() {
    this.navigationSubscription = this.router.events.subscribe((event) => {
      if ((event instanceof NavigationEnd)) {
        window.scrollTo(0, 0)
      }
    })
  }

  ngOnDestroy(): void {
    this.navigationSubscription.unsubscribe();
  }
}


