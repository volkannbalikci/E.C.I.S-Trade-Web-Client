import { Component } from '@angular/core';
import { ToasterService, ToastrMessageType, ToastrPositionType } from './services/individual-user/toaster.service';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ETradeClient';
  constructor(){
  
  }
  
}