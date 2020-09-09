import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {AppService, IPlaceholder} from '../../app.service';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaceholderComponent implements OnInit {
  @Input() placeholder: IPlaceholder;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
  }

  add() {
    this.appService.editor.execute('placeholder', {value: this.placeholder.title});
  }
}
