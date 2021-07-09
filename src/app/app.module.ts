import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';


@NgModule({
	declarations: [AppComponent, MainLayoutComponent, SidenavComponent],
	imports: [BrowserModule, BrowserAnimationsModule, MatCardModule, MatSidenavModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
