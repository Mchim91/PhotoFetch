import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

interface UnsplashResponse {
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {


  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
       headers: {
        Authorization: 
        'Client-ID KdMk0d5Mkrp0AtnPg-33tlvDeyb_rJwmC4NQXykLvik'
       }
    });
  }
}
