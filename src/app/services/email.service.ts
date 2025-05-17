import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EmailSubmission {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly apiUrl = '/api/submit'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  sendEmail(data: EmailSubmission): Observable<any> {
    const emailData = {
      to: 'contact@ouv.sk',
      subject: 'OUV Online Briefing - New Submission',
      body: `
        New briefing submission from:
        
        Name: ${data.firstName} ${data.lastName}
        Email: ${data.email}
        Phone: ${data.phone}
        
        The participant has completed the online briefing and agreed to all terms.
      `
    };

    return this.http.post(this.apiUrl, emailData);
  }
} 