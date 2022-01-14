import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  logOut() {
    localStorage.setItem('my-token', '');
    window.location.href = '/';
  }

}
