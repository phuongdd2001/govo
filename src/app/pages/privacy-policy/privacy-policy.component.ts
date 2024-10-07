import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PrivacyPolicy } from '../../core/data';
import { ApiUseService } from '../../core/services/api.service';
import { NgOptimizedImage } from '@angular/common'
import { Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-privacy-policy',
    standalone: true,
    imports: [CommonModule, NgOptimizedImage],
    templateUrl: './privacy-policy.component.html',
    styleUrls: ['./privacy-policy.component.scss'],
    providers: [ApiUseService]
})
export class PrivacyPolicyComponent implements OnInit {
    dataPrivacyPolicy: any ;

    showMore = false;
    screenWidth: number = 0;

    constructor(private privacyPolicyService: ApiUseService, private meta: Meta) {

    }

    ngOnInit(): void {

        this.meta.updateTag({ name: 'description', content: "Govo tech's privacy policy" });

        if (typeof window !== 'undefined') {
            this.screenWidth = window.innerWidth;
          }
        this.privacyPolicyService
            .GetPrivacyPolicy()
            .subscribe((res: any) => {
                this.dataPrivacyPolicy = res.data[0].attributes;
            });
    }
}
