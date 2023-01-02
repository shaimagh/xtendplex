import { Component } from '@angular/core';
import { IconName, IconNamesEnum } from 'ngx-bootstrap-icons';

interface FAQ {
  title: string;
  iconName: IconNamesEnum | IconName | undefined;
}

const faqs = Array.from<FAQ>({ length: 12 }).map((_, index) => ({
  title: `Title ${index}`,
  iconName: 'house-fill',
}));

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'XtendPlex';
  searchText = '';
  faqs = faqs;

  public handleClick($event: any) {
    console.log('clicked');
  }

  public handleChange($event: any) {
    this.searchText = $event.target.value;
  }
}
