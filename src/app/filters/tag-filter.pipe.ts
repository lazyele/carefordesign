import {Pipe, PipeTransform} from '@angular/core';
import {IPost} from "../dto/IPost";
import {ITag} from "../dto/ITag";

@Pipe({
  name: 'tagFilter'
})
export class TagFilterPipe implements PipeTransform {

  transform(posts: IPost[], searchTags: ITag[]): IPost[] {

    const searchTagIds = searchTags?.map(t => t.id) ?? [];
    if (posts.length === 0 || searchTagIds?.length === 0) {
      console.log(posts, searchTagIds)
      return posts;
    }
    const results = posts.filter(p =>
      p.tags.some(t => searchTagIds.find(t))
    )
    console.log(results);
    return results;
  }

}
