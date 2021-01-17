
document.getElementById('ustYazi').innerHTML = "ŞUBE MÜDÜRLÜĞÜ TEST SAYFASI";
document.getElementById('altYazi').innerHTML = "Her Hakkı Saklıdır.";
document.getElementById('sagYazi').innerHTML = "Sol kısımdan ilgili Kanun / Yönetmelik Seçimi Yapınız.";
document.getElementById('kutu1').innerHTML = "Soru<br />Sor";
document.getElementById('kutu2').innerHTML = "Cevabı<br />Göster";
document.getElementById('kutu3').innerHTML = "Doğru";
document.getElementById('kutu4').innerHTML = "Yanlış";
document.getElementById('soruSayisi').innerHTML = "Soru Sayısı :";
document.getElementById('dogruSayisi').innerHTML = "Doğru :";
document.getElementById('yanlisSayisi').innerHTML = "Yanlış :";
//-----------------------------------------------------------------
document.getElementById('0').innerHTML = anaDizi[0][1];
document.getElementById('1').innerHTML = anaDizi[21][0];
document.getElementById('2').innerHTML = anaDizi[22][0];
document.getElementById('3').innerHTML = anaDizi[23][0];
document.getElementById('4').innerHTML = anaDizi[24][0];
document.getElementById('5').innerHTML = anaDizi[25][0];
document.getElementById('6').innerHTML = anaDizi[26][0];
document.getElementById('7').innerHTML = anaDizi[27][0];
document.getElementById('8').innerHTML = anaDizi[28][0];
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
var tiklananKanunIdsi;
var clicked_id;
var degistir = "degersiz";
var tiklananDeger;
var rastgeleSayi;
console.log(anaDizi.length);
//-----------------------------------------------------------------
function kalinlastir(clicked_id){
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
function rastgeleSayiUret(min, max){
  return tiklananKanunIdsi    = Math.floor(Math.random() * (max - min + 1)) +min; // min ile max arası değer üret/ min ve max dahil
}
//-----------------------------------------------------------------
function tiklananIdyeGoreRastgeleIcerikCek(clicked_id){
  if(clicked_id == '0'){
    rastgeleSayi = rastgeleSayiUret(0,164);
    return document.getElementById('icerikKutusuYazisi').innerHTML = anaDizi[rastgeleSayi][3];
  }
}
//-----------------------------------------------------------------
function tikla(clicked_id){
  if(!tiklananDeger){
    document.getElementById('icerikKutusuYazisi').innerHTML = "";
    document.getElementById('soruKutusuYazisi').innerHTML = "";
    tiklananDeger = clicked_id;
    tiklananIdyeGoreRastgeleIcerikCek(clicked_id);
  }else if(clicked_id == tiklananDeger){
    alert('Farklı bir Kanun, yönetmelik seçiniz.');
  }else{
    
  }
}



function soruSor(){
  console.log(clicked_id);
  if(!clicked_id){
    alert('Önce yan menüden Kanun veya Yönetmelik Seçiniz.');
  }else{
    document.getElementById('icerikKutusuYazisi').innerHTML = "Test";
  }
}



console.log(rastgeleSayiUret(1,3));
