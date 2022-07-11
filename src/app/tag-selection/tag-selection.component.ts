import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITag} from "../dto/ITag";

@Component({
  selector: 'app-tag-selection',
  templateUrl: './tag-selection.component.html',
  styleUrls: ['./tag-selection.component.scss']
})
export class TagSelectionComponent implements OnInit {
  @Input() tags: ITag[] = [];
  @Output() selectedTags = new EventEmitter<ITag[]>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
