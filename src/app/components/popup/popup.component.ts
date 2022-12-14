import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @Input() msg: string = "";
  @Input() answer: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  toggleRefresh() {
    console.log("Toggle Refresh");
    location.reload();
  }

}
