import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { FileUploader } from 'ng2-file-upload';

export interface ApplicableSegment {
  value: string;
}

export interface ApplicableVariant {
  value: string;
}

export interface ApplicableSubVariant {
  value: string;
}

export interface FWType {
  value: string;
}

export interface CCUVariant {
  value: string;
}

@Component({
  selector: 'app-fileuploadscreen',
  templateUrl: './fileuploadscreen.component.html',
  styleUrls: ['./fileuploadscreen.component.css']
})
export class FileuploadscreenComponent implements OnInit {
  fileUploadForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.fileUploadForm = fb.group({
      AassignNameFormControl: [null, Validators.required],
      ApplicableSegmentsFormControl: [null],
      ApplicableVariantFormControl: [null],
      ApplicableSubVariantFormControl: [null],
      FWTypeFormControl: [null],
      CCUVariantFormControl: [null],
      fileFormControl: [null],
      remarksFormControl: [null]
    });
  }

  ApplicableSegments: ApplicableSegment[] = [
    { value: 'FD' },
    { value: 'AD' },
    { value: 'MUSA' },
    { value: 'MSE' }
  ];

  ApplicableVariants: ApplicableVariant[] = [
    { value: 'NOVO' },
    { value: 'YUVO' },
    { value: 'JIVO' }
  ];

  ApplicableSubVariants: ApplicableSubVariant[] = [
    { value: 'Platform 1' },
    { value: 'Platform 2' }
  ];

  FWTypes: FWType[] = [
    { value: 'L1 Firmware' },
    { value: 'L1 Firmware with GI' },
    { value: 'L2 Firmware' },
    { value: 'L2 Firmware with GI Root Certificate' }
  ];

  CCUVariants: CCUVariant[] = [{ value: 'Logger' }, { value: 'Smart' }];

  public uploader: FileUploader = new FileUploader({
    isHTML5: true
  });

  uploadSubmit() {
    console.log(this.uploader);
    console.log(this.fileUploadForm);
    for (let i = 0; i < this.uploader.queue.length; i++) {
      const fileItem = this.uploader.queue[i]._file;
      if (fileItem.size > 10000000) {
        alert('Each File should be less than 10 MB of size.');
        return;
      }
    }
    for (let j = 0; j < this.uploader.queue.length; j++) {
      const data = new FormData();
      const fileItem = this.uploader.queue[j]._file;
      console.log(fileItem.name);
      data.append('file', fileItem);
      data.append('fileSeq', 'seq' + j);
    }
    this.uploader.clearQueue();
  }

  fileUpload(data: FormData) {
    console.log(FormData);
  }

  ngOnInit() {
    swal({
      title: "(Upload Approver)</br>Do you want to view upload status?",
      text: "Firmware upload Request ID.FWUP000023 created successfully.Email sent to configured Email ID.",
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

    swal({
      title: "Firmware Upload failed.",
      text: "Do you want to attempt a retry?",
      type: 'error',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes, retry!',
      cancelButtonText: "No, cancel!",
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
