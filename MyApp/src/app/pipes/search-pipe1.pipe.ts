import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe1'
})
export class SearchPipe1Pipe implements PipeTransform {
  transform(list: any[], value: string) {
  

    return value ? list.filter(item => item.c_status === value) : list;
  }


}
