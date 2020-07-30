import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    messages: any;
    ngOnInit() {
        this.messages = [
          'Hi vijeesh',
          "how are you ?",
          "where are you ?"

      ];
    }

}
