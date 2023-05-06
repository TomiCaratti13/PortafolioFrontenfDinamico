import { Injectable } from '@angular/core';
import { Storage, ref } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor(private storage: Storage) { }

  public subirImg($event:any, name:any) {
    if ($event.target && $event.target.files && typeof $event.target.files[0] !== 'undefined') {
      const file = $event.target.files[0];
      const imgRef = ref(this.storage, `imagen/` + name);
    }
  }
  
}
