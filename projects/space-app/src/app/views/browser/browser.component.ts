import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss']
})
export class BrowserComponent {

  url = this.route.params.pipe(
    map(params => params['url'])
    );

  safeUrl = this.url.pipe(
    map(url => this.sanitizer.bypassSecurityTrustResourceUrl(url))
  );

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }
}
