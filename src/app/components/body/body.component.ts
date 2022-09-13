import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input() key: string | undefined;
  @Input() ready0: string = "yes";
  @Input() ready1: string = "no";
  @Input() ready2: string = "no";
  @Input() ready3: string = "no";
  @Input() ready4: string = "no";
  @Input() ready5: string = "no";

  constructor() { }

  ngOnInit(): void {
  }

  toggleReady0() {
    if (this.ready0 === "yes" && this.ready1 === "no" && this.ready2 === "no" && this.ready3 === "no" && this.ready4 === "no" && this.ready5 === "no") {
      this.ready0 = "no";
      this.ready1 = "yes";
    }
  }

  toggleReady1() {
    if (this.ready0 === "no" && this.ready1 === "yes" && this.ready2 === "no" && this.ready3 === "no" && this.ready4 === "no" && this.ready5 === "no") {
      this.ready1 = "no";
      this.ready2 = "yes";
    }
  }

  toggleReady2() {
    if (this.ready0 === "no" && this.ready1 === "no" && this.ready2 === "yes" && this.ready3 === "no" && this.ready4 === "no" && this.ready5 === "no") {
      this.ready2 = "no";
      this.ready3 = "yes";
    }
  }

  toggleReady3() {
    if (this.ready0 === "no" && this.ready1 === "no" && this.ready2 === "no" && this.ready3 === "yes" && this.ready4 === "no" && this.ready5 === "no") {
      this.ready3 = "no";
      this.ready4 = "yes";
    }
  }

  toggleReady4() {
    if (this.ready0 === "no" && this.ready1 === "no" && this.ready2 === "no" && this.ready3 === "no" && this.ready4 === "yes" && this.ready5 === "no") {
      this.ready4 = "no";
      this.ready5 = "yes";
    }
  }

  toggleReady5() {
    if (this.ready0 === "no" && this.ready1 === "no" && this.ready2 === "no" && this.ready3 === "no" && this.ready4 === "no" && this.ready5 === "yes") {
      this.ready5 = "no";
      console.log("EOG");
    }
  }

}
