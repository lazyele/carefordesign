import {Pipe, PipeTransform} from '@angular/core';
import {IPost} from "../dto/IPost";

@Pipe({
  name: 'tagFilter'
})
export class TagFilterPipe implements PipeTransform {

  transform(posts: IPost[], searchTagIds: number[]): IPost[] {

    if (posts.length === 0 || searchTagIds?.length === 0) {
      return posts;
    }
    return posts.filter(p =>
      p.tags.some(t => searchTagIds.find(t))
    )
  }

}
