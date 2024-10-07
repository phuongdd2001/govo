import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleHomeComponent } from '../../components/title-home/title-home.component';
import { ItemOutstanding, ItemProduct, Partner, User } from '../../core/data';
import { Outstanding, Partners, Users, products } from '../../core/data/data';
import { CountUpDirective } from '../../core/shared/directive/count-up.directive';
import {
    trigger,
    state,
    style,
    animate,
    transition,
} from '@angular/animations';
import { NgOptimizedImage } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        TitleHomeComponent,
        CountUpDirective,
        NgOptimizedImage,
        CarouselModule,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    animations: [
        trigger('slideInOut', [
            state(
                'in',
                style({
                    transform: 'translateY(0)',
                    opacity: '0',
                })
            ),
            state(
                'out',
                style({
                    transform: 'translateY(100%)',
                    opacity: '1',
                })
            ),
            transition('in => out', animate('300ms ease-out')),
            transition('out => in', animate('300ms ease-in')),
        ]),
    ],
})
export class HomeComponent {
    outstanding: ItemOutstanding[] = Outstanding;
    products: ItemProduct[] = products;
    partners: Partner[] = Partners;
    users: User[] = Users;

    duration = 6000;

    slideState = 'out';

    customOptions: OwlOptions = {
        loop: false,
        // autoplay: true,
        dots: false,
        // autoHeight: true,
        navSpeed: 700,
        margin: 24,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash',
        nav: true,
        navText: [
            "<div class='nav-btn prev-slide'><span class='material-symbols-outlined'>chevron_left</span></div>",
            "<div class='nav-btn next-slide'><span class='material-symbols-outlined'>chevron_right</span></div>",
        ],
        slideBy: 2,
        responsive: {
            0: {
                items: 2,
            },
            400: {
                items: 3,
            },
            740: {
                items: 3,
            },
            940: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        },
    };

    toggleSlide() {
        this.slideState = this.slideState === 'in' ? 'out' : 'in';
    }
}
