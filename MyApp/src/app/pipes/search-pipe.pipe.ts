import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
  return value.filter((val:any)=>{
    let rval =(val.u_name.toLocaleLowerCase().includes(args))||
    (val.u_mobile.toLocaleLowerCase().includes(args))||
    (val.u_email.toLocaleLowerCase().includes(args));
      return rval;
  })

  }
}
