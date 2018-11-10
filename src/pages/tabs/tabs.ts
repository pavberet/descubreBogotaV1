import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { YoutubePage } from '../youtube/youtube';
import { GaleriaPage } from '../galeria/galeria';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = YoutubePage;
  tab5Root = GaleriaPage;

  constructor() {

  }
}
