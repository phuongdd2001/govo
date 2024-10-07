import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-home',
  standalone: true,
  imports: [],
  templateUrl: './title-home.component.html'
})
export class TitleHomeComponent {
  @Input() title: string = "";
}
