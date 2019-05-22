import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { InputModalComponent } from './input-modal/input-modal.component';
import { DialogData } from './DialogData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'modal';
  motivo: string;
  motivos: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(InputModalComponent, {
      width: '250px',
      data: {name: this.name, animal: this.motivo}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.motivo = result;
    });
  }
}
