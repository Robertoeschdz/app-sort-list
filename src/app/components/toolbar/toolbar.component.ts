import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PeopleTableComponent } from '../people-table';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ],
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor(public dialog: MatDialog){}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void{
    this.dialog.open(PeopleTableComponent, {      
      enterAnimationDuration,
      exitAnimationDuration
    })
  }

  ngOnInit(): void {}
}
