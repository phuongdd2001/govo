import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CMSResponse, PrivacyPolicy, TermOfUse } from '../data';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiUseService {
    constructor(private HttpClient: HttpClient) {}

    GetTermOfUse(): Observable<CMSResponse<TermOfUse[]>>{
        let url = environment.apiUrl + '/terms' + '?populate=deep';
        return this.HttpClient.get<CMSResponse<TermOfUse[]>>(url);
    }

    GetPrivacyPolicy(): Observable<CMSResponse<PrivacyPolicy[]>>{
        let url = environment.apiUrl + '/privacy-policies' + '?populate=deep';
        return this.HttpClient.get<CMSResponse<PrivacyPolicy[]>>(url);
    }
}
