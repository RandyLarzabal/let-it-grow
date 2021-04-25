import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick = () => {
    document.querySelector('body').classList.toggle('open');
    document.querySelector('.burger').classList.toggle('exit');
  }

}
