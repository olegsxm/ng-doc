import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-question-box',
  templateUrl: './question-box.component.html',
  styleUrls: ['./question-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
