import { Pipe, PipeTransform } from '@angular/core';  
import { DatePipe } from '@angular/common';  

@Pipe({  
    name: 'datePipe',  
})  
export class datePipe implements PipeTransform {  
    transform(list:any,fromDate: any,toDate: any) {  
        let filtered=[];
        if (!toDate || !fromDate) {
                    return list;
                }
        filtered = list.filter(item => 
            new Date(item.c_date) >= new Date(fromDate) && new Date(item.c_date) <= new Date(toDate)
            )
            return filtered;
    }  
} 
