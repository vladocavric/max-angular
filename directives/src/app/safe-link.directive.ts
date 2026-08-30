import { Directive, ElementRef, inject, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    }
})

export class SafeLinkDirective {
    queryParam = input('myApp', { alias: 'appSafeLink' })
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef)
    constructor() {
        console.log('SafeLinkDirective is running')
    }

    onConfirmLeavePage(e: MouseEvent) {
        const wnatToLeave = window.confirm('Do you want to leave a page')

        if (wnatToLeave) {
            // const address = (e.target as HTMLAnchorElement).href;
            const address = this.hostElementRef.nativeElement.href;
            // (e.target as HTMLAnchorElement).href = address + '?form=' + this.queryParam()
            this.hostElementRef.nativeElement.href = address + '?form=' + this.queryParam()
            return
        }
        e.preventDefault()
    }
}