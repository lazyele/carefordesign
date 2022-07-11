import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ITag} from "../dto/ITag";

@Component({
  selector: 'app-tag-selection',
  templateUrl: './tag-selection.component.html',
  styleUrls: ['./tag-selection.component.scss']
})
export class TagSelectionComponent {
  @Input() tags: ITag[] = [];
  @Output() onSelectedTagIdsChanged = new EventEmitter<ITag[]>();
  private selectedTags = new Map<number, ITag>();

  constructor() {
  }

  isSelected(tag: ITag): boolean {
    return this.selectedTags.has(tag.id);
  }

  toggleTag(tag: ITag) {
    if (this.isSelected(tag)) {
      this.selectedTags.delete(tag.id);
    } else {
      this.selectedTags.set(tag.id, tag);
    }
    this.onSelectedTagIdsChanged.emit([...this.selectedTags.values()]);
  }


}
