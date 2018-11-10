import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MenuareasPage } from '../pages/menuareas/menuareas';
import { YoutubePage } from '../pages/youtube/youtube';
import { GaleriaPage } from '../pages/galeria/galeria';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { YtProvider } from '../providers/yt/yt';
import { HttpModule } from '@angular/http';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { PlaylistPage } from '../pages/playlist/playlist';

import { NgCalendarModule } from 'ionic2-calendar';

import { IonicImageViewerModule } from 'ionic-img-viewer';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MenuareasPage,
    YoutubePage,
    PlaylistPage,
    GaleriaPage
  ],
  imports: [
    IonicImageViewerModule,
    NgCalendarModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MenuareasPage,
    YoutubePage,
    PlaylistPage,
    GaleriaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    YtProvider,
    YoutubeVideoPlayer
  ]
})
export class AppModule {}
