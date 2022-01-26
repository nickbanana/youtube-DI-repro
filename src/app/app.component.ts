import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { YT } from './type';
import { API$ } from './youtube.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(@Inject(API$) readonly api$: Observable<YT>) {}
}
