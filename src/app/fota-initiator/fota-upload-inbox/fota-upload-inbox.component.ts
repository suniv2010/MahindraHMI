import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

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
        title: 'User type',
        data: 'usertype'
      }, {
        title: 'Status',
        data: 'status'
      },
      {
        title: 'Activation Date',
        data: 'activationdate'
      },
      {
        title: 'Initiator',
        data: 'initiator'
      },
      {
        title: 'Approver',
        data: 'approver'
      },
      {
        title: 'Head',
        data: 'head'
      },
      {
        title: 'Action',
        render(id: number) {
                        return '<div class=\'actions-buttons center\' id=\'' + id + '\'>'
                            + '<button class="waves-effect btn" view-person-id="3">Delete</button> '
                            + '<button class="waves-effect btn" view-person-id="3">Edit</button>'
                            + '</div>';
                    }
      }
    ],
      /*rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        $('td', row).unbind('click');
        $('td', row).bind('click', () => {
          self.someClickHandler(data,index);
        });
        return row;
      }*/
    };
  }

}
