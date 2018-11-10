import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

/*
  Generated class for the YtProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class YtProvider {
  apiKey = 'AIzaSyALywhgGbydjV7iwUo_q8wSz-iXPCrFc6g';
  //** constructor(public http: HttpClient)*/
  constructor(public http: Http) {
  }

  getPlaylistsForChannel(channel){
    return this.http.get('https://www.googleapis.com/youtube/v3/playlists?key=' + this.apiKey + '&channelId=' + channel + '&part=snippet, id&maxResults=10')
      .map(res => {
        return res.json()['items'];
      }

      )
  }

  getListVideos(listId){
    return this.http.get('https://www.googleapis.com/youtube/v3/playlistsItems?key=' + this.apiKey + '&playlistId=' + listId + '&part=snippet, id&maxResults=10')
    .map(res => {
      return res.json()['items'];
    }

    )
  }
}
