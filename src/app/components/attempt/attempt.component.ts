import { Component, OnInit, Input, Output, HostListener, EventEmitter } from '@angular/core';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.css']
})
export class AttemptComponent implements OnInit {
  @Input() rowNum: string | undefined;
  @Input() ready: string | undefined;

  @Output() changeReady = new EventEmitter();
  @Output() finish = new EventEmitter();

  word: string = "";
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

  checkWord() {
    var divs = document.getElementById("" + this.rowNum)?.querySelectorAll(".letterBox");
    var wordArray = this.word.split('');
    // in case for multiple yellow marks when there should be only one yellow
    for (let x = 0; x < 5; x++) {
      if(wordArray.includes(BodyComponent.wordle.charAt(x))) {
        wordArray.splice(wordArray.indexOf(BodyComponent.wordle.charAt(x)), 1);
      }
    }
    // colorcode letter boxes
    for(let i = 0; i < 5; i++) {
      if (this.word.charAt(i) === BodyComponent.wordle.charAt(i)) {
        divs?.item(i).classList.add('fullyCorrect');
      } else if (BodyComponent.wordle.indexOf(this.word.charAt(i)) !== -1) {
        if (wordArray.includes(this.word.charAt(i))) {
          divs?.item(i).classList.add('wrong');
        } else {
          divs?.item(i).classList.add('partiallyCorrect');
        }
      } else {
        divs?.item(i).classList.add('wrong');
      }
    }
    // check for win
    if (this.word === BodyComponent.wordle) {
      this.finish.emit();
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.ready === 'yes') {
      this.typed = event.key.toUpperCase();
      if (this.typed === 'BACKSPACE' && this.index > 0) {
        this.word = this.word.substring(0, this.word.length - 1);
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
        console.log("SUBMITTED WORD: " + this.word);
        this.checkWord();
        this.changeReady.emit();
      } else if (AttemptComponent.alphabet.includes(this.typed)) {
        if (this.index < 5) {

          switch (this.index) {
            case 0:
              this.letter0 = this.typed;
              this.word += this.letter0;
              break;

            case 1:
              this.letter1 = this.typed;
              this.word += this.letter1;
              break;

            case 2:
              this.letter2 = this.typed;
              this.word += this.letter2;
              break;

            case 3:
              this.letter3 = this.typed;
              this.word += this.letter3;
              break;

            case 4:
              this.letter4 = this.typed;
              this.word += this.letter4;
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
