import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatOption } from '@angular/material';

export interface FWType {
  value: string;
}

export interface FW_Filename {
  value: string;
}

export interface Paltform {
  value: string;
}

export interface IMEI {
  value: string;
}

@Component({
  selector: 'app-flashing-init',
  templateUrl: './flashing-init.component.html',
  styleUrls: ['./flashing-init.component.css']
})
export class FlashingInitComponent implements OnInit {
  ngOnInit(): void {
  }

  flashinginitForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.flashinginitForm = fb.group({
      FWTypeFormControl: [null],
      FW_FilenameFormControl: [null],
      PaltformFormControl: [null],
      IMEIFormControl: [null],
      ReasonFormControl: [null, Validators.required]
    });
  }


  FWTypes: FWType[] = [
    { value: 'L1 Firmware' },
    { value: 'L1 Firmware with GI' },
    { value: 'L2 Firmware' },
    { value: 'L2 Firmware with GI Root Certificate' }
  ];

  FW_Filenames: FW_Filename[] = [
    { value: 'L1 : 3.10.01 / FD_NOVO_Ver_1.6_ 28_Sept_19' },
    { value: 'L1: 3.08.02 / FD_NOVO_Ver_1.3_ 25_Sept_19' },
    { value: 'L1: FD.ZB.JV / FD_NOVO_Ver_1.1_ 23_Sept_19' },
    { value: 'L1: AD.CK.JE / AD_JEETO_Ver_1.6_ 26_Sept_19' }
  ];

  Paltforms: Paltform[] = [
    { value: 'NOVO Platform 1' },
    { value: 'NOVO Platform 2' }
  ];

  IMEIs: IMEI[] = [
    { value: '8645060309xxxx1' },
    { value: '8645060309xxxx2' },
    { value: '8645060309xxxx3' },
    { value: '8645060309xxxx4' },
    { value: '8645060309xxxx5' },
    { value: '8645060309xxxx6' },
    { value: '8645060309xxxx7' },
    { value: '8645060309xxxx8' },
    { value: '8645060309xxxx9' },
    { value: '8645060309xxxx10' },
    { value: '8645060309xxxx11' }
  ];
  @ViewChild('allSelected', { static: false }) private allSelected: MatOption;

  tosslePerOne(all) {
    if (this.allSelected.selected) {
      this.allSelected.deselect();
      return false;
    }
    if (this.flashinginitForm.controls.IMEIFormControl.value.length == this.IMEIs.length)
      this.allSelected.select();

  }
  toggleAllSelection() {
    if (this.allSelected.selected) {
      this.flashinginitForm.controls.IMEIFormControl
        .patchValue([...this.IMEIs.map(item => item.value), 0]);
    } else {
      this.flashinginitForm.controls.IMEIFormControl.patchValue([]);
    }
  }

  Initate() {
    console.log(this.flashinginitForm.value);
  }

}
