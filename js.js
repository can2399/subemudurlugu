
document.getElementById('ustYazi').innerHTML = "ŞUBE MÜDÜRLÜĞÜ TEST SAYFASI";
document.getElementById('altYazi').innerHTML = "Her Hakkı Saklıdır.";
document.getElementById('solMenuBaslik').innerHTML = "<b>KANUN & YÖNETMELİK SEÇİMi</b><br /><br />";
document.getElementById('sagMenuBaslik').innerHTML = "<b>SORU & CEVAP ALANI</b><br />";
document.getElementById('kutu1').innerHTML = "Soru<br />Sor";
document.getElementById('kutu2').innerHTML = "Cevabı<br />Göster";
document.getElementById('kutu3').innerHTML = "Doğru";
document.getElementById('kutu4').innerHTML = "Yanlış";
document.getElementById('soruSayisi').innerHTML = "Soru Sayısı :";
document.getElementById('dogruSayisi').innerHTML = "Doğru :";
document.getElementById('yanlisSayisi').innerHTML = "Yanlış :";
//-----------------------------------------------------------------
var saniye = 0, dakika = 0, saat = 0;
var cSaat;
var cDakika;
var cSaniye;
function kronometre(){
 if(saniye < 59){
   saniye = saniye + 1;
 }else{
  saniye = 0;
  if(dakika < 59){
    dakika = dakika + 1;
  }else{
    dakika = 0;
    saat = saat + 1;
  }
}
document.getElementById('kronometre').innerHTML = saat + " : " + dakika + " : " + saniye;
cSaat = saat;
cDakika = dakika;
cSaniye = saniye;
}
setInterval("kronometre()",1000);
//-----------------------------------------------------------------

var cerezSaat = "cSaat";
var cerezDakika = "cDakika";
var cerezSaniye = "cSaniye";



function cerez(){
  cSaat = saat;
  cDakika = dakika;
  cSaniye = saniye;
  document.cookie = cerezSaat + "=" + cSaat + ";" + "2100";
  document.cookie = cerezDakika + "=" + cDakika + ";" + "2100";
  document.cookie = cerezSaniye + "=" + cSaniye + ";" + "2100";

}
var cerezler = document.cookie;
setInterval("cerez()",1000);
console.log(cerezler);
//-----------------------------------------------------------------
document.getElementById('20').innerHTML = "Rastgele Seçerek Sor";
document.getElementById('0').innerHTML = anaDizi[0][1];
document.getElementById('1').innerHTML = anaDizi[208][1];
document.getElementById('2').innerHTML = anaDizi[233][1];
document.getElementById('3').innerHTML = anaDizi[244][1];
document.getElementById('4').innerHTML = anaDizi[254][1];
document.getElementById('5').innerHTML = anaDizi[287][1];
document.getElementById('6').innerHTML = "657 Sayılı Devlet Memurları Kanunu (2, 3, 4, 5, 7.Bölüm)"
document.getElementById('7').innerHTML = anaDizi[385][1];
document.getElementById('8').innerHTML = anaDizi[406][1];
document.getElementById('9').innerHTML = anaDizi[29][0];
document.getElementById('10').innerHTML = anaDizi[30][0];
document.getElementById('11').innerHTML = anaDizi[31][0];
document.getElementById('12').innerHTML = anaDizi[32][0];
document.getElementById('13').innerHTML = anaDizi[33][0];
document.getElementById('14').innerHTML = anaDizi[34][0];
document.getElementById('15').innerHTML = anaDizi[35][0];
document.getElementById('16').innerHTML = anaDizi[36][0];
document.getElementById('17').innerHTML = anaDizi[37][0];
document.getElementById('18').innerHTML = anaDizi[38][0];
document.getElementById('19').innerHTML = anaDizi[39][0];
//-----------------------------------------------------------------
var clicked_id; // sol menü
var degistir = "degersiz"; // sol menü
var tiklananDeger; // sol menü - tıkla() fonksiyonu, sağ menü - cevabiGoster() fonksiyonu
var tiklananKanunIdsi; // rastgeleSayiUret() fonksiyonu
var rastgeleSayi; // tiklananIdyeGoreRastgeleIcerikCek() fonksiyonu
var dogruSayisi = parseInt('0'); // dogru() fonksiyonu
var yanlisSayisi=parseInt('0'); // yanlis() fonksiyonu
var soruSayisi=parseInt('0'); // dogru ve yanlis fonksiyonlarında
var soruSoraBasildi; // butonlarda
var cevabiGostereBasildi; // butonlarda
var dogruyaBasildi; // butonlarda
var yanlisaBasildi; // butonlarda
//-----------------------------------------------------------------
function kalinlastir(clicked_id){ // sol menü
  console.log(clicked_id);
  if(degistir == "degersiz"){
    document.getElementById(clicked_id).style.fontWeight = "bold";
    degistir = clicked_id;
    console.log(degistir);
  }else if(degistir != "degersiz"){
    document.getElementById(degistir).style.fontWeight = "normal";
    document.getElementById(clicked_id).style.fontWeight = "bold";
    degistir = clicked_id;
  }
}
//-----------------------------------------------------------------
function tikla(clicked_id){ // sol menü
  if(!tiklananDeger){
    document.getElementById('icerikKutusuYazisi').innerHTML = "";
    document.getElementById('soruKutusuYazisi').innerHTML = "";
    tiklananDeger = clicked_id;
    tiklananIdyeGoreRastgeleIcerikCek(tiklananDeger);
    soruSoraBasildi=1;
    cevabiGostereBasildi=0;
    dogruyaBasildi=0;
    yanlisaBasildi=0;
  }else if(clicked_id == tiklananDeger){
    alert('Farklı bir Kanun, yönetmelik seçiniz.');
  }else{
    document.getElementById('icerikKutusuYazisi').innerHTML = "";
    document.getElementById('soruKutusuYazisi').innerHTML = "";
    tiklananDeger = clicked_id;
    tiklananIdyeGoreRastgeleIcerikCek(tiklananDeger);
    soruSoraBasildi=1;
    cevabiGostereBasildi=0;
    dogruyaBasildi=0;
    yanlisaBasildi=0;
  }
}
//-----------------------------------------------------------------
function rastgeleSayiUret(min, max){
  return tiklananKanunIdsi    = Math.floor(Math.random() * (max - min + 1)) +min; // min ile max arası değer üret/ min ve max dahil
}
//-----------------------------------------------------------------
function tiklananIdyeGoreRastgeleIcerikCek(tiklananDeger){
  if(tiklananDeger == '0'){
    rastgeleSayi = rastgeleSayiUret(0,207);
    console.log(rastgeleSayi);
    return document.getElementById('icerikKutusuYazisi').innerHTML = anaDizi[rastgeleSayi][3];
  }
  else if(tiklananDeger == '1'){
    rastgeleSayi = rastgeleSayiUret(208,232);
    console.log(rastgeleSayi);
    return document.getElementById('icerikKutusuYazisi').innerHTML = anaDizi[rastgeleSayi][3];
  }
  else if(tiklananDeger == '2'){
    rastgeleSayi = rastgeleSayiUret(233,243);
    console.log(rastgeleSayi);
    return document.getElementById('icerikKutusuYazisi').innerHTML = anaDizi[rastgeleSayi][3];
  }
  else if(tiklananDeger == '3'){
    rastgeleSayi = rastgeleSayiUret(244,253);
    console.log(rastgeleSayi);
    return document.getElementById('icerikKutusuYazisi').innerHTML = anaDizi[rastgeleSayi][3];
  }
  else if(tiklananDeger == '4'){
    rastgeleSayi = rastgeleSayiUret(254,286);
    console.log(rastgeleSayi);
    return document.getElementById('icerikKutusuYazisi').innerHTML = anaDizi[rastgeleSayi][3];
  }
  else if(tiklananDeger == '5'){
    rastgeleSayi = rastgeleSayiUret(287,384);
    console.log(rastgeleSayi);
    return document.getElementById('icerikKutusuYazisi').innerHTML = anaDizi[rastgeleSayi][3];
  }
  else if(tiklananDeger == '6'){
    rastgeleSayi = rastgeleSayiUret(208,384);
    console.log(rastgeleSayi);
    return document.getElementById('icerikKutusuYazisi').innerHTML = anaDizi[rastgeleSayi][3];
  }
  else if(tiklananDeger == '7'){
    rastgeleSayi = rastgeleSayiUret(385,405);
    console.log(rastgeleSayi);
    return document.getElementById('icerikKutusuYazisi').innerHTML = anaDizi[rastgeleSayi][3];
  }
  else if(tiklananDeger == '8'){
    rastgeleSayi = rastgeleSayiUret(406,414);
    console.log(rastgeleSayi);
    return document.getElementById('icerikKutusuYazisi').innerHTML = anaDizi[rastgeleSayi][3];
  }
  else if(tiklananDeger == '9'){
    rastgeleSayi = rastgeleSayiUret(415,504);
    console.log(rastgeleSayi);
    return document.getElementById('icerikKutusuYazisi').innerHTML = anaDizi[rastgeleSayi][3];
  }
  else if(tiklananDeger == '10'){
    rastgeleSayi = rastgeleSayiUret(0,164);
    console.log(rastgeleSayi);
    return document.getElementById('icerikKutusuYazisi').innerHTML = anaDizi[rastgeleSayi][3];
  }
  else if(tiklananDeger == '11'){
    rastgeleSayi = rastgeleSayiUret(0,164);
    console.log(rastgeleSayi);
    return document.getElementById('icerikKutusuYazisi').innerHTML = anaDizi[rastgeleSayi][3];
  }
  else if(tiklananDeger == '12'){
    rastgeleSayi = rastgeleSayiUret(0,164);
    console.log(rastgeleSayi);
    return document.getElementById('icerikKutusuYazisi').innerHTML = anaDizi[rastgeleSayi][3];
  }
  else if(tiklananDeger == '13'){
    rastgeleSayi = rastgeleSayiUret(0,164);
    console.log(rastgeleSayi);
    return document.getElementById('icerikKutusuYazisi').innerHTML = anaDizi[rastgeleSayi][3];
  }
  else if(tiklananDeger == '14'){
    rastgeleSayi = rastgeleSayiUret(0,164);
    console.log(rastgeleSayi);
    return document.getElementById('icerikKutusuYazisi').innerHTML = anaDizi[rastgeleSayi][3];
  }
  else if(tiklananDeger == '15'){
    rastgeleSayi = rastgeleSayiUret(0,164);
    console.log(rastgeleSayi);
    return document.getElementById('icerikKutusuYazisi').innerHTML = anaDizi[rastgeleSayi][3];
  }
  else if(tiklananDeger == '16'){
    rastgeleSayi = rastgeleSayiUret(0,164);
    console.log(rastgeleSayi);
    return document.getElementById('icerikKutusuYazisi').innerHTML = anaDizi[rastgeleSayi][3];
  }
  else if(tiklananDeger == '17'){
    rastgeleSayi = rastgeleSayiUret(0,164);
    console.log(rastgeleSayi);
    return document.getElementById('icerikKutusuYazisi').innerHTML = anaDizi[rastgeleSayi][3];
  }
  else if(tiklananDeger == '18'){
    rastgeleSayi = rastgeleSayiUret(0,164);
    console.log(rastgeleSayi);
    return document.getElementById('icerikKutusuYazisi').innerHTML = anaDizi[rastgeleSayi][3];
  }
  else if(tiklananDeger == '19'){
    rastgeleSayi = rastgeleSayiUret(0,164);
    console.log(rastgeleSayi);
    return document.getElementById('icerikKutusuYazisi').innerHTML = anaDizi[rastgeleSayi][3];
  }
  else if(tiklananDeger == '20'){
    rastgeleSayi = rastgeleSayiUret(0,504);
    console.log(rastgeleSayi);
    return document.getElementById('icerikKutusuYazisi').innerHTML = anaDizi[rastgeleSayi][3];
  }
  else{
    alert('İşlemsel hata meydana geldi.');
  }
}
//-----------------------------------------------------------------
function soruSor(){
  console.log(tiklananDeger);

  if(!tiklananDeger){
    alert('Önce yan menüden Kanun veya Yönetmelik Seçiniz.');
  }else if(tiklananDeger){
    if(soruSoraBasildi==1 && cevabiGostereBasildi==0 && dogruyaBasildi==0 && yanlisaBasildi==0){
      alert("Önce Cevabı Göster'e basınız.");
    }else if(soruSoraBasildi==1 && cevabiGostereBasildi==1 && dogruyaBasildi==0 && yanlisaBasildi==0){
      alert("Doğru veya Yanlış butonuna basınız.");
    }else if(soruSoraBasildi==1 && cevabiGostereBasildi==1 && dogruyaBasildi==1 && yanlisaBasildi==0){
      document.getElementById('icerikKutusuYazisi').innerHTML = "";
      document.getElementById('soruKutusuYazisi').innerHTML = "";
      tiklananIdyeGoreRastgeleIcerikCek(tiklananDeger);
      soruSoraBasildi=1;
      cevabiGostereBasildi=0;
      dogruyaBasildi=0;
      yanlisaBasildi=0;
    }else if(soruSoraBasildi==1 && cevabiGostereBasildi==1 && dogruyaBasildi==0 && yanlisaBasildi==1){
      document.getElementById('icerikKutusuYazisi').innerHTML = "";
      document.getElementById('soruKutusuYazisi').innerHTML = "";
      tiklananIdyeGoreRastgeleIcerikCek(tiklananDeger);
      soruSoraBasildi=1;
      cevabiGostereBasildi=0;
      dogruyaBasildi=0;
      yanlisaBasildi=0;
    }
  }else{
    alert("İşlemsel bir hata meydna geldi.");
  }
}
//-----------------------------------------------------------------
function cevabiGoster(){
  if(!tiklananDeger){
    alert('Önce yan menüden Kanun veya Yönetmelik Seçiniz.');
  }else if(tiklananDeger==20){
    if(soruSoraBasildi==1 && cevabiGostereBasildi==0 && dogruyaBasildi==0 && yanlisaBasildi==0){
      document.getElementById('soruKutusuYazisi').innerHTML = anaDizi[rastgeleSayi][1]+ " - " +anaDizi[rastgeleSayi][2]+ " - " +anaDizi[rastgeleSayi][4];
      soruSoraBasildi=1;
      cevabiGostereBasildi=1;
      dogruyaBasildi=0;
      yanlisaBasildi=0;
    }else if(soruSoraBasildi==1 && cevabiGostereBasildi==1 && dogruyaBasildi==0 && yanlisaBasildi==0){
      alert("Doğru veya Yanlış butonuna basınız.");
    }else if(soruSoraBasildi==1 && cevabiGostereBasildi==1 && dogruyaBasildi==1 && yanlisaBasildi==0){
      alert("Soru Sor butonuna basınız.");
    }else if(soruSoraBasildi==1 && cevabiGostereBasildi==1 && dogruyaBasildi==0 && yanlisaBasildi==1){
      alert("Soru Sor butonuna basınız.");
    }else{
      alert("İşlemsel bir hata meydana geldi.");
    }
  }else if(tiklananDeger && tiklananDeger !=20){
    if(soruSoraBasildi==1 && cevabiGostereBasildi==0 && dogruyaBasildi==0 && yanlisaBasildi==0){
      document.getElementById('soruKutusuYazisi').innerHTML = anaDizi[rastgeleSayi][2]+ " - " +anaDizi[rastgeleSayi][4];
      soruSoraBasildi=1;
      cevabiGostereBasildi=1;
      dogruyaBasildi=0;
      yanlisaBasildi=0;
    }else if(soruSoraBasildi==1 && cevabiGostereBasildi==1 && dogruyaBasildi==0 && yanlisaBasildi==0){
      alert("Doğru veya Yanlış butonuna basınız.");
    }else if(soruSoraBasildi==1 && cevabiGostereBasildi==1 && dogruyaBasildi==1 && yanlisaBasildi==0){
      alert("Soru Sor butonuna basınız.");
    }else if(soruSoraBasildi==1 && cevabiGostereBasildi==1 && dogruyaBasildi==0 && yanlisaBasildi==1){
      alert("Soru Sor butonuna basınız.");
    }
    else{
      alert("İşlemsel bir hata meydana geldi.");
    }
  }else{
    alert("İşlemsel bir hata meydana geldi.");
  }
}
//-----------------------------------------------------------------
function dogru(){
  if(!tiklananDeger){
    alert('Önce yan menüden Kanun veya Yönetmelik Seçiniz.');
  }else if(tiklananDeger){
    if(soruSoraBasildi==1 && cevabiGostereBasildi==1 && dogruyaBasildi==0 && yanlisaBasildi==0){
      dogruSayisi+=1;
      soruSayisi+=1;
      document.getElementById('soruSayisi').innerHTML = "Soru Sayısı : "+soruSayisi;
      document.getElementById('dogruSayisi').innerHTML = "Doğru : "+dogruSayisi;
      document.getElementById('yanlisSayisi').innerHTML = "Yanlış : "+yanlisSayisi;
      dogruyaBasildi=1;
    }else if(soruSoraBasildi==1 && cevabiGostereBasildi==1 && dogruyaBasildi==1 && yanlisaBasildi==0){
      alert("Doğru'ya tıklandı. Soru Sor'a tıklayınız.");
    }else if(soruSoraBasildi==1 && cevabiGostereBasildi==1 && dogruyaBasildi==0 && yanlisaBasildi==1){
      alert("Cevabı verdiniz. Soru Sor'a tıklayınız.");
    }else if(soruSoraBasildi==1 && cevabiGostereBasildi==0 && dogruyaBasildi==0 && yanlisaBasildi==0){
      alert("Cevabı Göster'e tıklayınız.");
    }
  }
}
//-----------------------------------------------------------------
function yanlis(){
  if(!tiklananDeger){
    alert('Önce yan menüden Kanun veya Yönetmelik Seçiniz.');
  }else if(tiklananDeger){
    if(soruSoraBasildi==1 && cevabiGostereBasildi==1 && dogruyaBasildi==0 && yanlisaBasildi==0){
      yanlisSayisi+=1;
      soruSayisi+=1;
      document.getElementById('soruSayisi').innerHTML = "Soru Sayısı : "+soruSayisi;
      document.getElementById('dogruSayisi').innerHTML = "Doğru : "+dogruSayisi;
      document.getElementById('yanlisSayisi').innerHTML = "Yanlış : "+yanlisSayisi;
      yanlisaBasildi=1;
    }else if(soruSoraBasildi==1 && cevabiGostereBasildi==1 && dogruyaBasildi==0 && yanlisaBasildi==1){
      alert("Yanlış'a tıklandı. Soru Sor'a tıklayınız.");
    }else if(soruSoraBasildi==1 && cevabiGostereBasildi==1 && dogruyaBasildi==1 && yanlisaBasildi==0){
      alert("Cevabı verdiniz. Soru Sor'a tıklayınız.");
    }else if(soruSoraBasildi==1 && cevabiGostereBasildi==0 && dogruyaBasildi==0 && yanlisaBasildi==0){
      alert("Cevabı Göster'e tıklayınız.");
    }
  }
}
//-----------------------------------------------------------------
