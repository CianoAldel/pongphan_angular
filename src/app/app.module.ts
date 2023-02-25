import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ShowStatisticsComponent } from './statistics/show-statistics/show-statistics.component';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { CardStatisticUserComponent } from './components/card-statistic-user/card-statistic-user.component';
import { CardStatisticIncomeComponent } from './components/card-statistic-income/card-statistic-income.component';
import { DeleteComponent } from './components/delete/delete.component';
import {
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MultiselectComponent } from './components/multiselect/multiselect.component';
import { TableDetailProvinceComponent } from './table-detail-province/table-detail-province.component';
import { TableDetailDistrictComponent } from './table-detail-district/table-detail-district.component';
import { DetailService } from '../services/detail.service';
import { HttpClientModule } from '@angular/common/http';
import { ShowDataDistrictComponent } from './show-data-district/show-data-district.component';
import { ShowDataProvinceComponent } from './show-data-province/show-data-province.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    SidebarComponent,
    ShowStatisticsComponent,
    NavbarComponent,
    TableDetailDistrictComponent,
    EditComponent,
    CardStatisticUserComponent,
    CardStatisticIncomeComponent,
    DeleteComponent,
    CalendarComponent,
    MultiselectComponent,
    TableDetailProvinceComponent,
    ShowDataDistrictComponent,
    ShowDataProvinceComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatTimepickerModule,
    NgxMatDatetimePickerModule,
  ],
  providers: [DetailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
