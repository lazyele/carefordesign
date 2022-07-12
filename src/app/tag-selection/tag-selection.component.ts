import {Component, Input} from '@angular/core';
import {ITag} from "../dto/ITag";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-tag-selection',
  templateUrl: './tag-selection.component.html',
  styleUrls: ['./tag-selection.component.scss']
})
export class TagSelectionComponent {
  @Input() tags: ITag[] = [];
  private selectedTags = new Map<number, ITag>();

  constructor(private readonly router: Router, private readonly route: ActivatedRoute) {
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
    const tags = [...this.selectedTags.values()];

    this.router.navigate([],
      {
        relativeTo: this.route,
        queryParams: {tags: tags.map(t => t.id).join(';')}
      });
  }


}
