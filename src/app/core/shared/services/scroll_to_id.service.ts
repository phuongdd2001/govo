import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class ScrollService {
    constructor(private router: Router, private activeRouter: ActivatedRoute) {}

    scrollToSection(id: string) {
        if (this.router.url === '/terms-conditions' || this.router.url === '/privacy-policy') {
            this.router.navigate(['/'], { fragment: id });

            setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest',
                });
            }
        });
        } else {
            this.router.navigate([], {
                relativeTo: this.activeRouter,
                fragment: id,
                queryParamsHandling: 'merge',
                replaceUrl: true,
            });

            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest',
                });
            }
        }
    }
}
