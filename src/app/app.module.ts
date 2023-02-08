import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ShowComponent } from './stay/show/show.component';
import { ShowStatisticsComponent } from './statistics/show-statistics/show-statistics.component';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DatatableComponent } from './datatable/datatable.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './stay/add/add.component';
import { EditComponent } from './stay/edit/edit.component';
import { CardStatisticUserComponent } from './card-statistic-user/card-statistic-user.component';
import { CardStatisticIncomeComponent } from './card-statistic-income/card-statistic-income.component';
import { DeleteComponent } from './stay/delete/delete.component';
import {
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { CalendarComponent } from './properties/calendar/calendar.component';
import { MultiselectComponent } from './properties/multiselect/multiselect.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    SidebarComponent,
    ShowComponent,
    ShowStatisticsComponent,
    NavbarComponent,
    DatatableComponent,
    EditComponent,
    CardStatisticUserComponent,
    CardStatisticIncomeComponent,
    DeleteComponent,
    CalendarComponent,
    MultiselectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatTimepickerModule,
    NgxMatDatetimePickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
