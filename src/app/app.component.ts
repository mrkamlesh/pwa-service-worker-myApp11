import { Component } from '@angular/core';
import { NewsletterService } from './services/newsletter.service';
import { SwPush } from "@angular/service-worker";
import { pushObj } from "./web-push";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp11';
  sub: any;

  // readonly VAPID_PUBLIC_KEY = "BKFwWK00syPcHR0wOKAqICNMWN1pkcT41ir578J-DPQzPuuBeUpX-4tsb-4O8KdZ1D_B0Jcvoo7Pt73F3YyXppk";
  readonly VAPID_PUBLIC_KEY = pushObj.publicKey;

  constructor(
    private swPush: SwPush,
    private newsletterService: NewsletterService) { }

  subscribeToNotifications() {

    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => this.newsletterService.addPushSubscriber(sub).subscribe())
      .catch(err => console.error("Could not subscribe to notifications", err));
  }


  sendNewsletter() {
    console.log("Sending Newsletter to all Subscribers ...");
    this.newsletterService.send().subscribe();
  }
}
