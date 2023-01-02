import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  OnInit,
  Output,
} from '@angular/core';
import { IconName, IconNamesEnum } from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input()
  value: string = '';

  @Input()
  placeholder: string = '';

  @Input()
  leftIcon: IconNamesEnum | IconName | undefined;

  @Input()
  rightIcon: IconNamesEnum | IconName | undefined;

  @Output()
  onChange = new EventEmitter<Event>();

  constructor() {}

  ngOnInit(): void {}

  handleChange($event: any) {
    this.onChange.emit($event);
  }
}
