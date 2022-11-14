import { Component, Input, OnInit, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
      {
  // @Input('srvElement') element: {type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', {static: true}) header:ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;
  constructor() { 
    console.log("constructor called")
  }
  ngOnChanges(changes: SimpleChanges){
    console.log("ngonchanges called")
    console.log("changes", changes)
  }

  ngOnInit(): void {
    console.log("ngOnIt called")
    console.log(this.header.nativeElement.textContent)
    console.log('text Content of Paragraph: ' + this.paragraph.nativeElement.textContent)
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called, will be called only once')
    console.log('text Content of Paragraph: ' + this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called')
  }

  ngOnDestroy(): void {
    console.log('onDestroy called')
  }

}
