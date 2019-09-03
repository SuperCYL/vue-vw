import CryptoJS from 'crypto-js';
/**
 * CryptoJS加密
 */
export function jiami(data){ //加密
    var key  = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';  //密钥
    var iv   = '1234567812345678';
    var encrypted = getAesString(data,key,iv); //密文
    var encrypted1 = CryptoJS.enc.Utf8.parse(encrypted);
    return encrypted;
}

/**
 * CryptoJS解密
 */
export function jiemi(word) {
   let key  =  "2016@wsy7173.com"
   let iv = "0123456789abcdef"
 
   if (key) {
     key = CryptoJS.enc.Utf8.parse(key);
     iv = CryptoJS.enc.Utf8.parse(iv);
   }
 
   let base64 = CryptoJS.enc.Base64.parse(word);
   let src = CryptoJS.enc.Base64.stringify(base64);
 
   var decrypt = CryptoJS.AES.decrypt(src, key, {
     iv: iv,
     mode: CryptoJS.mode.CBC,
     padding: CryptoJS.pad.ZeroPadding
   });
 
   var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
   return decryptedStr.toString();
 }
