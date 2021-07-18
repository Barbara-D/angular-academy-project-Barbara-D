import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


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


@NgModule({
	declarations: [AppComponent, MainLayoutComponent, SidenavComponent, AllShowsContainerComponent, ShowListComponent, ShowCardComponent, RatingComponent, TopRatedContainerComponent, ShowDetailsContainerComponent, ShowDetailsComponent, ReviewListComponent, ReviewComponent, ReviewsEmptyComponent, LoaderComponent],
	imports: [BrowserModule, BrowserAnimationsModule, MatCardModule, MatSidenavModule, MatIconModule, AppRoutingModule, MatProgressSpinnerModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
