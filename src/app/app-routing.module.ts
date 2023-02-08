import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowStatisticsComponent } from './statistics/show-statistics/show-statistics.component';
import { ShowComponent } from './stay/show/show.component';
import { AddComponent } from './stay/add/add.component';

const routes: Routes = [
  { path: 'show-statistics', component: ShowStatisticsComponent },
  { path: 'show-stay', component: ShowComponent },
  { path: '', redirectTo: '/show-statistics', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
