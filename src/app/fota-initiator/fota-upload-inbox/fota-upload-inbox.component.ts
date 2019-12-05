import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-fota-upload-inbox',
  templateUrl: './fota-upload-inbox.component.html',
  styleUrls: ['./fota-upload-inbox.component.css']
})
export class FotaUploadInboxComponent implements OnInit {

  constructor(private router: Router) { }

  dtOptions: DataTables.Settings = {};

  ngOnInit() {
    this.dtOptions = {
      ajax: 'http://localhost:1337/userdetails/list',
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'User name',
        data: 'username'
      }, {
        title: 'Activity Type',
        data: 'activitytype'
      }, {
        title: 'Request ID',
        data: 'requestid'
      },
      {
        title: 'Activity Date-Time',
        data: 'activitydatetime'
      },
      {
        title: 'FW Type',
        data: 'fwtype'
      },
      {
        title: 'Approval',
        data: 'approval'
      },
      {
        title: 'Action',
        render(id: number) {
          return '<div class=\'actions-buttons center\' id=\'' + id + '\'>'
          + '<i class="fas fa-edit fa-lg" style="color: #3f51b5;" edit></i> '
          + '<i class="fas fa-times-circle fa-lg" style="color: #3f51b5;" delete></i></i> '
          + '</div>';
        }
      }
      ],
    };

    swal({
      title: "(Upload Approver)</br>Do you want to view upload status?",
      text: "Firmware upload Request ID. FWUP000001 approved. Email sent to configured Email ID.",
      type: 'success',
      showConfirmButton: true,
      showCancelButton: true, 
      confirmButtonText: 'Yes, I am sure!',
      cancelButtonText: "No, cancel it!",
    })
      .then((willDelete) => {

        if (willDelete.value) {
          swal("Success");
        } else {
          swal("Fail");
        }

        console.log(willDelete)
      });
  }

}
