import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { Material2Module } from '../common/core/modules/material2.module';

import { DashboardComponent } from './dashboard.component';
import { MainComponent } from './main/main.component';

import { NewRoomDialogComponent } from '../common/shared/components/new-room-dialog/new-room-dialog.component';
import { JoinRoomConfirmationDialogComponent } from '../common/shared/components/join-room-confirmation-dialog/join-room-confirmation-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    Material2Module
  ],
  entryComponents: [
    NewRoomDialogComponent,
    JoinRoomConfirmationDialogComponent
  ],
  declarations: [
    DashboardComponent,
    MainComponent,
    NewRoomDialogComponent,
    JoinRoomConfirmationDialogComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DashboardModule { }