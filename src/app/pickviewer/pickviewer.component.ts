import { Component } from '@angular/core';
interface Student {
  name: string;
  hasReviewed: boolean;
}

@Component({
  selector: 'app-pickviewer',
  standalone: true,
  imports: [],
  templateUrl: './pickviewer.component.html',
  styleUrl: './pickviewer.component.scss',
})
export class PickviewerComponent {
  private students: Student[] = [
    { name: 'Alice', hasReviewed: false },
    { name: 'Bob', hasReviewed: false },
    { name: 'Charlie', hasReviewed: false },
    { name: 'David', hasReviewed: false },
  ];

  public pickViewer: string = '';

  public setAllSutdentsReviewed(): void {
    this.students.forEach((student) => {
      student.hasReviewed = false;
    });
  }

  public getStudentByName(name: string): Student | undefined {
    return this.students.find((student) => student.name === name);
  }

  public pickReviewer(): void {
    const studentsToPick = this.students.filter(
      (student) => !student.hasReviewed
    );

    const randomIndex = Math.floor(Math.random() * studentsToPick.length);
    const studentToPick = studentsToPick[randomIndex];
    const student = this.getStudentByName(studentToPick.name);
    if (student) student.hasReviewed = true;

    if (studentsToPick.length === 1) this.setAllSutdentsReviewed();
    console.log('students', this.students);

    this.pickViewer = studentToPick.name;
  }
}
