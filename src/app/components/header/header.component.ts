import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Wordle';

  constructor() { }

  ngOnInit(): void {
  }

  toggleSettings() {
    console.log("Toggle Settings");
  }

  toggleRefresh() {
    console.log("Toggle Refresh");
    location.reload();
  }

}
