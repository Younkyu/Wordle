import { Component, OnInit, Input, Output, HostListener, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.css']
})
export class AttemptComponent implements OnInit {
  @Input() rowNum: string | undefined;
  @Input() ready: string | undefined;

  @Output() changeReady = new EventEmitter();

  typed: string | undefined;
  letter0: string | undefined;
  letter1: string | undefined;
  letter2: string | undefined;
  letter3: string | undefined;
  letter4: string | undefined;
  index: number = 0;

  static alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.ready === 'yes') {
      this.typed = event.key.toUpperCase();
      if (this.typed === 'BACKSPACE' && this.index > 0) {
        this.index--;

        switch (this.index) {
          case 0:
            this.letter0 = '';
            break;

          case 1:
            this.letter1 = '';
            break;

          case 2:
            this.letter2 = '';
            break;

          case 3:
            this.letter3 = '';
            break;

          case 4:
            this.letter4 = '';
            break;

          default:
            break;
        }

      } else if (this.typed === "ENTER" && this.index >= 5) {
        console.log("CONFIRMING");
        this.changeReady.emit();
      } else if (AttemptComponent.alphabet.includes(this.typed)) {
        if (this.index < 5) {

          switch (this.index) {
            case 0:
              this.letter0 = this.typed;
              break;

            case 1:
              this.letter1 = this.typed;
              break;

            case 2:
              this.letter2 = this.typed;
              break;

            case 3:
              this.letter3 = this.typed;
              break;

            case 4:
              this.letter4 = this.typed;
              break;

            default:
              break;
          }
          this.index++;
        }
      }
    }

  }

}
