import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiUseService } from '../../core/services/api.service';
import { NgOptimizedImage } from '@angular/common'
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-terms-of-use',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './terms-of-use.component.html',
  styleUrls: ['./terms-of-use.component.scss'],
  providers: [ApiUseService]
})

export class TermsOfUseComponent implements OnInit {
    dataTermOfUse: any ;

    showMore = false;
    screenWidth: number = 0;

    constructor(private termOfUseDataService: ApiUseService, private meta: Meta) {}

    ngOnInit(): void {

        this.meta.updateTag({ name: 'description', content: "Govo tech's terms of use" });

        if (typeof window !== 'undefined') {
            this.screenWidth = window.innerWidth;
          }


        this.termOfUseDataService
            .GetTermOfUse()
            .subscribe((res: any) => {
                this.dataTermOfUse = res.data[0].attributes;
            });
    }
}
