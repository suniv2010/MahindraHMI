import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  isHomeRoute() {
    if (this.router.url == '/' || this.router.url == '/login/forget-password') {
      return false;
    }
    return true;
  }
}
