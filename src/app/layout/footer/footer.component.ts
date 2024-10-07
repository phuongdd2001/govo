import { Component } from '@angular/core';
import { ItemMenu } from '../../core/data';
import { Menu } from '../../core/data/data';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ScrollService } from '../../core/shared/services/scroll_to_id.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, NgOptimizedImage],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    providers: [ScrollService]
})
export class FooterComponent {
    menu: ItemMenu[] = Menu;

    constructor(private scrollToId: ScrollService) {}

    scrollToSection(id: string) {
        return this.scrollToId.scrollToSection(id);

    }
}
