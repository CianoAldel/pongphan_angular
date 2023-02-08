import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './edit.component.html',
})
export class EditComponent {
  showModal: boolean = true;

  constructor(private matDialogRef: MatDialogRef<EditComponent>) {}

  toggleModal() {
    this.showModal = true;
  }

  closeToggleModal() {
    this.matDialogRef.close();
  }
}
