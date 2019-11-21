import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

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
  selector: "app-fileuploadscreen",
  templateUrl: "./fileuploadscreen.component.html",
  styleUrls: ["./fileuploadscreen.component.css"]
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
    { value: "FD" },
    { value: "AD" },
    { value: "MUSA" },
    { value: "MSE" }
  ];

  ApplicableVariants: ApplicableVariant[] = [
    { value: "NOVO" },
    { value: "YUVO" },
    { value: "JIVO" }
  ];

  ApplicableSubVariants: ApplicableSubVariant[] = [
    { value: "Platform 1" },
    { value: "Platform 2" }
  ];

  FWTypes: FWType[] = [
    { value: "L1 Firmware" },
    { value: "L1 Firmware with GI" },
    { value: "L2 Firmware" },
    { value: "L2 Firmware with GI Root Certificate" }
  ];

  CCUVariants: CCUVariant[] = [{ value: "Logger" }, { value: "Smart" }];

  ngOnInit() {}

  onFormSubmit(form) {
    console.log(form);
  }
}
