import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {AppService} from '../../app.service';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-form-bar',
  templateUrl: './form-bar.component.html',
  styleUrls: ['./form-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormBarComponent implements OnInit {
  @Output() ch = new EventEmitter();

  placeholders = new FormArray([]);

  constructor(private appService: AppService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.appService.placeholders.getValue().forEach((p, i) => {
      this.placeholders.push(new FormControl(p.title));
    });

    this.placeholders.valueChanges
      .pipe(debounceTime(500))
      .subscribe(f => {
        if (f[0] === '') {
          this.placeholders.controls[0].patchValue(this.appService.placeholders.value[0].title);
        }

        this.ch.emit(f[0]);
      });
  }

}
