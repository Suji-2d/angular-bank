import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanComponent implements OnInit {

  applyLoanForm: FormGroup;

  educationLoanForm: FormGroup;

  personalLoanForm: FormGroup;

  selectedLoanType:boolean;

  constructor(private formBuilder: FormBuilder) {

    this.applyLoanForm = formBuilder.group({

      loanType: [''],

      loanAmount: [''],

      loanApplyDate: [''],

      loanIssueDate: [''],

      rateOfInterest: [''],

      duration: ['']
    })
      this.educationLoanForm = formBuilder.group({

        courseFee: [''],

        course: [''],

        fatherName: [''],

        fatherOccupation: [''],  

        fatherTotalExperience: [''],

        fatherCurrentExperience: [''],

        rationCardNo: [''],

        annualIncome: ['']

      })


      this.personalLoanForm =formBuilder.group({

        annualIncome: [''],

        companyName: [''],

        designation: [''],

        totalExperience: [''],

        currentExperience: ['']

      })

  }
  ngOnInit(): void {
    
  }


}
