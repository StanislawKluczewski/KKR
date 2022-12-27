import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.scss']
})
export class AddReportComponent implements OnInit {

  title: string = 'Dodaj zgłoszenie';
  report = new FormGroup({
    recipient: new FormControl('', Validators.email),
    subject: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required)
  })
  constructor(private reportsService: ReportsService) { }

  ngOnInit(): void {
  }

  addReport(form: FormGroup): void {
    this.reportsService.addReport(form.value).subscribe(result => {
      console.log(result);
    })
  }

}
