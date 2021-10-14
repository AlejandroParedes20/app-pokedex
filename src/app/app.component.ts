import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  constructor(public spinner:NgxSpinnerService){
    this.spinner.show()

    setTimeout(()=> this.spinner.hide(), 2500)
  }
}
