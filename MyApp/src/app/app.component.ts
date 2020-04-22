import { Component } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import {GetuidService} from  './service/getuid.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onlineEvent: Observable<Event>;
  offlineEvent: Observable<Event>;
  subscriptions: Subscription[] = [];
  messages: any[] = [];
    subscription: Subscription;

  connectionStatusMessage: string;
  connectionStatus: string;
  constructor(private messageService: GetuidService) {
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.messages.push(message);
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });
}    ngOnInit(): void {
        /**
        * Get the online/offline status from browser window
        */
        this.onlineEvent = fromEvent(window, 'online');
        this.offlineEvent = fromEvent(window, 'offline');
    
        this.subscriptions.push(this.onlineEvent.subscribe(e => {
          this.connectionStatusMessage = 'Back to online';
          this.connectionStatus = 'online';
          console.log('Online...');
        }));
    
        this.subscriptions.push(this.offlineEvent.subscribe(e => {
          this.connectionStatusMessage = 'Connection lost! You are not connected to internet';
          this.connectionStatus = 'offline';
          console.log('Offline...');
        }));
      }
    
      ngOnDestroy(): void {

        this.subscriptions.forEach(subscription => subscription.unsubscribe());
      }
    
}
