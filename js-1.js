
document.getElementById('ustYazi').innerHTML = "ŞUBE MÜDÜRLÜĞÜ TEST SAYFASI";
document.getElementById('altYazi').innerHTML = "Her Hakkı Saklıdır.";
// document.getElementById('solYazi').innerHTML = "Kanun Seçimi Yapılacak";
document.getElementById('sagYazi').innerHTML = "Sol kısımdan ilgili Kanun / Yönetmelik Seçimi Yapınız.";

var anaDizi= [
  [0,"1 sayılı Cumhurbaşkanlığı Kararnamesi","97","Yerleşmeye, çevreye ve yapılaşmaya dair imar, çevre, yapı ve yapım mevzuatını hazırlamak, uygulamaları izlemek ve denetlemek, Bakanlığın görev alanı ile ilgili mesleki hizmetlerin norm ve standartlarını hazırlamak, geliştirmek, uygulanmasını sağlamak ve ilgililerin kayıtlarını tutmak","Yukarıda belirtilen ifade hangi kurumun görevidir ?","Çevre Şehircilik Bakanlığı"],
  [1,"1 sayılı Cumhurbaşkanlığı Kararnamesi","97","Çevrenin korunması, iyileştirilmesi ile çevre kirliliğinin önlenmesine yönelik prensip ve politikaların belirlenmesi amacıyla gerekli çalışmaları yapmak, standart ve ölçütler geliştirmek, programlar hazırlamak; bu çerçevede eğitim, araştırma, projelendirme, eylem planları ve kirlilik haritalarını oluşturmak, bunların uygulama esaslarını tespit etmek ve izlemek, iklim değişikliği ile ilgili iş ve işlemleri yürütmek,","Yukarıda belirtilen ifade hangi kurumun görevidir ?","Çevre Şehircilik Bakanlığı"],
  [2,"1 sayılı Cumhurbaşkanlığı Kararnamesi","97","Faaliyetleri sonucu alıcı ortamlara katı, sıvı ve gaz halde atık bırakarak kirlilik oluşturan veya oluşturması muhtemel her türlü tesis ve faaliyetin, çevresel etkilerini değerlendirmek; alıcı ortamlar ile ilgili ölçüm ve izleme çalışmalarını yapmak; bahse konu tesis ve faaliyetleri izlemek, izin vermek, denetlemek ve gürültünün kontrol edilmesini sağlamak,","Yukarıda belirtilen ifade hangi kurumun görevidir ?","Çevre Şehircilik Bakanlığı"],
  [3,"1 sayılı Cumhurbaşkanlığı Kararnamesi","97","Her tür ve ölçekteki fiziki planlara ve bunların uygulanmasına yönelik temel ilke, strateji ve standartları belirlemek ve bunların uygulanmasını sağlamak, Cumhurbaşkanınca yetkilendirilen alanlar ile merkezi idarenin yetkisi içindeki kamu yatırımları, mülkiyeti kamuya ait arsa ve araziler üzerinde yapılacak her türlü yapı, milli güvenliğe dair tesisler, askeri yasak bölgeler, genel sığınak alanları, özel güvenlik bölgeleri, enerji ve telekomünikasyon tesislerine ilişkin etütleri, harita, her tür ve ölçekte çevre düzeni, nazım ve uygulama imar planlarını, parselasyon planlarını ve değişikliklerini resen yapmak, yaptırmak, onaylamak ve başvuru tarihinden itibaren iki ay içinde yetkili idarelerce ruhsatlandırma yapılmaması halinde resen ruhsat ve yapı kullanma izni vermek,","Yukarıda belirtilen ifade hangi kurumun görevidir ?","Çevre Şehircilik Bakanlığı"],
  [4,"1 sayılı Cumhurbaşkanlığı Kararnamesi","97","Mekânsal strateji planlarını ilgili kurum ve kuruluşlarla işbirliği yapmak suretiyle hazırlamak ve mahalli idarelerin plan kararlarının bu stratejilere uygunluğunu denetlemek,","Yukarıda belirtilen ifade hangi kurumun görevidir ?","Çevre Şehircilik Bakanlığı"],
  [5,"1 sayılı Cumhurbaşkanlığı Kararnamesi","97","Milli Savunma Bakanlığının inşaat milli ve NATO alt yapı hizmetleri ile Ulaştırma Denizcilik ve Haberleşme Bakanlığına bağlı genel müdürlüklere kanunlarla veya Cumhurbaşkanlığı kararnameleriyle yapım yetkisi verilmiş olan özel ihtisas işleri hariç talepleri halinde kamu kurum ve kuruluşlarına ait bina ve tesislerin ihtiyaç programlarını hazırlamak, her türlü etüt, proje ve maliyet hesaplarını yapmak veya yaptırmak, onaylamak veya onaylanmasını sağlamak, inşa, güçlendirme, tadil ve esaslı onarımlarını yapmak, yaptırmak ve denetlemek veya denetlenmesini sağlamak,","Yukarıda belirtilen ifade hangi kurumun görevidir ?","Çevre Şehircilik Bakanlığı"],
  [6,"1 sayılı Cumhurbaşkanlığı Kararnamesi","97","Yapı denetimi sistemini oluşturarak 29/6/2001 tarihli ve 4708 sayılı Yapı Denetimi Hakkında Kanun ile Bakanlığa verilen görevleri yapmak ve kamu kurum ve kuruluşları tarafından yapılan veya yaptırılanlar da dâhil olmak üzere yapıların can ve mal emniyeti ile mevzuata ve tekniğine uygunluk bakımından denetimini yapmak veya yaptırmak, tespit edilen aykırılık ve noksanlıkların giderilmesini istemek ve sağlamak; yapılarda enerji verimliliğini artırıcı düzenlemeleri yapmak, buna ilişkin faaliyetleri yönetmek ve izlemek; yapı malzemelerinin denetimine ve uygunluk değerlendirmesine ilişkin iş ve işlemleri yapmak,","Yukarıda belirtilen ifade hangi kurumun görevidir ?","Çevre Şehircilik Bakanlığı"],
  [7,"1 sayılı Cumhurbaşkanlığı Kararnamesi","97","Konut sektörüne ilişkin strateji geliştirme ve programlama iş ve işlemlerini yürütmek, yapı kooperatifçiliğinin gelişmesini sağlayacak tedbirleri almak ve 19/9/2006 tarihli ve 5543 sayılı İskân Kanunu uyarınca Bakanlığa verilen görevleri yapmak,","Yukarıda belirtilen ifade hangi kurumun görevidir ?","Çevre Şehircilik Bakanlığı"],
  [8,"1 sayılı Cumhurbaşkanlığı Kararnamesi","97","Gecekondu, kıyı alanları ve tesisleri ile niteliğinin bozulması nedeniyle orman ve mera dışına çıkarılan alanlar dâhil kentsel ve kırsal alan ve yerleşmelerde yapılacak iyileştirme, yenileme ve dönüşüm uygulamalarında idarelerce uyulacak usul ve esasları belirlemek; Bakanlıkça belirlenen finans ve ticaret merkezleri, fuar ve sergi alanları, eğlence merkezleri, şehirlerin ana giriş düzenlemeleri gibi şehirlerin marka değerini artırmaya ve şehrin gelişmesine katkı sağlayacak özel proje alanlarına dair her tür ve ölçekte etüt, harita, plan, parselasyon planı ve yapı projelerini yapmak, yaptırmak, onaylamak, kamulaştırma, ruhsat ve yapım işlerinin gerçekleştirilmesini sağlamak, yapı kullanma izinlerini vermek ve bu alanlarda kat mülkiyeti kurulmasını temin etmek; 2/3/1984 tarihli ve 2985 sayılı Toplu Konut Kanunu ile 20/7/1966 tarihli ve 775 sayılı Gecekondu Kanunu uyarınca Toplu Konut İdaresi Başkanlığı tarafından yapılan uygulamalara ilişkin her tür ve ölçekte etüt, harita, plan ve parselasyon planlarını yapmak, yaptırmak, onaylamak, ruhsat işlerini gerçekleştirmek, yapı kullanma izinlerini vermek ve bu alanlarda kat mülkiyetinin kurulmasını sağlamak,","Yukarıda belirtilen ifade hangi kurumun görevidir ?","Çevre Şehircilik Bakanlığı"],
  [9,"1 sayılı Cumhurbaşkanlığı Kararnamesi","97","Devletin hüküm ve tasarrufu altında bulunan veya mülkiyeti Hazineye, kamu kurum veya kuruluşlarına veya gerçek kişilere veyahut özel hukuk tüzel kişilerine ait olan taşınmazlar üzerinde kamu veya özel sektör tarafından gerçekleştirilecek olan yatırımlara ilişkin olarak ilgililerince hazırlandığı veya hazırlatıldığı halde yetkili idarece üç ay içinde onaylanmayan etüt, harita, her tür ve ölçekteki çevre düzeni, nazım ve uygulama imar planlarını, parselasyon planlarını ve değişikliklerini ilgililerinin valilikten talep etmesi ve valiliğin Bakanlığa teklifte bulunması üzerine bedeli mukabilinde yapmak, yaptırmak ve onaylamak, başvuru tarihinden itibaren iki ay içinde yetkili idarece verilmemesi halinde bedeli mukabilinde resen yapı ruhsatı ve yapı kullanma izni ile işyeri açma ve çalışma ruhsatını vermek,","Yukarıda belirtilen ifade hangi kurumun görevidir ?","Çevre Şehircilik Bakanlığı"],
  [10,"1 sayılı Cumhurbaşkanlığı Kararnamesi","97","Depreme karşı dayanıksız yapılar ile imar mevzuatına, plan, proje ve eklerine aykırı yapıların ve bunların bulunduğu alanların dönüşüm projelerini ve uygulamalarını yapmak veya yaptırmak,","Yukarıda belirtilen ifade hangi kurumun görevidir ?","Çevre Şehircilik Bakanlığı"],
  [11,"1 sayılı Cumhurbaşkanlığı Kararnamesi","97","Ulusal Coğrafi Bilgi Sisteminin kurulmasına, kullanılmasına ve geliştirilmesine dair iş ve işlemleri yapmak, yaptırmak, mahalli idarelerin planlama, harita, altyapı ve üstyapıya ilişkin faaliyetleri ile ilgili kent bilgi sistemlerinin kurulması, kullanılması ve Ulusal Coğrafi Bilgi Sistemi ile entegre olmasını desteklemek,","Yukarıda belirtilen ifade hangi kurumun görevidir ?","Çevre Şehircilik Bakanlığı"],
  [12,"1 sayılı Cumhurbaşkanlığı Kararnamesi","97","Bakanlığın görev alanına giren konularda mahalli idarelerin idari ve teknik kapasitesinin geliştirilmesi için çalışmalarda bulunmak ve bunlara teknik destek sağlamak","Yukarıda belirtilen ifade hangi kurumun görevidir ?","Çevre Şehircilik Bakanlığı"],
  [13,"1 sayılı Cumhurbaşkanlığı Kararnamesi","97","Bayındırlık ve iskân işleri ile ilgili şartname, tip sözleşme, yıllık rayiç, birim fiyat, birim fiyatlara ait analiz ve tarifleri hazırlamak ve yayımlamak,","Yukarıda belirtilen ifade hangi kurumun görevidir ?","Çevre Şehircilik Bakanlığı"],
  [14,"1 sayılı Cumhurbaşkanlığı Kararnamesi","97","Küresel iklim değişikliği ve bununla ilgili gerekli tedbirlerin alınması için plan ve politikaların belirlenmesi amacıyla çalışmalar yapmak,","Yukarıda belirtilen ifade hangi kurumun görevidir ?","Çevre Şehircilik Bakanlığı"],
  [15,"1 sayılı Cumhurbaşkanlığı Kararnamesi","97","Bakanlığın görev alanına giren konularda uluslararası çalışmaların izlenmesi ve bunlara katkıda bulunulması maksadıyla ulusal düzeyde yapılan hazırlıkları ilgili kuruluşlarla işbirliği halinde yürütmek,","Yukarıda belirtilen ifade hangi kurumun görevidir ?","Çevre Şehircilik Bakanlığı"],
  [16,"1 sayılı Cumhurbaşkanlığı Kararnamesi","97","23/9/1980 tarihli ve 2302 sayılı Atatürk’ün Doğumunun 100 üncü Yılının Kutlanması ve “Atatürk Kültür Merkezi Kurulması” Hakkında Kanunun 3 üncü maddesi ile belirlenen Atatürk Kültür Merkezi alanını iyileştirme, güzelleştirme, yenileme ve ihya etmek amacıyla; Kültür ve Turizm Bakanlığının da görüşü alınarak, bu alan için her tür ve ölçekte etüt, harita, plan, parselasyon planı ile yapı projelerini yapmak, yaptırmak, onaylamak, kamulaştırma ve ruhsatlandırma işlemleri ile diğer iş ve işlemlerin gerçekleştirilmesini sağlamak,","Yukarıda belirtilen ifade hangi kurumun görevidir ?","Çevre Şehircilik Bakanlığı"],
  [17,"1 sayılı Cumhurbaşkanlığı Kararnamesi","97","Mahalli idareleri ve bunların merkezi idare ile olan alaka ve münasebetlerini düzenlemek,","Yukarıda belirtilen ifade hangi kurumun görevidir ?","Çevre Şehircilik Bakanlığı"],
  [18,"1 sayılı Cumhurbaşkanlığı Kararnamesi","97","Kamu mallarına ilişkin politikaları tespit etmek amacıyla çalışma yapmak, Hazinenin özel mülkiyetindeki taşınmazlar ve Devletin hüküm ve tasarrufu altındaki yerlerin edinim, yönetim ve elden çıkarılmasına ilişkin işlemleri yürütmek, kamu idarelerinin taşınmazları ile ilgili kayıt ve yönetim esaslarını belirlemek,","Yukarıda belirtilen ifade hangi kurumun görevidir ?","Çevre Şehircilik Bakanlığı"],
  [19,"1 sayılı Cumhurbaşkanlığı Kararnamesi","97","Kanunlarla ve Cumhurbaşkanlığı kararnameleriyle verilen diğer görevleri yapmak.","Yukarıda belirtilen ifade hangi kurumun görevidir ?","Çevre Şehircilik Bakanlığı"],
  [20,"1 sayılı Cumhurbaşkanlığı Kararnamesi","97","Bakanlık, birinci fıkranın (h) bendindeki iş ve işlemleri tesis etmeden evvel, bu iş ve işlemleri esasen tesise yetkili olan idarelerin görüşlerini ister. İdareler, bu iş ve işlemlerin yapılmama gerekçelerini etraflıca açıklayarak konu hakkındaki görüşlerini en geç onbeş gün içinde Bakanlığa bildirmek zorundadır.","Yukarıda belirtilen ifade hangi kurumun görevidir ?","Çevre Şehircilik Bakanlığı"],
  ["657 Sayılı Devlet Memurları Kanunu"],
  ["2709 Sayılı T.C. Anayasası"],
  ["Atatürk İlkeleri ve İnkilap Tarihi"],
  ["4734 Sayılı Kamu İhale Kanunu"],
  ["4735 Sayılı Kamu İhale Sözleşmeleri Kanunu"],
  ["2872 Sayılı Çevre Kanunu"],
  ["6306 Sayılı Afet Riski Altındaki Alanların Dönüştürülmesi Hakkında Kanun"],
  ["3194 Sayılı İmar Kanunu"],
  ["5393 Sayılı Belediye Kanunu"],
  ["5018 Sayılı Kamu Yönetimi ve Mali Kontrol Kanunu"],
  ["6245 Sayılı Harcırah Kanunu"],
  ["3628 Sayılı Mal Bildiriminde Bulunulması, Rüşvet ve Yolsuzluklarla Mücadele Kanunu"],
  ["Mal Bildiriminde Bulunulması Hakkında Yönetmelik"],
  ["7201 Sayılı Tebligat Kanunu"],
  ["Taşınır Mal Yönetmeliği"],
  ["Resmi Yazışmalarda Uygulanacak Usul ve Esaslar Hakkında Yönetmelik"],
  ["Devlet Memurlarına Verilecek Hastalık Raporları ile Hastalık ve Refakat İznine İlişkin Usul ve Esaslar Hakkında Yönetmelik"],
  ["2946 Sayılı Kamu Konutları Kanunu"],
  ["Kamu Konutları Yönetmeliği"],
];

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

var tiklananKanunIdsi;
var rastgeleCevapSec;
var cevap = ["cevap1","cevap2","cevap3","cevap4"];
var secim;

cevap.sort(function(a,b){return 0.5 - Math.random()});
console.log(cevap);

function tikla(clicked_id){
  if(clicked_id == '0'){
    tiklananKanunIdsi    = Math.floor(Math.random() * 21);
    document.getElementById('icerikKutusuYazisi').innerHTML = anaDizi[tiklananKanunIdsi][3];
    document.getElementById('soruKutusuYazisi').innerHTML = anaDizi[tiklananKanunIdsi][4];

    cevap[0] = anaDizi[tiklananKanunIdsi][5];
    console.log(cevap[0]);
    // console.log(delete anaDizi[tiklananKanunIdsi][5]);

    ikinciSecilen = Math.floor(Math.random() * 21);
    cevap[1] = anaDizi[ikinciSecilen][5];
    console.log(cevap[1]);
    // console.log(delete anaDizi[ikinciSecilen][5]);

    ucuncuSecilen = Math.floor(Math.random() * 21);
    cevap[2] = anaDizi[ucuncuSecilen][5];
    console.log(cevap[2]);
    // console.log(delete anaDizi[ikinciSecilen][5]);

    dorduncuSecilen = Math.floor(Math.random() * 21);
    cevap[3] = anaDizi[dorduncuSecilen][5];
    console.log(cevap[3]);
    // console.log(delete anaDizi[dorduncuSecilen][5]);

    document.getElementById('Cevap_A').innerHTML = cevap[0];
    document.getElementById('Cevap_B').innerHTML = cevap[1];
    document.getElementById('Cevap_C').innerHTML = cevap[2];
    document.getElementById('Cevap_D').innerHTML = cevap[3];
    
    function radioSecim(){
      var sec = getElementsByname('sec');
      if(sec[0].checked){
        secim = sec[0].value;
      }
      else if(sec[1].checked){
        secim = sec[1].value;
      }
      else if(sec[2].checked){
        secim = sec[2].value;
      }
      else if(sec[3].checked){
        secim = sec[3].value;
      }
      document.getElementById('test').innerHTML = secim;
    }
  }
}
