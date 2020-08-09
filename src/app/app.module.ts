import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

// translate language
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalCreateassignmentPageModule } from './pages/modal-createassignment/modal-createassignment.module';
import { ModalCreatenotesPageModule } from './pages/modal-createnotes/modal-createnotes.module';
import { ModalScheduleexamPageModule } from './pages/modal-scheduleexam/modal-scheduleexam.module';
import { POPOVERClassroomdetailsPageModule } from './pages/popover-classroomdetails/popover-classroomdetails.module';
import { MODALAddclassroomPageModule } from './pages/modal-addclassroom/modal-addclassroom.module';
import { InterceptorService } from './services/interceptor.service';
import { from } from 'rxjs';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

// provide a local folder in factory for translateModule
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    RouterModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    MODALAddclassroomPageModule,
    POPOVERClassroomdetailsPageModule,
    ModalCreateassignmentPageModule,
    ModalCreatenotesPageModule,
    ModalScheduleexamPageModule,
    SuperTabsModule.forRoot(),
    // translateModule Initialization
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AngularFireModule.initializeApp(environment.firebase, 'test'),
    AngularFireAuthModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseAuthentication,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
