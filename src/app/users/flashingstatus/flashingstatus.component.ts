import { Component, OnInit, Renderer } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flashingstatus',
  templateUrl: './flashingstatus.component.html',
  styleUrls: ['./flashingstatus.component.css']
})
export class FlashingstatusComponent implements OnInit {
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
        title: 'IMEI No.',
        data: 'imeino'
      }, {
        title: 'Date Time',
        data: 'datetime'
      }, {
        title: 'FW Name',
        data: 'fwname'
      },
      {
        title: 'Current Status',
        data: 'currentstatus'
      }, {
        title: 'History',
        render(id: number) {
          return '<div class=\'actions-buttons center\' id=\'' + id + '\'>'
            + '<i class="fas fa-eye fa-lg" style="color: #3f51b5;" view></i> '
            + '</div>';
        }
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
