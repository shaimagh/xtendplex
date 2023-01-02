import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconName, IconNamesEnum } from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css'],
})
export class IconButtonComponent implements OnInit {
  @Input()
  title: string | undefined;
  @Input()
  iconName: IconNamesEnum | IconName = 'search';

  @Output()
  onClick = new EventEmitter<Event>();

  constructor() {}

  ngOnInit(): void {}

  handClick() {
    this.onClick.emit();
  }
}
