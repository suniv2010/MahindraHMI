import { Component, OnInit, Renderer } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-overallstatusscreen',
  templateUrl: './overallstatusscreen.component.html',
  styleUrls: ['./overallstatusscreen.component.css']
})
export class OverallstatusscreenComponent implements OnInit {
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
      },
      {
        title: 'IMEI No.',
        data: 'imeino'
      },
      {
        title: 'Segment',
        data: 'segment'
      },
      {
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
        title: 'Reserved',
        data: 'reserved'
      },
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

  flash() {

    swal({
      title: "(Upload Approver) Do you want to view",
      text: "FOTA Request ID. FWFL000025 created successfully. Email sent to configured Email ID.",
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

