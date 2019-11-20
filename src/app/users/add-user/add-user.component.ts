import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, FormArray, FormControl, FormGroup, FormsModule, NgForm } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup;
  ordersData = [];
  username = '';
  password = '';
  confirmpassword = '';
  mobile: Date = null;
  email = '';
  assignaccess = [
    { id: 1, name: 'User Creation' },
    { id: 2, name: 'Initiate FOTA' },
    { id: 3, name: 'Upload File' },
    { id: 4, name: 'View Upload' },
    { id: 5, name: 'FOTA Inbox' },
    { id: 6, name: 'Upload Inbox' },
    { id: 7, name: 'FOTA Approval' },
    { id: 8, name: 'FOTA Approval Head' },
    { id: 9, name: 'Upload Approver' },
    { id: 10, name: 'Upload Approval Head' },
    { id: 11, name: 'View Status' },
    { id: 12, name: 'Activity Status' },
    { id: 13, name: 'Flashing status' },
    { id: 14, name: 'Overall status' },
    { id: 15, name: 'IMEI Mapping' },
    { id: 16, name: 'Test Access' },
    { id: 17, name: 'Production Access' },
    { id: 18, name: 'View Users' },
  ];

  constructor(
    public dialogRef: MatDialogRef<AddUserComponent>,
    private fb: FormBuilder
  ) {
    const formControls = this.assignaccess.map(
      control => new FormControl(false)
    );

    // Create a FormControl for the select/unselect all checkbox
    const selectAllControl = new FormControl(false);

    this.addUserForm = fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      confirmpassword: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(500),
        ]),
      ],
      mobile: [null, Validators.required],
      email: [null, Validators.required],
      assignaccess: new FormArray(formControls),
      selectAll: selectAllControl,
    });
  }

  ngOnInit() {
    this.onChanges();
  }

  onChanges(): void {
    // first item set to true
    this.addUserForm.controls.assignaccess['controls'].forEach((o, i) => {
      if (i === 0) {
        o.value = true;
      }
    });
    // Subscribe to changes on the selectAll checkbox
    this.addUserForm.get('selectAll').valueChanges.subscribe(bool => {
      this.addUserForm
        .get('assignaccess')
        .patchValue(Array(this.assignaccess.length).fill(bool), {
          emitEvent: false,
        });
    });

    // Subscribe to changes on the assignaccess preference checkboxes
    this.addUserForm.get('assignaccess').valueChanges.subscribe(val => {
      const allSelected = val.every(bool => bool);
      if (this.addUserForm.get('selectAll').value !== allSelected) {
        this.addUserForm
          .get('selectAll')
          .patchValue(allSelected, { emitEvent: false });
      }
    });
  }

  onFormSubmit(form: NgForm) {
    const selectedPreferences = this.addUserForm.value.assignaccess
      .map((checked, index) => (checked ? this.assignaccess[index].name : null))
      .filter(value => value !== null);
    if (selectedPreferences) {
      swal({
        title: 'Success',
        text: 'Successfully created user ' + this.addUserForm.value.username,
        buttons: {
          cancel: true,
          confirm: 'OK',
        },
      } as any);
    }
    /*
    swal({
        title: "Are you sure?",
        text: "Are you sure to delete the menu? It cannot be undone.",
        icon: "warning",
        dangerMode: true,
        buttons: {
          cancel: true,
          confirm: 'OK'
        }
    } as any).then( val => {
    if(val)  {
            swal({
                 title: "Thanks!",
                 text: "You click"
                 });
             }
});
*/
  }

  close(): void {
    this.dialogRef.close();
  }
}
function minSelectedCheckboxes(min = 1) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      .map(control => control.value)
      .reduce((prev, next) => (next ? prev + next : prev), 0);

    return totalSelected >= min ? null : { required: true };
  };

  return validator;
}
