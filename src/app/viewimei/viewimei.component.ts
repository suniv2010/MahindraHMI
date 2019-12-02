import { Component, OnInit, Renderer } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import { EditimeiComponent } from './editimei/editimei.component'
@Component({
  selector: 'app-viewimei',
  templateUrl: './viewimei.component.html',
  styleUrls: ['./viewimei.component.css']
})
export class ViewimeiComponent implements OnInit {
  constructor(private dialog: MatDialog, private renderer: Renderer, private router: Router) { }

  dtOptions: DataTables.Settings = {};
  message;
  isPopupOpened = true;
  someClickHandler(info: any, index: Number): void {
console.log(info);
const dialogConfig = new MatDialogConfig();

dialogConfig.disableClose = true;
//dialogConfig.autoFocus = true;

dialogConfig.data = info;

    
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(EditimeiComponent, dialogConfig);


    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });


  }

  ngOnInit() {

    this.dtOptions = {
      ajax: 'http://localhost:1337/imei/list',
      columns: [{
        title: 'Request ID',
        data: 'id'
      }, {
        title: 'IMEI No.',
        data: 'imei_no'
      }, {
        title: 'Segment',
        data: 'segment'
      }, {
        title: 'Vehicle Variant',
        data: 'vehiclevariant'
      },
      {
        title: 'Vehicle Sub Variant',
        data: 'vehiclesubvariant'
      },
      {
        title: 'L1 Firmware',
        data: 'l1firmware'
      }, {
        title: 'L1 GI',
        data: 'l1gi'
      }, {
        title: 'L2 Firmware',
        data: 'l2firmware'
      }, {
        title: 'L2 GI',
        data: 'l2gi'
      },
      {
        title: 'Root Certificate',
        data: 'rootcertificate'
      },
      {
        title: 'Environment',
        data: 'environment'
      },
      {
        title: 'Update',
        render(id: number) {
          return '<div class=\'actions-buttons center\' id=\'' + id + '\'>'
            + '<i class="fas fa-edit fa-lg" style="color: #3f51b5;" Modify></i> '
            + '</div>';
        }
      } 
      ],
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
  ngAfterViewInit(): void {
    this.renderer.listenGlobal('document', 'click', (event) => {
      if (event.target.hasAttribute('edit')) {
        this.router.navigate(['/person/' + event.target.getAttribute('edit')]);
      }
    });
  }
}
