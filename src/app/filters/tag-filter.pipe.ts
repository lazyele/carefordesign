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
    const results = posts.filter(p => {
        // todo filtering
        // happy coding !
        const r = p.tags.some(t => searchTagIds.some(st => st === t.id));
        console.log(p.tags, r, searchTagIds);
      }
    );
    console.log(results.length);
    return results;
  }

}
