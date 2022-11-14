import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  //newServerName = '';
 //newServerContent = '';
 @ViewChild('serverContentInput', {static: true} ) serverContentInput: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput, nameInput.value)
    console.log(this.serverContentInput)
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value //nativeElement is a property of ElementRef
  })
  }

  onAddBlueprint(nameInput: HTMLInputElement){
    this.bluePrintCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value //get direct access through dom element with viewchild
  })
  }
 

}
