import { Component, OnInit } from '@angular/core';
import { ChartService } from '../../../service/chart.service'
import { AppSettings } from '../../../app.settings'


@Component({
    selector: 'app-cust-notification',
    templateUrl: './cust-notification.component.html'
})
export class CustNotificationComponent implements OnInit{
    
    pageTitle = 'Unassigned Complaints';

    complaint: any[];
    unassignedData: any[];
    
    constructor(private charts: ChartService) {}

    ngOnInit() {
        this.initializeItems();
    }
    initializeItems(){
        
        this.charts.getAllComplaint().subscribe((data: any) => {
            this.complaint= data.data.filter((el:any) => {
              if (el.c_assignBy == window.localStorage.getItem('id')) {
                AppSettings.status.filter(s_code => {
                    if(el.c_status === s_code.id){
                        el.c_status = s_code.value;
                    }
                    
                });
                return el;
              }
                   
              });
              this.unassignedData = this.complaint.filter(data => {
                return data.c_status === 'Open'
            })
        });
        
        }

        getItems(ev: any) {
            const val = ev.target.value;
            if (val && val.trim() != '') {
                this.complaint = this.complaint.filter((item) => {
                    if (parseInt(item.c_id) === parseInt(val)) {
                        return parseInt(item.c_id) === parseInt(val);
                    }
                })
            }
            if (val.length === 0) {
                this.initializeItems();
            }
        }
    }








