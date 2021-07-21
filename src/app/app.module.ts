import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AllShowsContainerComponent } from './pages/all-shows-container/all-shows-container.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { RatingComponent } from './components/rating/rating.component';
import { AppRoutingModule } from './app-routing.module';
import { TopRatedContainerComponent } from './pages/top-rated-container/top-rated-container.component';
import { ShowDetailsContainerComponent } from './pages/show-details-container/show-details-container.component';
import { ShowDetailsComponent } from './pages/show-details-container/components/show-details/show-details.component';
import { ReviewListComponent } from './pages/show-details-container/components/review-list/review-list.component';
import { ReviewComponent } from './components/review/review.component';
import { ReviewsEmptyComponent } from './components/reviews-empty/reviews-empty.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { RegisterContainerComponent } from './pages/register-container/register-container.component';
import { RegisterFormComponent } from './pages/register-container/components/register-form/register-form.component';


@NgModule({
	declarations: [
			AllShowsContainerComponent,
			AppComponent,
			FormLayoutComponent,
			LoaderComponent,
			MainLayoutComponent,
			RatingComponent,
			RegisterContainerComponent,
			RegisterFormComponent,
			ReviewComponent,
			ReviewListComponent,
			ReviewsEmptyComponent,
			ShowCardComponent,
			ShowDetailsComponent,
			ShowDetailsContainerComponent,
			ShowListComponent,
			SidenavComponent,
			TopRatedContainerComponent,
		],

	imports: [
		 AppRoutingModule,
		 BrowserAnimationsModule,
		 BrowserModule,
		 MatCardModule,
		 MatIconModule,
		 MatProgressSpinnerModule,
		 MatSidenavModule,
		 MatFormFieldModule,
		 MatInputModule,
		 ReactiveFormsModule,
	],

	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
