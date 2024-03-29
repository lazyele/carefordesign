import {Pipe, PipeTransform} from '@angular/core';
import {IPost} from "../../../dto/posts/IPost";

@Pipe({
  name: 'tagReducer'
})
export class TagReducerPipe implements PipeTransform {

  private static getAllTags(posts: IPost[]) {
    const allTags = posts?.map(post => post?.tags ?? [])
      .filter(tags => tags.length > 0);
    if (allTags.length > 0) {
      return allTags.reduce((previous, current) => previous.concat(current, []));
    }
    return [];
  }

  transform(posts: IPost[]): number[] {
    if (posts?.length > 0) {
      const tags = TagReducerPipe.getAllTags(posts);
      return [...new Set(tags)]
    }
    return [];
  }
}
