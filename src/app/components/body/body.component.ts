import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  // input data
  @Input() key: string | undefined;
  @Input() ready0: string = "yes";
  @Input() ready1: string = "no";
  @Input() ready2: string = "no";
  @Input() ready3: string = "no";
  @Input() ready4: string = "no";
  @Input() ready5: string = "no";
  @Input() answer: string = "";
  @Input() result: string = "";

  // answer options
  static dictionary = ['ABUSE', 'ADULT', 'AGENT', 'ANGER', 'APPLE', 'AWARD', 'BASIS', 'BEACH', 'BENCH', 'BIPED',
                        'BIRTH', 'BLOCK', 'BLOOD', 'BOARD', 'BRAIN', 'BREAD', 'BREAK', 'BROWN', 'BUYER', 'CAUSE',
                        'CHAIN', 'CHAIR', 'CHEST', 'CHIEF', 'CHILD', 'CHINA', 'CLAIM', 'CLASS', 'CLOCK', 'COACH',
                        'COAST', 'COURT', 'COVER', 'CREAM', 'CRIME', 'CROSS', 'CROWD', 'CROWN', 'CYCLE', 'DANCE',
                        'DEATH', 'DEPTH', 'DOUBT', 'DRAFT', 'DRAMA', 'DREAM', 'DRESS', 'DRINK', 'DRIVE', 'EARTH',
                        'ENEMY', 'ENTRY', 'ERROR', 'EVENT', 'FAITH', 'FAULT', 'FIELD', 'FIGHT', 'FINAL', 'FLOOR',
                        'FOCUS', 'FORCE', 'FRAME', 'FRANK', 'FRONT', 'FRUIT', 'GLASS', 'GRANT', 'GRASS', 'GREEN',
                        'GROUP', 'GUIDE', 'HEART', 'HINGE', 'HORSE', 'HOTEL', 'HOUSE', 'IMAGE', 'INDEX', 'INPUT',
                        'ISSUE', 'JAPAN', 'JONES', 'JUDGE', 'KNIFE', 'LAURA', 'LAYER', 'LEVEL', 'LEWIS', 'LIGHT',
                        'LIMIT', 'LUNCH', 'MAJOR', 'MARCH', 'MATCH', 'METAL', 'MODEL', 'MONEY', 'MONTH', 'MOTOR',
                        'MOUTH', 'MUSIC', 'NIGHT', 'NOISE', 'NORTH', 'NOVEL', 'NURSE', 'OFFER', 'ORDER', 'OTHER',
                        'OWNER', 'PANEL', 'PAPER', 'PARTY', 'PEACE', 'PETER', 'PHASE', 'PHONE', 'PIECE', 'PILOT',
                        'PITCH', 'PLACE', 'PLANE', 'PLANT', 'PLATE', 'POINT', 'POUND', 'POWER', 'PRESS', 'PRICE',
                        'PRIDE', 'PRIZE', 'PROOF', 'QUEEN', 'RADIO', 'RANGE', 'RATIO', 'REPLY', 'RIGHT', 'RIVER',
                        'ROUND', 'ROUTE', 'RUGBY', 'SCALE', 'SCENE', 'SCOPE', 'SCORE', 'SENSE', 'SHAPE', 'SHARE',
                        'SHEEP', 'SHEET', 'SHIFT', 'SHIRT', 'SHOCK', 'SIGHT', 'SIMON', 'SKILL', 'SLEEP', 'SMILE',
                        'SMITH', 'SMOKE', 'SOUND', 'SOUTH', 'SPACE', 'SPEED', 'SPITE', 'SPORT', 'SQUAD', 'STAFF',
                        'STAGE', 'START', 'STATE', 'STEAM', 'STEEL', 'STOCK', 'STONE', 'STORE', 'STUDY', 'STUFF',
                        'STYLE', 'SUGAR', 'TABLE', 'TASTE', 'TERRY', 'THEME', 'THING', 'TITLE', 'TOTAL', 'TOUCH',
                        'TOWER', 'TRACK', 'TRADE', 'TRAIN', 'TREND', 'TRIAL', 'TRUST', 'TRUTH', 'UNCLE', 'UNION',
                        'UNITY', 'VALUE', 'VIDEO', 'VISIT', 'VOICE', 'WASTE', 'WATCH', 'WATER', 'WHILE', 'WHITE',
                        'WHOLE', 'WOMAN', 'WORDS', 'WORLD', 'WORRY', 'WORST', 'YIELD', 'YOUNG', 'YOUTH', 'ZONES'];

  // selected answer
  static wordle = BodyComponent.dictionary[Math.floor(Math.random() * BodyComponent.dictionary.length)];

  constructor() { }

  ngOnInit(): void {
    this.answer = BodyComponent.wordle;
  }

  // private methods

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
      this.result = "Nice Try";
      this.togglePopup();
      console.log("EOG: LOSS\nANSWER: " + BodyComponent.wordle);
    }
  }

  toggleWin() {
    this.ready0 = "no";
    this.ready1 = "no";
    this.ready2 = "no";
    this.ready3 = "no";
    this.ready4 = "no";
    this.ready5 = "no";
    this.result = "Great Job!";
    this.togglePopup();
    console.log("EOG: WIN");
  }

  togglePopup() {
    document.getElementById('popup')?.classList.toggle('shown');
    document.getElementById('popup')?.classList.toggle('hidden');
  }

}
