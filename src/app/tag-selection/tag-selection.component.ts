import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ITag} from "../dto/ITag";

@Component({
  selector: 'app-tag-selection',
  templateUrl: './tag-selection.component.html',
  styleUrls: ['./tag-selection.component.scss']
})
export class TagSelectionComponent {
  @Input() tags: ITag[] = [];
  @Output() onSelectedTagIdsChanged = new EventEmitter<number[]>();
  private selectedTags = new Set<number>();

  constructor() {
  }

  isSelected(tag: ITag) {
    return this.selectedTags.has(tag.id);
  }

  toggleTag(tag: ITag) {
    if (this.isSelected(tag)) {
      this.selectedTags = new Set<number>([...this.selectedTags]
        .filter(t => t !== tag.id)
      );
    } else {
      this.selectedTags.add(tag.id);
    }
    this.onSelectedTagIdsChanged.emit([...this.selectedTags])

  }


}
