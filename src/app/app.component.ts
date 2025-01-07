import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    pageToShow: string = 'stdForm';

    showForm(): void {
        this.pageToShow = 'stdForm';
    }

    showStudents(): void {
        this.pageToShow = 'searchScreen';
    }
}
