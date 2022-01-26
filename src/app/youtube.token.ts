import { DOCUMENT } from '@angular/common';
import { inject, InjectionToken, NgZone } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { YT } from './type';

export const API_URL = new InjectionToken<string>('CDN URL of Youtube API', {
  factory: () => 'https://www.youtube.com/iframe_api',
});

export const API$ = new InjectionToken<Observable<YT>>(
  'A stream with YT object',
  {
    factory: () => {
      const documentRef = inject(DOCUMENT);
      const zone = inject(NgZone);
      const windowRef = documentRef.defaultView;
      const script = documentRef.createElement('script');
      const loaded$ = new ReplaySubject(1);

      script.src = inject(API_URL);
      documentRef.body.appendChild(script);

      windowRef.onYouTubeIframeAPIReady = () => {
        zone.run(() => loaded$.next(windowRef.YT));
      };

      return loaded$;
    },
  }
);

export const API = new InjectionToken<YT>('Youtube API object');
