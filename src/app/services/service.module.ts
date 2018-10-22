import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import {
  SettingsService,
  SharedService,
  SidebarService,
  UsuarioService,
  LoginGuardGuard
 } from './service.index';


@NgModule({
  providers: [
    SettingsService,
    SharedService,
    SidebarService,
    UsuarioService,
    LoginGuardGuard],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
})
export class ServiceModule { }
