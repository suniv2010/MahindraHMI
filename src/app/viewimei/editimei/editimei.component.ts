
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-editimei',
  templateUrl: './editimei.component.html',
  styleUrls: ['./editimei.component.css']
})


export class EditimeiComponent implements OnInit {

 environments = [
    { value: 'Production' },
    { value: 'Test' },
    
  ];
  
  editImeiForm: FormGroup;
  data:any;

  constructor(
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<EditimeiComponent>,
      @Inject(MAT_DIALOG_DATA) data) {
//console.log(data);
      this.data = data;
  }

  ngOnInit() {
    this.editImeiForm = this.fb.group({
      imei_no: [this.data.imei_no]
      
  });
  }

  save() {
      this.dialogRef.close(this.editImeiForm.value);
  }

  close() {
      this.dialogRef.close();
  }

}
