import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailService } from 'src/services/detail.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private matDialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    private detailService: DetailService
  ) {}

  ngOnInit(): void {}

  deleteData() {
    this.detailService.deleteDetail(this.data.id);
    this.closeToggleModal();
    this.router
      .navigateByUrl('/table-province', { skipLocationChange: true })
      .then(() => this.router.navigate(['/table-province']));
  }

  closeToggleModal() {
    this.matDialogRef.close();
  }
}
