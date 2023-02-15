import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDataDistrictComponent } from './show-data-district/show-data-district.component';
import { ShowDataProvinceComponent } from './show-data-province/show-data-province.component';

const routes: Routes = [
  { path: 'table-district', component: ShowDataDistrictComponent },
  { path: 'table-province', component: ShowDataProvinceComponent },
  { path: '', redirectTo: '/table-district', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
