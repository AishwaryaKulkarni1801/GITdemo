import { Component } from '@angular/core';
import { StdService } from '../../services/std-service.service';
import { Student } from '../../std.interface';


@Component({
    selector: 'app-std-form',
    templateUrl: './std-form.component.html',
    styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent {
    student: Student = { name: '', age: null, email: '', rollNumber: '' };

    constructor(private _stdService: StdService) {}

    addStudent(form: any): void {
        if(form.valid){
          this._stdService.addStudent({ ...this.student });
          form.reset()
          alert('Student added successfully!');
        }
        else{
          alert('Form is not valid, Please Check again !');
        }
    }
}
