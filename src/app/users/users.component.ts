import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material";
import { AddUserComponent } from '../users/add-user/add-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  dtOptions: DataTables.Settings = {};
  message;
  isPopupOpened = true;
  someClickHandler(info: any,index: Number): void {
    this.message = info.id;
    console.log(index);
  }


  ngOnInit(): void {
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
      },{
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
      }],
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        $('td', row).unbind('click');
        $('td', row).bind('click', () => {
          self.someClickHandler(data,index);
        });
        return row;
      }
    };
  }

  addTraining() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(AddUserComponent, {
      data: {}
    });


    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }


}