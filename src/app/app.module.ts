import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule} from '@ionic/storage';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalCreateassignmentPageModule } from './pages/modal-createassignment/modal-createassignment.module';
import { ModalCreatenotesPageModule } from './pages/modal-createnotes/modal-createnotes.module';
import { ModalScheduleexamPageModule } from './pages/modal-scheduleexam/modal-scheduleexam.module';
import { POPOVERClassroomdetailsPageModule } from './pages/popover-classroomdetails/popover-classroomdetails.module';
import { MODALAddclassroomPageModule } from './pages/modal-addclassroom/modal-addclassroom.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, RouterModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule,
   IonicStorageModule.forRoot(),
    MODALAddclassroomPageModule, POPOVERClassroomdetailsPageModule, ModalCreateassignmentPageModule,
    ModalCreatenotesPageModule, ModalScheduleexamPageModule,
    SuperTabsModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
