import { Component, OnInit, Renderer } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activitystatus-admin',
  templateUrl: './activitystatus-admin.component.html',
  styleUrls: ['./activitystatus-admin.component.css']
})
export class ActivitystatusAdminComponent implements OnInit {

  constructor(private dialog: MatDialog, private renderer: Renderer, private router: Router) { }

  dtOptions: DataTables.Settings = {};
  message;
  isPopupOpened = true;
  someClickHandler(info: any, index: Number): void {
    this.message = info.id;
    console.log(index);
  }

  ngOnInit() {

    this.dtOptions = {
      ajax: 'http://localhost:1337/userdetails/list',
      columns: [{
        title: 'Request ID',
        data: 'id'
      }, {
        title: 'User Name',
        data: 'username'
      }, {
        title: 'Activity Type',
        data: 'activitytype'
      }, {
        title: 'Active Date-Time',
        data: 'activetime'
      },
      {
        title: 'FirmWare Type',
        data: 'firmwaretype'
      }
      ],
    };
  }
  ngAfterViewInit(): void {
    this.renderer.listenGlobal('document', 'click', (event) => {
      if (event.target.hasAttribute('edit')) {
        this.router.navigate(['/person/' + event.target.getAttribute('edit')]);
      }
    });
  }

}
