import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {AppService, IPlaceholder} from '../../app.service';

@Component({
  selector: 'app-placeholders',
  templateUrl: './placeholders.component.html',
  styleUrls: ['./placeholders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaceholdersComponent implements OnInit {
  placeholders$: BehaviorSubject<IPlaceholder[]>;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.placeholders$ = this.appService.placeholders;
  }

  addPlaceholder() {
    const id = Date.now();
    this.appService.setPlaceholders({
      id,
      title: `Some Title - ${id}`,
      type: 'string'
    });
  }
}
