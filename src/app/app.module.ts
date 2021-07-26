import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';



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
import { LoginContainerComponent } from './pages/login-container/login-container.component';
import { LoginFormComponent } from './pages/login-container/components/login-form/login-form.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthErrorInterceptor } from './interceptors/auth-error.interceptor';
import { ReviewWriteComponent } from './pages/show-details-container/components/review-write/review-write.component';
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
   LoginContainerComponent,
   LoginFormComponent,
   ReviewWriteComponent,
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
		 MatButtonModule,
		 HttpClientModule,
		 MatSnackBarModule
	],

	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthErrorInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
