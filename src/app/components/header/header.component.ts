import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick = () => {
    document.querySelector('body').classList.toggle('open');
    document.querySelector('.burger').classList.toggle('exit');
  }

}
