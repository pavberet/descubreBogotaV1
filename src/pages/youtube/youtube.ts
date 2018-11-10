import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { YtProvider } from '../../providers/yt/yt';
import { Observable } from 'rxjs/Observable';
import { PlaylistPage } from '../playlist/playlist';

/**
 * Generated class for the YoutubePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-youtube',
  templateUrl: 'youtube.html',
})
export class YoutubePage {
  channelId = 'UC1wJbI-Z0U24G-H_64SSNPg';
  playlists: Observable<any []>;

/** constructor(public navCtrl: NavController, public navParams: NavParams, private ytProvider: YtProvider, private alertCtrl: AlertController)*/

  constructor(public navCtrl: NavController, public navParams: NavParams, private ytProvider: YtProvider, private alertCtrl: AlertController) {
  }
  searchPlaylist(){
    this.playlists = this.ytProvider.getPlaylistsForChannel(this.channelId);
    this.playlists.subscribe(data => {
      console.log('data: ', data);
    }, err => {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'Las listas de video no funcionan',
        buttons: ['Esta bien']
      });

      alert.present();
    }

    );

  }
  openPlaylist(id) {
    this.navCtrl.push(PlaylistPage, {id: id});
  }

  /**ionViewDidLoad() {
    console.log('ionViewDidLoad YoutubePage');
  }*/

}
