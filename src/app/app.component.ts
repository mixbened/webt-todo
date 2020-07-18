import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../../node_modules/bootstrap/dist/css/bootstrap.min.css',
  ],
})
export class AppComponent {
  // fields specified in component classes are available in according html
  title = 'Organice Your TODOs';
  response_array = [];

  constructor() {
    this.makeRequest();
  }

  // performs a request to localhost:4200/backend/test which is forwarded to the express server at localhost:3000/backend/test (cf. proxy.conf.json)
  public async makeRequest() {
    this.response_array = await fetch('/backend/todos/all').then((response) => response.json());
  }
}
