import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {ContentComponent} from './components/content/content.component';
import {PreviewUserImageComponent} from './components/preview-user-image/preview-user-image.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule, MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule, MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule
} from '@angular/material';
import {BreakpointObserver, MediaMatcher} from '@angular/cdk/layout';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from "@angular/forms";
import {PerfectScrollbarConfigInterface, PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import {TimeAgoPipe} from "time-ago-pipe";
import { LinkifyPipe } from './pipes/linkify.pipe';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

// material

@NgModule({
    declarations: [
        TimeAgoPipe,
        AppComponent,
        SidenavComponent,
        ContentComponent,
        PreviewUserImageComponent,
        LinkifyPipe,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        // CdkTableModule,
        // MatAutocompleteModule,
        MatButtonModule,
        // MatButtonToggleModule,
        MatCardModule,
        // MatCheckboxModule,
        MatChipsModule,
        // MatDatepickerModule,
        MatDialogModule,
        // MatExpansionModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        // MatListModule,
        // MatMenuModule,
        MatProgressBarModule,
        // MatProgressSpinnerModule,
        // MatRadioModule,
        MatRippleModule,
        // MatSelectModule,
        // MatSlideToggleModule,
        // MatSliderModule,
        MatSidenavModule,
        // MatSnackBarModule,
        // MatStepperModule,
        // MatTabsModule,
        MatToolbarModule,
        // MatTooltipModule,
        // MatPaginatorModule,
        // MatSortModule,
        // MatTableModule
        PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
    ],
    entryComponents: [PreviewUserImageComponent],
    providers: [BreakpointObserver, MediaMatcher],
    bootstrap: [AppComponent]
})
export class AppModule {
}
