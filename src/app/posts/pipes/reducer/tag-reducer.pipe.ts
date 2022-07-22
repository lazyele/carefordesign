import {Pipe, PipeTransform} from '@angular/core';
import {IPost} from "../../../dto/posts/IPost";

@Pipe({
  name: 'tagReducer'
})
export class TagReducerPipe implements PipeTransform {

  transform(posts: IPost[]): number[] {
    if (posts?.length > 0) {
      const tags = TagReducerPipe.getAllTags(posts);
      return [...new Set(tags)]
    }
    return [];
  }

  private static getAllTags(posts: IPost[]) {
    return posts.map(post => post.tags)
      .filter(tags => tags.length > 0)
      .reduce((previous, current) => previous.concat(current, []))
  }
}
