import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-essentials';
  rootName = "Maximilian";

  onNameChanged(newName: any) {
    this.rootName = newName;
  }

}
