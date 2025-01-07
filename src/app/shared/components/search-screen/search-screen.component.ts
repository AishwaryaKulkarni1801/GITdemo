import { Component } from '@angular/core';
import { Student } from '../../std.interface';
import { StdService } from '../../services/std-service.service';


@Component({
    selector: 'app-search-screen',
    templateUrl: './search-screen.component.html',
    styleUrls: ['./search-screen.component.scss']
})
export class SearchScreenComponent {
    searchText: string = '';

    constructor(private stdService: StdService) {}

    filteredStudents(): Student[] {
        return this.stdService.getStudents().filter(student =>
            student.name.toLowerCase().includes(this.searchText.toLowerCase())
        );
    }
}
