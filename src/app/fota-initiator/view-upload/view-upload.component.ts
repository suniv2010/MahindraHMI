import { Component, OnInit, Renderer } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { Router } from '@angular/router';

@Component({
  selector: 'app-view-upload',
  templateUrl: './view-upload.component.html',
  styleUrls: ['./view-upload.component.css']
})
export class ViewUploadComponent implements OnInit {

  constructor(private dialog: MatDialog,private renderer: Renderer, private router: Router) { }

  dtOptions: DataTables.Settings = {};
  message;
  isPopupOpened = true;
  someClickHandler(info: any,index: Number): void {
    this.message = info.id;
    console.log(index);
  }
  

  ngOnInit(){

  
  this.dtOptions = {
    ajax: 'http://localhost:1337/userdetails/list',
    columns: [{
      title: 'Request ID',
      data: ''
    }, {
      title: 'Firmware Name',
      data: 'username'
    }, {
      title: 'Firmware File Name',
      data: 'usertype'
    },{
      title: 'Applicable Segment',
      data: 'status'
    },
    {
      title: 'Approval',
      data: 'activationdate'
    },
    {
      title: 'CCU Variant',
      data: 'initiator'
    },
    {
      title: 'Applicable Variant',
      data: 'approver'
    },
    {
      title: 'Applicable Sub Variant',
      data: 'head'
    },
    {
      title: 'FW Type',
      data: 'head'
    },
    {
      title: 'Upload Date',
      data: 'head'
    },
    {
      title: 'Actions',
      render: function (id: number) {
                      return '<div class=\'actions-buttons center\' id=\'' + id + '\'>'
                          + '<i class="fas fa-edit fa-lg" style="color: #3f51b5;" edit></i> '
                          + '<i class="fas fa-times-circle fa-lg" style="color: #3f51b5;" delete></i></i> '
                          + '<i class="fas fa-cloud-download-alt fa-lg" style="color: #3f51b5;" download></i>'
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
ngAfterViewInit(): void {
  this.renderer.listenGlobal('document', 'click', (event) => {
    if (event.target.hasAttribute("edit")) {
      this.router.navigate(["/person/" + event.target.getAttribute("edit")]);
    }
  });
}

}
