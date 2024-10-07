import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'page-error',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="py-[40px] max-sm:pb-[20px]">
            <div class="container mx-auto px-[15px] text-center">

                <div class="flex justify-center mb-[40px] max-sm:mb-[20px]">
                <img
                    src="assets/images/page-404.jpg"
                    alt="Banner Terms Conditions"
                    title="Banner Terms Conditions"
                    class="rounded-lg"
                />

                </div>
                <button
                        class="bg-[#f28a28] text-white rounded-[37px] font-semibold text-[22px] leading-[33px] px-[25.5px] py-[11.5px] hover:bg-black
                        max-sm:text-[14px] max-sm:leading-[22px] max-sm:px-[15.5px] max-sm:py-[6px]"
                    >
                        Go back home
                    </button>
            </div>
        </div>
    `,
})
export class PageErrorComponent {}
