import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { YT } from '../type';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {

  @Input()
  videoId = 'dQw4w9WgXcQ';
  @Input()
  api: YT | null;

  @ViewChild('ref', { static: true })
  ref: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit() {
    const a = new this.api.Player(this.ref.nativeElement, {
      videoId: this.videoId,
      height: '180',
      width: '320',
      playerVars: { autoplay: this.videoId === 'dQw4w9WgXcQ' }
    });
  }

}
