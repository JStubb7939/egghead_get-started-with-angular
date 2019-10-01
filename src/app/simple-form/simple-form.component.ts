import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.html',
  styleUrls: ['./simple-form.css']
})
export class SimpleFormComponent implements OnInit {
  @Input() message;
  @Output() update = new EventEmitter();

  isMousedown: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
