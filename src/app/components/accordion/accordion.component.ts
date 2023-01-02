import { Component, Input } from '@angular/core';
import { IconName, IconNamesEnum } from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {
  @Input()
  title: string = '';

  @Input()
  iconName: IconNamesEnum | IconName | undefined;
}
