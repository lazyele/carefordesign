import {Pipe, PipeTransform} from '@angular/core';
import {IPost} from "../../../dto/posts/IPost";

@Pipe({
  name: 'tagFilter'
})
export class TagFilterPipe implements PipeTransform {

  transform(posts: IPost[], searchTagIds: number[]): IPost[] {
    if (posts.length === 0 || searchTagIds?.length === 0) {
      return posts;
    }
    return posts.filter(p => this.containsTag(p.tags, searchTagIds))
  }

  private containsTag(tags: number [], lookUpTags: number[]) {
    if (lookUpTags?.length === 0) {
      return true;
    }
    if (tags?.length === 0) {
      return false;
    }
    return tags.some(t => lookUpTags.indexOf(t) > -1);
  }
}
