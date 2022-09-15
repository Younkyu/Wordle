import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  event: KeyboardEvent | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  clickKey(input: string) {
    console.log("TYPED: " + input);
    document.dispatchEvent(new KeyboardEvent('keydown', {'key': input}));
  }

}
