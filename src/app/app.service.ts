import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface IPlaceholder {
  id: number;
  type: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  editor: any;

  // tslint:disable-next-line:variable-name
  private _placeholders: BehaviorSubject<IPlaceholder[]> = new BehaviorSubject<IPlaceholder[]>([]);

  public get placeholders(): BehaviorSubject<IPlaceholder[]> {
    return this._placeholders;
  }

  public setPlaceholders(placeholder: IPlaceholder) {
    this._placeholders.next([...this._placeholders.getValue(), placeholder]);
  }


  constructor() {
  }
}
