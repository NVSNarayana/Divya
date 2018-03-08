import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCheckboxModule, MatSelectModule, MatRadioModule, MatTableModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StaticDataService } from './services/static-data.service';
import { HomeService } from './services/home.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Route[] = [
  { path: "home", component: HomeComponent },
  { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "**", pathMatch: "full", redirectTo: "/home" }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule, MatCheckboxModule, MatSelectModule, MatRadioModule,MatTableModule,
    RouterModule.forRoot(routes)
  ],
  providers: [StaticDataService, HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
