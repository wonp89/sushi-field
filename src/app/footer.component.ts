import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
    styleUrls:[`footer.component.css`]
})

export class FooterComponent {
    title: string = 'My first AGM project';
    lat: number = 48.412664;
    lng: number = -123.339103;
    zoom: number = 15;
}