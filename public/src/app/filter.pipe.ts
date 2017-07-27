import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allPolls: any, search: any): any {
    if(!allPolls)
    {
      return null;
    }
    let result = [];
    for(let poll of allPolls)
    {
      if(poll.creator.toLowerCase().includes(search.toLowerCase()) || poll.question.toLowerCase().includes(search.toLowerCase()))
      {
        result.push(poll);
      }
    }
    return result;
  }

}
