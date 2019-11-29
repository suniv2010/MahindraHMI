import { Component, OnInit, Renderer } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

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
        data: 'L1firmware'
      }, {
        title: 'L1 GI',
        data: 'l1gi'
      }, {
        title: 'L2 Firmware',
        data: 'l2lirmware'
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
