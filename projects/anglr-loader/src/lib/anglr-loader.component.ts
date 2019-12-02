import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'anglr-loader',
  templateUrl: './anglr-loader.component.html',
  styleUrls: ['./anglr-loader.component.scss']
})
export class AnglrLoaderComponent implements OnInit {
  @Input() public overlay = true;
  @Input() public alwaysCenter = false;

  @ContentChild(TemplateRef)
  @Input() public template: TemplateRef<any>;
  @Input() public visible = false;

  constructor() { }

  ngOnInit() {
  }

}
