import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ItemMenu } from '../../core/data';
import { Menu } from '../../core/data/data';
import { ScrollService } from '../../core/shared/services/scroll_to_id.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive, NgOptimizedImage],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    providers: [ScrollService]
})
export class HeaderComponent {
    menu: ItemMenu[] = Menu;

    openMenuMobile: boolean = false;
    showScroll: boolean = false;
    currentPosition: any;

    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        let pos =
            (document.documentElement.scrollTop || document.body.scrollTop) +
            document.documentElement.offsetHeight;
        if (pos > this.currentPosition) {
            this.showScroll = true;
        } else {
            this.showScroll = false;
        }
        this.currentPosition = pos;
    }

    constructor(private scrollToId: ScrollService) {}

    scrollToSection(id: string) {

        this.openMenuMobile =  false;

        return this.scrollToId.scrollToSection(id);
    }
}
