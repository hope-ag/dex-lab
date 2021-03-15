import { Component, OnInit } from '@angular/core';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  open = false;
  menuIcon = faEllipsisH;

  ngOnInit(): void {}
  setOpen() {
    this.open = !this.open;
    this.menuIcon = this.open ? faTimesCircle : faEllipsisH;
  }
}
