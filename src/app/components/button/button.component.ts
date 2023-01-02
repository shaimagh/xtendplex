import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconName, IconNamesEnum } from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input()
  variant: 'primary' | 'success' = 'primary';

  @Input()
  title: string | undefined;

  @Input()
  size: 'sm' | 'lg' | undefined;

  @Output()
  onClick = new EventEmitter<Event>();

  constructor() {}

  ngOnInit(): void {}

  handClick() {
    this.onClick.emit();
  }
}
