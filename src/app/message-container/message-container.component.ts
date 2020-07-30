import { Component, OnInit, ContentChild, AfterContentInit, ContentChildren, QueryList, AfterContentChecked, ChangeDetectorRef } from '@angular/core';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-messagecontainer',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.css']
})
export class MessageContainerComponent implements AfterContentInit, AfterContentChecked {

  greetMessage = 'this is my test messages!';

  constructor(private cd:ChangeDetectorRef){

  }
  @ContentChildren(MessageComponent) messageContentChild: QueryList<MessageComponent>;

  ngAfterContentInit() {
    this.messageContentChild.forEach((m) => m.message = m.message.toUpperCase());
    this.cd.detectChanges()
  }

  ngAfterContentChecked() {
    this.messageContentChild.forEach((m) => m.message = m.message+ "!");
    this.cd.detectChanges()
  }

}
