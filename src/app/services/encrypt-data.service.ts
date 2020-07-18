import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class EncryptDataService {

  private secretKey = 'ThisIsNotaSecret';

  constructor() { }

  encrypt(data: any){
    return CryptoJS.AES.encrypt(JSON.stringify(data), this.secretKey).toString();
  }

  decrypt(encryptedData: string){
    const bytes = CryptoJS.AES.decrypt(encryptedData, this.secretKey);
    const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return data;
  }
}
