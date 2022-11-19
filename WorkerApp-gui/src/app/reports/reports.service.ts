import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Report } from "./report.model";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  constructor(private http: HttpClient) {
  }

  addReport(report: Report): Observable<void> {
    return this.http.post<void>(environment.url + '/reports/add-report', report);
  }
}
