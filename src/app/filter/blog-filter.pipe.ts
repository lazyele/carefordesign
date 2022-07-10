import { Pipe, PipeTransform } from '@angular/core';
import {IPost} from "../dto/IPost";

@Pipe({
  name: 'blogFilter'
})
export class BlogFilterPipe implements PipeTransform {

  transform(posts: IPost[], search: string): IPost[] {
    console.log(search)
    return posts;
  }

}
