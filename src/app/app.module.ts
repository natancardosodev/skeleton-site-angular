import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { GlobalErrorHandler } from '@core/interceptor/global-error-handler';
import { MaterialModule } from '@shared/modules/material.module';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, SharedModule],
    providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }],
    bootstrap: [AppComponent]
})
export class AppModule {}
