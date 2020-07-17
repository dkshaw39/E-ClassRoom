import { Injectable } from '@angular/core';
import * as CryptoJs from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class EncryptDataService {

  secretKey = 'DEEPAK';

  constructor() { }

  encrypt(data: any){
    return CryptoJs.AES.encrypt(JSON.stringify(data), this.secretKey).toString();
  }

  decrypt(encryptedData: any){
    const bytes = CryptoJs.AES.decrypt(encryptedData, this.secretKey);
    const data = JSON.parse(bytes.toString(CryptoJs.enc.uft8));
    console.log(data);
    return data;
  }
}
