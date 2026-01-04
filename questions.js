const allQuestions = [
    {
        "question": "Mobil bir cihaz, baz istasyonundan uzaklaştıkça sinyal kalitesinin düştüğü (SNR'ın azaldığı) gözlemleniyor. Sistemin bağlantıyı koparmadan iletişime devam edebilmesi için uygulanan \"Adaptive Modulation and Coding (AMC)\" mekanizması aşağıdakilerden hangisini yapar?",
        "options": [
            "Modülasyon seviyesini düşürerek (örneğin 16-QAM'den BPSK'ya) hata payını azaltır.",
            "Taşıyıcı frekansını artırarak sinyalin daha uzağa gitmesini sağlar.",
            "Sembol hızını artırarak zayıf sinyaldeki kayıpları telafi eder.",
            "Faz kaydırmalı anahtarlamadan (PSK) genlik kaydırmalı anahtarlamaya (ASK) geçiş yapar."
        ],
        "correctAnswer": 0
    },
    {
        "question": "Bir kablosuz yerel alan ağında (WLAN), iki istasyonun birbirini görmediği ancak aynı Access Point (AP) ile iletişim kurduğu bir senaryoda \"Hidden Node Problem\" oluşmaktadır. Bu problemin yarattığı paket çarpışmalarını minimize etmek için WMAC katmanında hangi mekanizmanın aktif edilmesi en mantıklıdır?",
        "options": [
            "DIFS süresini kısaltmak.",
            "RTS/CTS (Request to Send / Clear to Send) el sıkışmasını kullanmak.",
            "Beacon sinyallerinin yayın aralığını artırmak.",
            "SIFS süresini, paket önceliğini artırmak için uzatmak."
        ],
        "correctAnswer": 1
    },
    {
        "question": "Bir kablosuz sistemde SNR (Sinyal-Gürültü Oranı) değeri sabit tutularak modülasyon tekniği BPSK'den 16-QAM'e değiştirilmektedir. Bant genişliği sabit kalacak şekilde sistemin veri hızı 4 kat artırılmak istenmektedir. Bu durumda aşağıdaki ifadelerden hangisi/hangileri DOĞRUDUR?",
        "options": [
            "Yalnız I",
            "I ve II",
            "I, II ve III",
            "II, III ve IV",
            "I, II, III ve IV"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Bir mobil istasyonun (örneğin bir laptop), mevcut Erişim Noktası (AP) ile bağlantısını koparmadan, aynı ağdaki daha güçlü sinyal veren başka bir AP'ye geçiş yapması işlemine ne ad verilir?",
        "options": [
            "Authentication (Kimlik Doğrulama)",
            "Reassociation (Yeniden İlişkilendirme)",
            "Association (İlişkilendirme)",
            "Fragmentation (Parçalama)",
            "Disassociation (İlişki Kesme)"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Devre Anahtarlama (Circuit Switching) ile Paket Anahtarlama (Packet Switching) karşılaştırıldığında, Devre Anahtarlamanın verimlilik açısından en büyük dezavantajı nedir?",
        "options": [
            "İletişim sırasında sessizlik olsa bile hattın rezerve kalması",
            "Yönlendirme işleminin çok karmaşık olması",
            "Band genişliğinin sürekli değişmesi",
            "Paketlerin kaybolma ihtimalinin yüksek olması",
            "Ses iletimi için uygun olmaması"
        ],
        "correctAnswer": 0
    },
    {
        "question": "Bir kablosuz haberleşme sistemi aşağıdaki özelliklere sahiptir:",
        "options": [
            "FDD + FDM",
            "TDD + TDM",
            "FDD + CDM",
            "TDD + OFDM",
            "Full-Duplex + FDMA"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Aşağıda duplexing ve multiplexing teknikleriyle ilgili verilen ifadelerden hangisi yanlıştır?",
        "options": [
            "FDD kullanılan sistemlerde uplink ve downlink sinyallerinin aynı anda iletilebilmesi, farklı frekans bantlarının kullanılmasına bağlıdır.",
            "TDD sistemleri, asimetrik veri trafiğinde uplink ve downlink zaman dilimlerini dinamik olarak ayarlayabildiği için bant genişliğini daha verimli kullanabilir.",
            "FDM’de guard band kullanımı, komşu kanal girişimini azaltır ancak spektral verimliliği düşürür.",
            "CDM sistemlerinde kullanıcılar aynı anda ve aynı frekans bandında iletim yapabildiğinden, zaman senkronizasyonu zorunludur.",
            "OFDM, klasik FDM’ye göre alt taşıyıcılar arasında matematiksel ortogonallik sağlayarak guard band ihtiyacını ortadan kaldırır."
        ],
        "correctAnswer": 3
    },
    {
        "question": "Bir kablosuz iletişim sisteminde bant genişliği sınırlıdır ancak veri iletim hızının artırılması istenmektedir. Bu amaçla modülasyon seviyesi QPSK’dan 64-QAM’e yükseltilmiştir. Bu değişikliğin sonucunda aşağıdakilerden hangisinin gerçekleşmesi beklenemez?",
        "options": [
            "Sembol başına taşınan bit sayısının artması.",
            "Sinyalin gürültüye karşı hassasiyetinin (BER - Bit Error Rate) artması.",
            "Aynı iletim gücünde, alıcıdaki kapsama alanının (menzil) daralması.",
            "Sinyalin bant genişliğinin modülasyon seviyesine oranla genişlemesi."
        ],
        "correctAnswer": 3
    },
    {
        "question": "IEEE 802.11 ağlarında CSMA/CA mekanizması kullanılırken neden CSMA/CD mekanizması tercih edilmez?",
        "options": [
            "Kablosuz kartların aynı anda hem gönderim yapıp hem de ortamı dinleyebilecek (Full-Duplex) yetenekte olmaması/maliyetli olması.",
            "CSMA/CA'nın CSMA/CD'ye göre daha yüksek throughput (iş üretim miktarı) sağlaması.",
            "Kablosuz ortamda sinyal zayıflamasının çok az olması nedeniyle çarpışmaların tespit edilememesi.",
            "Gizli düğüm probleminin CSMA/CD ile tamamen çözülebilmesi."
        ],
        "correctAnswer": 0
    },
    {
        "question": "Polar NRZ hat kodlama tekniğinde, mantıksal 1 ve 0 bitlerini temsil etmek için kullanılan voltaj seviyeleri aşağıdakilerden hangisidir?",
        "options": [
            "Pozitif ve 0 Volt",
            "Pozitif ve Negatif Volt",
            "Sadece Pozitif Volt",
            "Sadece 0 Volt",
            "Negatif ve Sıfır Volt"
        ],
        "correctAnswer": 1
    },
    {
        "question": "QPSK modülasyonunda, taşıyıcı sinyalin her bir faz değişimi ile kaç adet bit taşınabilir?",
        "options": [
            "1",
            "4",
            "2",
            "16",
            "8"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Bir sistem 8-PSK kullanmaktadır. Sembol hızı (baud rate / signal rate) S = 1500 baud’dur.",
        "options": [
            "1500 bps",
            "3000 bps",
            "4500 bps",
            "6000 bps",
            "12000 bps"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Bir periyodik sinyal beş sinüs bileşenine ayrıştırılıyor. Frekanslar: 100 Hz, 200 Hz, 500 Hz, 2000 Hz, 3000 Hz. Bu sinyalin bant genişliği (bandwidth) B kaçtır?",
        "options": [
            "2900 Hz",
            "2500 Hz",
            "3000 Hz",
            "2000 Hz",
            "3100 Hz"
        ],
        "correctAnswer": 0
    },
    {
        "question": "Dijital sinyallerin (1'ler ve 0'lar) fiziksel iletim ortamlarında doğrudan gönderilememesinin temel sebebi aşağıdakilerden hangisidir?",
        "options": [
            "Sinyallerin çok yüksek voltajlı olması",
            "İletim ortamının \"Alçak Geçiren Filtre\" gibi davranarak yüksek frekanslı bileşenleri yok etmesi",
            "Sinyallerin ortamdaki oksijenle tepkimeye girmesi",
            "Dijital verinin bir taşıyıcı dalgaya ihtiyaç duymadan çok hızlı hareket etmesi",
            "Alıcıların sadece analog sinyalleri okumak üzere tasarlanması"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Faz Modülasyonu (PM) ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
        "options": [
            "Bilgi, sinyalin genlik miktarındaki değişimlerde saklanır.",
            "Saniye kolunun dönüş hızı sürekli olarak artırılır veya azaltılır.",
            "Taşıyıcı sinyalin anlık olarak ileri itilmesi veya geri çekilmesiyle bilgi iletilir.",
            "PM sinyallerinin genliği, iletilen veriye göre sürekli değişkenlik gösterir.",
            "Sadece kablolu iletim ortamlarında kullanılabilen bir yöntemdir."
        ],
        "correctAnswer": 2
    },
    {
        "question": "Bir kablosuz sistemde downlink trafiği uplink’e göre çok daha fazladır. Aynı frekans bandı kullanılıyor ve sistem zaman aralıklarıyla çalışıyor. Bu sistem için en uygun duplexing yöntemi hangisidir?",
        "options": [
            "FDD",
            "TDD",
            "Full Duplex (iki ayrı fiziksel kanal ile)",
            "Simplex"
        ],
        "correctAnswer": 1
    },
    {
        "question": "İstasyonun ortamdaki diğer paketlerin başlık bilgilerini okuyarak hattın ne kadar süre dolu olacağını öğrendiği ve bu süre boyunca hattı \"meşgul\" varsayarak veri göndermeyi ertelediği mekanizma hangisidir?",
        "options": [
            "DIFS",
            "Backoff Süresi",
            "SIFS",
            "NAV",
            "ACK Timeout"
        ],
        "correctAnswer": 3
    },
    {
        "question": "5G ağlarında kullanılan Millimeter Wave (Milimetre Dalga) teknolojisi, 30 GHz ile 300 GHz arasındaki yüksek frekans bantlarını ifade eder. Bu teknoloji çok yüksek veri hızlarına imkan tanısa da fiziksel yayılım açısından bazı sınırlamalara sahiptir.",
        "options": [
            "Enerji tasarrufu için baz istasyonu sayısını azaltmak",
            "Düşük frekanslı 4G spektrumuna tamamen geri dönmek",
            "Yoğun alanlarda Small Cell (Küçük Hücre) birimlerini sıklaştırarak kapsama alanı sağlamak",
            "Verileri doğrudan merkezi bir bulut sunucusunda depolamak",
            "Sadece kırsal bölgelerde geniş alan kapsama teknolojisi olarak kullanmak"
        ],
        "correctAnswer": 2
    },
    {
        "question": "5G'de Massive MIMO (Çoklu Giriş Çoklu Çıkış), bir baz istasyonunda yüzlerce antenin aynı anda kullanılmasına olanak tanır. Bu teknoloji, sistem kapasitesini artırmak için Beamforming (Hüzmeleme) ile birlikte çalışır.",
        "options": [
            "Sinyali her yöne eşit dağıtarak genel kapsama alanını genişletmek",
            "Sinyali belirli bir kullanıcıya doğru odaklayarak enerji verimliliğini artırmak ve girişimi (interference) azaltmak",
            "Veri işleme yükünü tamamen kullanıcı cihazına (UE) aktarmak",
            "Kablosuz sinyalleri fiber optik kablolara dönüştürmek",
            "Kullanıcıların konum verilerini gizlemek için sinyal yönünü sürekli değiştirmek"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Bir IEEE 802.11 kablosuz ağında bir istasyon veri gönderdikten sonra ACK çerçevesini alamazsa, aşağıdaki işlemlerden hangisini gerçekleştirir?",
        "options": [
            "Veri iletiminin başarılı olduğunu varsayar ve yeni veriye geçer",
            "Ortamı dinlemeden rastgele bir istasyona veri gönderir",
            "Çarpışma algılandığını varsayarak backoff süresini artırır ve yeniden gönderim yapar",
            "RTS/CTS mekanizmasını devre dışı bırakır",
            "Erişim noktasına hata raporu gönderip bağlantıyı keser"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Aşağıdakilerden hangisi birden fazla BSS’in bir araya gelmesiyle oluşur ve kullanıcıların Access Point’ler arasında kesintisiz dolaşım (roaming) yapmasını sağlar?",
        "options": [
            "BSS",
            "BSA",
            "DS",
            "ESS",
            "Portal"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Aşağıdaki senaryolardan hangisinde, 5G ağı yüksek veri hızları sunmasına rağmen bağlantı “kullanıcı deneyimi” açısından başarısız olur ve bunun temel nedeni doğrudan 5G mimarisinin eksik bir bileşenine dayanır?",
        "options": [
            "Yoğun bir stadyumda mmWave kullanılması ve small cell sayısının artırılmaması",
            "Şehir merkezinde Massive MIMO kullanılması ancak Beamforming uygulanmaması",
            "Kırsal bir bölgede mid-band 5G kullanılması ve teorik hızlara ulaşılamaması",
            "Gerçek zamanlı uzaktan cerrahi uygulamasında MEC bulunmayan bir 5G altyapısı kullanılması",
            "Yoğun IoT ortamında NOMA uygulanması ve kullanıcıların güç seviyeleriyle ayrılması"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Aşağıdaki ifadelerden hangisi, 5G mimarisinde kullanılan teknolojilerin rolleri açısından ilk bakışta doğru gibi görünmesine rağmen kavramsal olarak yanlıştır?",
        "options": [
            "Small Cell mimarisi, milimeter wave sinyallerinin kısa menzil problemini şehir ölçeğinde çözmek için kullanılır.",
            "Massive MIMO ve Beamforming birlikte kullanıldığında, aynı frekans bandında kullanıcılar uzaysal olarak ayrılabilir.",
            "NOMA, Massive MIMO’nun yetersiz kaldığı durumlarda devreye girerek aynı uzaysal kaynağı güç seviyeleri üzerinden paylaşılabilir hâle getirir.",
            "MEC, ağın sunduğu veri hızını artırarak yüksek bant genişliği gerektiren uygulamaların performansını yükseltir.",
            "Milimeter wave bantları, daha küçük dalga boyları sayesinde çok sayıda antenin aynı fiziksel alanda kullanılmasını mümkün kılar."
        ],
        "correctAnswer": 3
    },
    {
        "question": "Bir kablosuz ağda Access Point (AP), ortam erişiminde standart istasyonlara (STA) göre neden daha yüksek önceliğe sahiptir ve bu teknik olarak hangi mekanizma ile sağlanır?",
        "options": [
            "AP'nin daha yüksek iletim gücüne sahip olması sayesinde.",
            "AP'nin her zaman lisanslı frekans bandını kullanmasıyla.",
            "AP'nin aynı anda birden fazla istasyona veri gönderebilen Full-Duplex yapısıyla.",
            "AP'nin PIFS bekleme süresinin, standart istasyonların kullandığı DIFS süresinden daha kısa olmasıyla."
        ],
        "correctAnswer": 3
    },
    {
        "question": "Hem PCF hem de DCF mekanizmalarının aynı anda aktif olduğu bir senaryoda, PCF yeteneği olmayan (sadece DCF destekleyen) bir istasyonun 'çekişmesiz dönemde' (contention-free period) veri göndererek karmaşaya yol açması nasıl engellenir?",
        "options": [
            "AP, bu istasyonların enerjisini geçici olarak keserek.",
            "İstasyonun otomatik olarak CSMA/CD moduna geçirilmesiyle.",
            "İstasyonun Beacon çerçevesini duyduğunda kendi NAV sayacını kurması ve 'bekle ve dur' moduna geçmesiyle.",
            "İstasyonun fiziksel katmanını (PHY) tamamen devre dışı bırakarak."
        ],
        "correctAnswer": 2
    },
    {
        "question": "802.11 MAC katmanında büyük bir veri çerçevesinin daha küçük parçalara bölünerek (fragmentation) gönderilmesinin temel mantığı aşağıdakilerden hangisidir?",
        "options": [
            "Fiziksel katman bant genişliğini 2 Mbps'den 11 Mbps'ye çıkarmak.",
            "Encryption (Şifreleme) işlemini daha güvenli hale getirmek.",
            "Daha yüksek veri iletim hızlarına (Mbps) ulaşmak.",
            "Ortam gürültülü olduğunda, küçük bir parçanın bozulması durumunda tüm büyük veriyi değil sadece o parçayı tekrar göndererek başarı şansını artırmak."
        ],
        "correctAnswer": 3
    },
    {
        "question": "Hidden Terminal (Gizli Terminal) problemi yaşanan bir ağda, RTS (Request To Send) ve CTS (Clear To Send) paketleri arasındaki ilişki ve ortamın rezerve edilmesi süreci hakkında hangisi doğrudur?",
        "options": [
            "Sadece RTS paketi alan istasyonlar ortamın meşgul olduğunu anlar.",
            "CTS paketini duyan tüm istasyonlar, bu paketteki süre boyunca NAV sayaçlarını güncelleyerek ortamın rezerve edildiğini kabul eder.",
            "RTS ve CTS paketleri arasında DIFS süresi kadar boşluk bırakılmalıdır.",
            "CTS paketi, verinin başarılı bir şekilde ulaştığını teyit eden pakettir."
        ],
        "correctAnswer": 1
    },
    {
        "question": "Aşağıdakilerden hangisi half duplex haberleşme sistemleri için doğrudur?",
        "options": [
            "Aynı anda veri gönderme ve alma mümkündür",
            "Gönderme ve alma farklı frekans bantlarında gerçekleşir",
            "İletim tek yönlüdür",
            "Aynı anda çift yönlü iletim yapılamaz",
            "Çakışma (collision) riski yoktur"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Frequency Division Duplexing (FDD) yönteminde aşağıdakilerden hangisi zorunludur?",
        "options": [
            "Gönderim ve alımın aynı zaman diliminde yapılması",
            "Zaman senkronizasyonunun çok hassas olması",
            "Uplink ve downlink için farklı frekans bantlarının ayrılması",
            "Guard interval kullanılması",
            "Alt taşıyıcıların ortogonal olması"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Time Division Duplexing (TDD) kullanan bir sistem için aşağıdakilerden hangisi doğrudur?",
        "options": [
            "Uplink ve downlink aynı anda gerçekleşir",
            "Sabit ve simetrik trafik için uygundur",
            "Frekans spektrumu verimsiz kullanılır",
            "Zamanlama ve senkronizasyon kritik öneme sahiptir",
            "Duplexer donanımına ihtiyaç vardır"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Aşağıdakilerden hangisi Frequency Division Multiplexing (FDM) için doğrudur?",
        "options": [
            "Kullanıcılar kanalı farklı zaman dilimlerinde paylaşır",
            "Tüm kullanıcılar aynı frekansı kullanır",
            "Kanal bant genişliği alt bantlara bölünür",
            "Zaman senkronizasyonu zorunludur",
            "Gecikme süresi minimumdur"
        ],
        "correctAnswer": 2
    },
    {
        "question": "OFDM sistemlerinde Cyclic Prefix eklenmesinin temel amacı aşağıdakilerden hangisidir?",
        "options": [
            "Veri hızını artırmak",
            "Frekans seçici sönümlemeyi ortadan kaldırmak",
            "Inter Symbol Interference (ISI) etkisini azaltmak",
            "Alt taşıyıcı sayısını artırmak",
            "Gürültü gücünü düşürmek"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Aşağıdaki ifadelerden hangisi Hidden Node problemine en uygun açıklamadır?",
        "options": [
            "İki istasyon birbirini duyduğu hâlde aynı kanalı gereksiz yere boş bekler",
            "İki istasyon birbirini duyamadığı için aynı anda iletim yapıp alıcıda çarpışmaya neden olur",
            "AP’nin beacon çerçeveleri kaybolduğu için istemciler bağlantıyı koparır",
            "Kanal gürültüsü arttığı için modülasyon otomatik düşer",
            "Aynı SSID’li iki farklı ağ çakıştığı için kimlik doğrulama başarısız olur"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Bir sembolün 3 bit taşıdığı (örneğin 000, 001... 111) ve takımyıldız diyagramında noktaların birbirine daha yakın olduğu 8-PSK modülasyonunda, ardışık semboller arasındaki faz farkı kaç derecedir?",
        "options": [
            "180°",
            "90°",
            "60°",
            "45°",
            "30°"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Bir FM sinyalinde bilgi (mesaj) işareti arttıkça aşağıdakilerden hangisi doğrudan değişir?",
        "options": [
            "Taşıyıcının genliği sabit kalır, fazı sabit kalır",
            "Taşıyıcının anlık frekansı değişir, genliği idealde sabit kalır",
            "Taşıyıcının genliği değişir, frekansı sabit kalır",
            "Taşıyıcının bant genişliği sıfıra yaklaşır",
            "Taşıyıcının periyodu değişir ama anlık frekansı değişmez"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Aşağıdakilerden hangisi frekans modülasyonunun avantajlarından biridir?",
        "options": [
            "Bant genişliğinin dar olması",
            "Gürültüye karşı daha dayanıklı olması",
            "Verici devresinin çok basit olması",
            "Düşük güçle uzun mesafe iletim sağlaması",
            "Demodülasyonun AM’ye göre daha zor olması"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Ahmet, yeni aldığı kablosuz yönlendiriciyi (router) kurarken telefonunun ağı listede kolayca bulabilmesi için ağa \"Ev_Internetim\" ismini verir. Kablosuz ağ terminolojisinde, Ahmet'in el ile belirlediği ve kullanıcıların gördüğü bu \"ağ ismi\" aşağıdakilerden hangisidir?",
        "options": [
            "BSSID",
            "SSID",
            "MAC Adresi",
            "Varsayılan Geçit (Gateway)",
            "Alt Ağ Maskesi (Subnet Mask)"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Can, evindeki Wi-Fi ağını kullanırken modern yönlendiricilerin hem 2.4 GHz hem de 5 GHz bandında yayın yaptığını görür. Yan odada ve duvar arkasında 2.4 GHz sinyalinin, 5 GHz'e göre çok daha güçlü çektiğini fark eder.",
        "options": [
            "2.4 GHz sinyallerinin daha yüksek enerji taşıması",
            "2.4 GHz sinyallerinin daha kısa dalga boyuna sahip olması",
            "2.4 GHz sinyallerinin daha uzun dalga boyuna sahip olması",
            "2.4 GHz bandında daha fazla kanal bulunması",
            "2.4 GHz bandının daha yüksek veri iletim hızı sunması"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Bir sistemde saniyede gönderilen sembol sayısı (Baud Rate) sabit tutulursa; BPSK yerine QPSK modülasyonuna geçildiğinde veri aktarım hızı (bit rate) nasıl değişir?",
        "options": [
            "Değişmez, aynı kalır.",
            "Yarıya düşer.",
            "2 katına çıkar.",
            "4 katına çıkar.",
            "Karekök 2 katı kadar artar."
        ],
        "correctAnswer": 2
    },
    {
        "question": "Bir takımyıldız diyagramında, merkeze olan uzaklık (yarıçap) ve yatay eksenle yapılan açı sırasıyla sinyalin hangi özelliklerini temsil eder?",
        "options": [
            "Açı: Genlik, Uzaklık: Frekans",
            "Açı: Frekans, Uzaklık: Faz",
            "Açı: Faz, Uzaklık: Genlik (Amplitude)",
            "Açı: Bit hızı, Uzaklık: Bant genişliği",
            "Açı: Gürültü, Uzaklık: Veri"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Bir dijital iletim sisteminde veri hızı (N) 8000 bps ve sinyal hızı (S) 1000 baud olarak ölçülmüştür. Bu iletim hattında kullanılan modülasyon tekniğinin sahip olması gereken minimum sinyal seviyesi (L) kaçtır?",
        "options": [
            "16",
            "64",
            "128",
            "256",
            "512"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Unipolar NRZ ile Polar NRZ hat kodlama teknikleri karşılaştırıldığında, Polar NRZ'yi ayırt eden temel elektriksel özellik nedir?",
        "options": [
            "Sadece pozitif voltaj kullanılması.",
            "\"0\" bitinin 0 Volt ile temsil edilmesi.",
            "Voltaj seviyelerinin hem pozitif hem de negatif (+V ve -V) değerler alması.",
            "Saat sinyali için ayrı bir hat gerektirmesi.",
            "Veri hızının daha düşük olması."
        ],
        "correctAnswer": 2
    },
    {
        "question": "Aşağıdaki modülasyon türlerinden hangisi, sinyal genliğinin sabit kalması nedeniyle lineer olmayan (non-linear) güç yükselticilerinde bozulmaya karşı en dirençlidir?",
        "options": [
            "ASK (Amplitude Shift Keying)",
            "QAM (Quadrature Amplitude Modulation)",
            "FSK (Frequency Shift Keying)",
            "16-APSK",
            "OOK (On-Off Keying)"
        ],
        "correctAnswer": 2
    },
    {
        "question": "DSSS (2.4 GHz) yapısında kanalların yerleşimi ve genişliği ile ilgili teknik veriler dikkate alındığında, aşağıdakilerden hangisi doğrudur?",
        "options": [
            "2.4 GHz bandı her biri 5 MHz genişliğinde kanallara bölünmüştür.",
            "Bitişik iki kanal (örneğin Kanal 1 ve Kanal 2) arasında frekans boşluğu yoktur.",
            "Her bir sabit frekanslı kanalın bant genişliği 22 MHz'dir.",
            "Tüm kanallar (1'den 14'e kadar) dünya genelinde standart olarak kullanılabilir.",
            "Çakışmayan kanallar kullanıldığında kanal genişliği 33 MHz'e çıkar."
        ],
        "correctAnswer": 2
    },
    {
        "question": "Kablosuz ağlarda spektral verimlilik açısından FDM (Frequency Division Multiplexing) ile OFDM arasındaki temel farkı en iyi açıklayan ifade aşağıdakilerden hangisidir?",
        "options": [
            "OFDM'de verimliliği artırmak için zaman dilimleri kullanılırken, FDM'de kodlama teknikleri kullanılır.",
            "FDM'de kanallar birbirine dik olduğu için koruma bantlarına ihtiyaç duyulmaz, bu da verimliliği düşürür.",
            "FDM sistemi sadece dijital sinyallerle çalışırken, OFDM analog sinyallerle çalıştığı için daha verimlidir.",
            "OFDM'de alt taşıyıcı sinyaller matematiksel olarak birbirine dik olduğu için üst üste bindirilebilir ve koruma bantlarına ihtiyaç duyulmadan bant genişliği daha verimli kullanılır."
        ],
        "correctAnswer": 3
    },
    {
        "question": "Bir alıcı sisteminde Demultiplexing işlemi gerçekleştirilirken, FDM ve TDM sistemlerinin kullandığı ayırma yöntemleri arasındaki fark nedir?",
        "options": [
            "FDM sisteminde DeMUX işlemi bir anahtar mantığıyla yapılırken, TDM sisteminde bant geçiren filtreler kullanılır.",
            "TDM sisteminde Demultiplexing işlemi yapılmaz, çünkü veriler zaten sırasıyla gelir.",
            "FDM'de DeMUX işlemi bir Bant Geçiren Filtre dizisi ile yapılırken, TDM'de yüksek senkronizasyonlu bir anahtar ile doğru zaman diliminin yönlendirilmesiyle yapılır.",
            "Her iki sistem de DeMUX işlemi için yüksek işlem gücü gerektiren matematiksel kod çözücüler kullanır."
        ],
        "correctAnswer": 2
    },
    {
        "question": "İnternet kullanım alışkanlıkları düşünüldüğünde, kullanıcıların veri indirme (downlink) trafiğinin veri yükleme (uplink) trafiğinden çok daha yoğun olduğu asimetrik bir veri akışı söz konusudur. Bu senaryoda, spektral verimlilik açısından FDD (Frequency Division Duplexing) yerine TDD (Time Division Duplexing) yönteminin tercih edilmesinin temel teknik nedeni aşağıdakilerden hangisidir?",
        "options": [
            "TDD sistemlerinde koruma bantlarına (guard bands) ihtiyaç duyulmaması spektrumun tamamının kullanılmasını sağlar.",
            "TDD yönteminde gönderim ve alım için iki ayrı frekans kanalı kullanılması, bant genişliğinin daha stabil olmasını sağlar.",
            "TDD, zaman dilimlerini (time slots) ihtiyaca göre dinamik olarak (örneğin %80 indirme, %20 yükleme) paylaştırabilirken; FDD'de bant genişliği sabit ve değişmezdir.",
            "FDD yöntemi sadece analog sinyallerle çalışabilirken TDD'nin dijital modülasyon tekniklerini kullanması veri hızını artırır."
        ],
        "correctAnswer": 2
    },
    {
        "question": "Zaman Bölmeli Çoğullama (TDM - Time Division Multiplexing) kullanan bir iletişim sisteminde gönderici ve alıcı arasındaki senkronizasyonun bozulması veya yeterince hassas olmaması durumunda karşılaşılacak en kritik problem nedir?",
        "options": [
            "Bir kullanıcıya ait veri paketi, yanlışlıkla komşu zaman dilimindeki başka bir kullanıcının verisiyle çakışır veya ona aitmiş gibi okunur.",
            "Sistem otomatik olarak analog iletime geçer ve veri hızı düşer.",
            "Sistemin toplam bant genişliği kapasitesi yarıya düşer.",
            "Frekanslar arası girişim (Inter-Symbol Interference) artar ve sinyal gücü zayıflar."
        ],
        "correctAnswer": 0
    },
    {
        "question": "Aşağıdaki cümlelerden hangisi FM için doğrudur?",
        "options": [
            "1,3",
            "2,4,5",
            "1,3,5",
            "2,4",
            "Hepsi"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Aynı taşıyıcı gücü kullanıldığında, FM'nin AM'ye göre en önemli avantajı aşağıdakilerden hangisidir?",
        "options": [
            "Daha az bant genişliği kullanması",
            "Gürültüye (özellikle impuls gürültüsüne) karşı çok daha iyi dayanıklılık → daha yüksek SNR",
            "Daha basit demodülatör devresi gerektirmesi",
            "Taşıyıcı sinyalin genliğinin hiç değişmemesi",
            "Çok daha düşük frekans sapması (deviation) göstermesi"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Aşağıdakilerden hangisi sayısal modülasyonun avantajlarından biri değildir?",
        "options": [
            "Daha yüksek veri hızı",
            "Kanal bozulmalarına karşı daha dayanıklı olması",
            "Şifrelemenin daha zor olması",
            "Çoklu erişime uygun olması",
            "İleri kodlama tekniklerinin uygulanabilmesi"
        ],
        "correctAnswer": 2
    },
    {
        "question": "\"Line Coding\" çeşitlerinden hangisinde, sinyal bir bit süresinin ortasında mutlaka sıfır (0) seviyesine geri döner?",
        "options": [
            "Unipolar NRZ",
            "Polar NRZ",
            "Manchester",
            "Bipolar AMI",
            "Polar RZ"
        ],
        "correctAnswer": 4
    },
    {
        "question": "Polar NRZ line coding için aşağıdakilerden hangisi doğrudur?",
        "options": [
            "“0” ve “1” aynı seviyede gösterilir",
            "Sinyal sadece pozitif değer alır",
            "Bit değeri değişse bile seviye değişmeyebilir",
            "Her bit mutlaka sıfırdan geçer",
            "Genlik sürekli değişir"
        ],
        "correctAnswer": 2
    },
    {
        "question": "QAM (Quadrature Amplitude Modulation) tekniği, verimliliği artırmak amacıyla hangi iki temel modülasyon türünün bileşenlerini birleştirerek tek bir sinyal yapısı oluşturur?",
        "options": [
            "ASK VE FSK",
            "FSK VE PSK",
            "PSK VE QPSK",
            "ASK VE PSK",
            "FSK VE QPSK"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Aşağıdaki ifadelerden hangisi yanlıştır?",
        "options": [
            "AM'de taşıyıcı dalganın genliği, bilgi sinyalinin anlık genliğine göre değişir.",
            "FM'de taşıyıcı dalganın frekansı, bilgi sinyalinin anlık genliğine göre değişir.",
            "PM'de taşıyıcı dalganın fazı, bilgi sinyalinin anlık genliğine göre değişir.",
            "FM ve PM sinyallerinin zarfı (envelope) sabittir → sabit zarflı sinyaller güç amplifikatörlerinde daha verimlidir.",
            "AM sinyallerinde genlik değiştiği için doğrusal güç amplifikatörü kullanmak zorunlu değildir."
        ],
        "correctAnswer": 4
    },
    {
        "question": "\"Modülasyon, neden mükemmel bir sinüs dalgasının (carrier) istenmesi gerektiğini\" açıklayan en doğru ifade hangisidir?",
        "options": [
            "Mükemmel olmayan sinüs dalgasında harmonikler oluşur ve bu harmonikler bilgi sinyalini bozar.",
            "Bilgi sinyali küçük değişiklikler (tiny modifications) ile taşıyıcıya bindirilir; taşıyıcıda önceden var olan bozulmalar demodülasyon sırasında kaybolabilir / ayırt edilemeyebilir.",
            "Mükemmel sinüs dalgası daha az güç tüketir.",
            "Sadece mükemmel sinüs dalgası Fourier dönüşümünde tek frekans içerir.",
            "Demodülatör sadece mükemmel sinüs dalgasını tanıyabilir."
        ],
        "correctAnswer": 1
    },
    {
        "question": "Antenler MHZ ve GHZ frekanslarında en verimli olarak çalışır, bunun sebebi λ = cf formul ile açıklanabilir. Bu formule göre aşağıdakilerden hangisi söylenebilir?",
        "options": [
            "Frekans küçükse dalga boyu büyüktür.",
            "Antenin uzunluğu dalga boyunun λ/2 kadardır.",
            "Frekans arttıkça dalga boyu büyür.",
            "Dalga boyu yalnızca sinyalin genliğine bağlıdır."
        ],
        "correctAnswer": 0
    },
    {
        "question": "Frekans Modülasyonu (FM) ile ilgili aşağıdaki ifadelerden hangisi doğru değildir?",
        "options": [
            "Bilgi iletmek için taşıyıcı sinyalin frekansı değiştirilir.",
            "Genlikteki değişikliklere (gürültü, parazit vb.) karşı nispeten duyarsızdır.",
            "Konuşma ve müziğin yüksek kalitede iletimi için uygundur.",
            "Diğer modülasyon tekniklerine göre daha dar bant genişliği gerektirir."
        ],
        "correctAnswer": 3
    },
    {
        "question": "Aşağıdakilerden hangisi Modülasyon Performans Kriteri değildir?",
        "options": [
            "Spektral Verimlilik",
            "Gürültü Dayanıklılığı",
            "Güç Verimliliği",
            "Anten Boyutu"
        ],
        "correctAnswer": 3
    },
    {
        "question": "I.Anten Boyutu ve Dalga boyu uygunluğu",
        "options": [
            "I ve III",
            "I, II ve III",
            "III ve IV",
            "I, II, III ve IV",
            "I ve II"
        ],
        "correctAnswer": 3
    },
    {
        "question": "IEEE 802.11 (Kablosuz LAN) standartlarında, kablolu ağlarda kullanılan CSMA/CD (Collision Detection) yerine CSMA/CA (Collision Avoidance) mekanizmasının tercih edilmesinin temel teknik nedeni ve bu erişim yönteminde tanımlanan SIFS (Short Interframe Space) ile DIFS (DCF Interframe Space) sürelerinin işlevsel farkı aşağıdakilerden hangisinde en doğru şekilde açıklanmıştır?",
        "options": [
            "Kablosuz alıcı-vericiler (transceiver), iletim yaparken aynı anda kanalı dinleyip çarpışmayı tespit edemezler (half-duplex kısıtı); bu yüzden çarpışmayı önlemek esastır. SIFS'in DIFS'ten kısa olması, ACK gibi kontrol paketlerine kanalda öncelik tanıyarak iletişimin bütünlüğünü sağlar.",
            "CSMA/CD sadece fiber optik kablolarda çalışır. SIFS, yüksek öncelikli video trafiği için kullanılırken; DIFS, düşük öncelikli veri trafiği için kullanılan özel bir frekans modülasyonudur.",
            "Kablosuz ağlarda çarpışma (collision) matematiksel olarak imkansızdır. DIFS ve SIFS, CSMA/CA algoritmasında rastgele sayı üreteci (Random Number Generator) olarak kullanılan değişkenlerdir.",
            "CSMA/CA, CSMA/CD'ye göre daha hızlı veri aktarımı sağlar. DIFS, verinin gönderildiği süreyi; SIFS ise verinin havada kaldığı süreyi temsil eder.",
            "Kablosuz ortamda sinyal zayıflaması (attenuation) çok az olduğu için çarpışmalar önemsizdir; SIFS ve DIFS süreleri ise sadece güç tasarrufu sağlamak için uyku moduna geçilen zaman aralıklarıdır."
        ],
        "correctAnswer": 0
    },
    {
        "question": "İnternet omurgasının temelini oluşturan 'Packet Switching' (Paket Anahtarlama) ile geleneksel telefon şebekelerinin (PSTN) temeli olan 'Circuit Switching' (Devre Anahtarlama) teknolojileri; kaynak kullanımı, verimlilik ve trafik karakteristiği açısından karşılaştırıldığında aşağıdaki yorumlardan hangisi doğrudur?",
        "options": [
            "Her iki teknoloji de veriyi analog sinyaller olarak taşır ve kaynak kullanımı açısından aralarında hiçbir fark yoktur, tek fark kullanılan kablo tipidir.",
            "İnternet teknolojileri geliştikçe Packet Switching tamamen terk edilmiş ve daha güvenli olduğu için tekrar Circuit Switching altyapısına dönülmüştür.",
            "Circuit Switching, iletişim süresince kaynakları (frekans veya zaman dilimi) rezerve ettiği için 'sessizlik' anlarında kaynak israfına yol açar; Packet Switching ise istatistiksel çoklama (statistical multiplexing) sayesinde hattı sadece veri varken kullanarak 'bursty' (düzensiz) trafikte daha yüksek verimlilik sağlar.",
            "Packet Switching, iletişim boyunca gönderici ve alıcı arasında fiziksel bir hattı rezerve eder, bu da bant genişliğinin garanti edilmesini sağlar ancak kurulum süresi uzundur.",
            "Circuit Switching, veriyi küçük paketlere bölerek her birini farklı yollardan gönderir; bu sayede hat kopsa bile iletişim devam eder."
        ],
        "correctAnswer": 2
    },
    {
        "question": "İnternet kullanımı gibi veri trafiğinin asimetrik olduğu (örneğin, dosya indirme hacminin yükleme hacminden çok daha yüksek olduğu) bir senaryoda, spektrum verimliliği açısından hangi dupleksleme (çift yönlü iletişim) yöntemi daha avantajlıdır ve bunun temel nedeni nedir?",
        "options": [
            "TDD (Zaman Bölmeli Dupleks); çünkü zaman dilimleri (time slots) ihtiyaca göre dinamik olarak indirme veya yükleme yönüne tahsis edilebilir.",
            "Simplex İletişim; çünkü veri akışı ağırlıklı olarak tek yönde olduğu için çift yönlü bir kanala ihtiyaç duyulmaz.",
            "FDD (Frekans Bölmeli Dupleks); çünkü uplink ve downlink için sabit ve eşit bant genişlikleri ayırarak iletişimi garanti altına alır.",
            "FDD; çünkü frekans koruma bantları (guard bands) sayesinde kanallar arası girişim tamamen engellenir."
        ],
        "correctAnswer": 0
    },
    {
        "question": "OFDM (Dikgen Frekans Bölmeli Çoklama) tekniğini geleneksel FDM'den ayıran ve bant genişliği israfını önleyerek spektral verimliliği önemli ölçüde artıran temel mekanizma nedir?",
        "options": [
            "Alt taşıyıcıların arasına geniş frekans koruma bantları (guard bands) yerleştirilerek girişimin önlenmesi.",
            "Alt taşıyıcı sinyallerin birbirinin üzerine binmesine (örtüşmesine) izin verilmesi, ancak matematiksel dikgenlik sayesinde birbirlerini etkilememesi.",
            "İletişimin frekans yerine zaman dilimlerine bölünerek tek bir kanal üzerinden sırayla yapılması.",
            "Verinin tek bir yüksek hızlı taşıyıcı yerine, frekans spektrumuna yayılmış kodlarla iletilmesi."
        ],
        "correctAnswer": 1
    },
    {
        "question": "IEEE 802.11 kablosuz ağlarda CSMA/CD yerine CSMA/CA kullanılmasının temel nedeni aşağıdakilerden hangisidir?",
        "options": [
            "Kablosuz ağlarda veri hızının düşük olması",
            "Çakışmaların üst katmanlar tarafından çözülmesi",
            "Kablosuz ortamda tüm istasyonların birbirini duyamaması",
            "RTS/CTS mekanizmasının zorunlu olması",
            "Paket boyutlarının küçük olması"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Bir ESS (Extended Service Set) yapısında, farklı BSS'leri birbirine bağlayan ve verilerin bir BSS'den diğerine aktarılmasını sağlayan omurga yapıya ne ad verilir?",
        "options": [
            "Portal",
            "BSA",
            "DS (Distribution System)",
            "SSID",
            "Ad-hoc"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Modern Wi-Fi (Wi-Fi 5 / 6 / 7) ve 5G sistemlerinde, yüksek dereceli QAM (ör. 16-QAM, 64-QAM, 256-QAM) modülasyonları kullanılmaktadır. Ancak bu sistemler, kanal koşullarına bağlı olarak zaman zaman daha düşük dereceli modülasyonlara geri düşebilmektedir. Buna göre aşağıdakilerden hangisi bu tercih değişiminin temel fiziksel nedenini doğru açıklar?",
        "options": [
            "Yüksek dereceli QAM’de sembol hızı düştüğü için veri iletimi yavaşlar",
            "Constellation diyagramında nokta sayısı arttıkça noktalar birbirine yaklaşır ve gürültü altında sembol karışma ihtimali artar",
            "QAM yalnızca genlik modülasyonu kullandığı için faz bilgisi gürültüden etkilenir",
            "Yüksek dereceli QAM’de taşıyıcı frekans kararsız hale gelir",
            "Wi-Fi ve 5G sistemleri yalnızca düşük SNR değerlerinde QAM kullanabilir"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Bir haberleşme sisteminde QPSK modülasyonu kullanılmaktadır. Sistem, aynı sembol hızında çalışmaya devam ederken BPSK’den QPSK’ye geçiş yapılmıştır. Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?",
        "options": [
            "Bit hızı yarıya düşer çünkü faz sayısı artmıştır",
            "Sembol hızı azalır, bit hızı sabit kalır",
            "Bit hızı iki katına çıkar, sembol hızı değişmez",
            "Gürültü bağışıklığı artar ve sembol hızı artar",
            "Bit hızı değişmez, sadece faz açıları değişir"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Kablosuz ağlarda (802.11) çarpışmayı önlemek için kullanılan bekleme süreleri hayati öneme sahiptir. SIFS, PIFS ve DIFS süreleri arasındaki büyüklük ilişkisi ve kullanım önceliği düşünüldüğünde aşağıdaki ifadelerden hangisi doğrudur?",
        "options": [
            "DIFS < PIFS < SIFS; Veri paketleri (Data frames) en önemli olduğu için DIFS en kısadır.",
            "SIFS < PIFS < DIFS; En kısa süre SIFS olduğu için ACK gibi acil paketler en yüksek önceliğe sahiptir.",
            "PIFS < SIFS < DIFS; Access Point'in (AP) yönetimi ele alması için PIFS en kısadır.",
            "SIFS = PIFS = DIFS; Tüm paket türleri eşit hakka sahiptir, rastgele seçim yapılır.",
            "SIFS < DIFS < PIFS; En düşük öncelik PCF (Point Coordination Function) moduna verildiği için PIFS en uzun süredir."
        ],
        "correctAnswer": 1
    },
    {
        "question": "Modern kablosuz haberleşme sistemlerinde Analog Modülasyon yerine Dijital Modülasyon tekniklerinin tercih edilmesinin temel sebeplerinden biri aşağıdakilerden hangisi değildir?",
        "options": [
            "Kanal bozukluklarına ve gürültüye (noise) karşı daha dirençli (robust) olması.",
            "Şifreleme (Encryption) tekniklerinin uygulanmasını kolaylaştırarak daha yüksek güvenlik ve gizlilik sağlaması.",
            "Analog sistemlere göre çok daha basit elektronik devre yapısına sahip olması ve senkronizasyon gerektirmemesi.",
            "Gelişmiş hata düzeltme (Coding/Decoding) tekniklerinin kullanımına imkan tanıması.",
            "Çoklu Erişim (Multiple Access) tekniklerine uygun olup, aynı anda birden fazla kullanıcının haberleşmesine izin vermesi."
        ],
        "correctAnswer": 2
    },
    {
        "question": "Bir fabrikada aynı ortamda çalışan çok sayıda kablosuz sensör ve kontrol cihazı bulunmaktadır.",
        "options": [
            "FHSS’in daha düşük güç tüketmesi",
            "FHSS’in yalnızca kısa mesafelerde çalışması",
            "FHSS’in sürekli frekans değiştirerek parazitli kanallardan kaçabilmesi",
            "FHSS’in daha yüksek veri hızları sağlaması",
            "FHSS’in sabit bantta çalışması"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Bir askeri üs içinde kullanılan el telsizleri, düşman tarafından karıştırma (jamming) yapılabilecek bir ortamda çalışmaktadır. Bu nedenle iletişim sisteminde FHSS tabanlı bir yapı tercih edilmiştir. Aşağıdakilerden hangisi bu tercihin güvenlik açısından sağladığı en önemli avantajı ifade eder?",
        "options": [
            "Sinyalin sabit bir frekansta güçlü iletilmesi",
            "Frekans atlaması sayesinde sinyalin izlenmesinin ve kesilmesinin zorlaşması",
            "Daha yüksek veri hızları elde edilmesi",
            "Daha düşük bant genişliği kullanılması",
            "Sinyalin yalnızca kısa mesafede yayılması"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Bir kablosuz hücresel sistemde aşağıdaki koşullar geçerlidir: Sistem TDD kullanmaktadır.Hücre yarıçapı büyüdükçe propagation delay artmaktadır.Kullanıcılar arasında zaman senkronizasyonu hataları oluşmaya başlamıştır.Bu durumda sistem performansının düşmesinin en temel nedeni aşağıdakilerden hangisidir?",
        "options": [
            "Downlink ve uplink için ayrı frekansların kullanılması",
            "Time slot’lar arasında bırakılan guard time’ların yetersiz kalması",
            "Duplexer filtrelerinin girişimi bastıramaması",
            "Guard band’lerin spektral verimliliği azaltması",
            "Analog iletim formatlarının TDD’de desteklenmemesi"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Toplam bant genişliği sınırlı olan bir kablosuz sistemde çok sayıda kullanıcı bulunmaktadır. Kullanıcıların veri trafiği zamana göre dengesiz dağılmakta; bazı kullanıcılar uzun süre veri göndermezken bazıları yoğun veri iletmektedir.Aşağıdaki çoklama yöntemlerinden hangisi bu trafik yapısında bant genişliğinin en verimli kullanılmasını sağlar?",
        "options": [
            "FDM – çünkü her kullanıcıya sabit frekans tahsis edilir",
            "FDM – çünkü guard band’ler girişimi tamamen engeller",
            "TDM – çünkü zaman dilimleri kullanıcı yüküne göre dinamik olarak ayarlanabilir",
            "CDM – çünkü kullanıcılar sırayla iletim yapar",
            "Simplex – çünkü tek yönlü iletişim bant kullanımını azaltır"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Duplexing kavramı kablosuz haberleşme sistemlerinde temel olarak aşağıdakilerden hangisini ifade eder?",
        "options": [
            "Birden fazla kullanıcının aynı kanalı paylaşmasını",
            "Uplink ve downlink iletimlerinin birbirinden ayrılmasını",
            "Analog ve dijital sinyallerin dönüştürülmesini",
            "Kodlama ve modülasyon tekniklerini",
            "Bant genişliğinin sabitlenmesini"
        ],
        "correctAnswer": 1
    },
    {
        "question": "WMAC (Wireless MAC) alt katmanının birincil (primary) görevi aşağıdakilerden hangisidir?",
        "options": [
            "Fiziksel ortamda sinyal modülasyonu yapmak",
            "STAlar arasındaki iletim taleplerini arbitre etmek ve çoğullamak",
            "IP paketlerini çerçevelere bölmek",
            "Frekans ataması yapmak",
            "Yalnızca veri şifreleme işlemlerini gerçekleştirmek"
        ],
        "correctAnswer": 1
    },
    {
        "question": "NAV (Network Allocation Vector) kavramı ne işe yarar?",
        "options": [
            "Sanal taşıyıcı algılama (Virtual Carrier Sensing) yaparak ortamın ne kadar süre meşgul olacağını belirtir",
            "Frekans atlamalı yayılma spektrumunu (FHSS) yönetir",
            "Sinyal gücünü ölçer",
            "Veri paketlerini şifreler",
            "Hatalı paketlerin yeniden gönderilmesini (Retransmission) sağlar"
        ],
        "correctAnswer": 0
    },
    {
        "question": "2.4 GHz ISM bandında çalışan iki kablosuz sistemden biri sabit frekansta, diğeri ise FHSS kullanmaktadır. Ortamda belirli bir frekansta sürekli çalışan dar bantlı bir parazit kaynağı bulunmaktadır.Bu durumda aşağıdaki gözlemlerden hangisinin FHSS kullanan sistem için doğru olması beklenir?",
        "options": [
            "Parazit oluştuğu anda iletişim tamamen kesilir",
            "İletişim, parazitin olduğu süre boyunca tüm frekans bandında bozulur",
            "Sadece parazitin etkilediği zaman aralıklarında kısa süreli veri kayıpları oluşur",
            "Parazit etkisi, sabit frekanslı sisteme göre daha uzun sürer",
            "Parazitin frekansı değişmediği için sistem senkronizasyonu kaybolur"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Bir DSSS sisteminde alıcı taraf, göndericide kullanılan PN (chip) dizisini bilmemektedir. Ortamda yalnızca DSSS sinyali ve beyaz gürültü bulunmaktadır.",
        "options": [
            "Sinyali dar bantlı bir işaret olarak algılar",
            "Sinyali doğrudan demodüle ederek orijinal veriyi elde eder",
            "Sinyali gürültü benzeri bir yapı olarak algılar ve anlamlı veri çıkaramaz",
            "Chip dizisini tahmin ederek senkronizasyonu otomatik sağlar",
            "Sinyali yalnızca daha düşük hızda çözümler"
        ],
        "correctAnswer": 2
    },
    {
        "question": "IEEE 802.11 kablosuz ağlarında kullanılan sanal taşıyıcı algılama mekanizmasının temel amacı aşağıdakilerden hangisidir?",
        "options": [
            "Fiziksel sinyal gücünü ölçerek kanalın boş olup olmadığını belirlemek",
            "RTS/CTS çerçeveleri aracılığıyla kanalın belirli bir süre rezerve edilmesini sağlamak",
            "Veri iletim hızını otomatik olarak ayarlamak",
            "Erişim noktasının kapsama alanını genişletmek",
            "Paketlerin şifrelenmesini sağlamak"
        ],
        "correctAnswer": 1
    },
    {
        "question": "IEEE 802.11 kablosuz ağlarında kullanılan taşıyıcı algılama mekanizması ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
        "options": [
            "Kanalın durumunu yalnızca RTS/CTS paketleri üzerinden kontrol eder",
            "Kanal meşgulken iletime devam edilmesini sağlar",
            "Fiziksel taşıyıcı algılama, ortamda sinyal enerjisini ölçerek kanalın dolu olup olmadığını belirler",
            "Yalnızca access point’ler tarafından kullanılır",
            "Hidden node problemini tamamen ortadan kaldırır"
        ],
        "correctAnswer": 2
    },
    {
        "question": "IEEE 802.11’de RTS/CTS kullanılan bir CSMA/CA iletişiminde doğru sıra hangisidir?",
        "options": [
            "SIFS → RTS → CTS → DIFS → DATA → ACK",
            "DIFS → RTS → CTS → DATA → ACK (aralarda bekleme yok)",
            "DIFS → Backoff → RTS → SIFS → CTS → SIFS → DATA → SIFS → ACK",
            "Backoff → DIFS → CTS → RTS → DATA → ACK",
            "DIFS → DATA → RTS → CTS → ACK"
        ],
        "correctAnswer": 2
    },
    {
        "question": "IEEE 802.11’de RTS/CTS mekanizmasının temel amacı aşağıdakilerden hangisidir?",
        "options": [
            "Veri hızını artırmak",
            "Enerji tüketimini azaltmak",
            "Hidden terminal problemini azaltmak",
            "SSID gizliliğini sağlamak",
            "MAC adresi doğrulaması yapmak"
        ],
        "correctAnswer": 2
    },
    {
        "question": "FDM (Frequency Division Multiplexing) ile TDM (Time Division Multiplexing) arasındaki temel fark aşağıdakilerden hangisidir?",
        "options": [
            "FDM zaman dilimlerini, TDM frekans bantlarını paylaşır",
            "FDM her kullanıcıya ayrı bir frekans bandı ayırır",
            "TDM analog sinyaller için kullanılır",
            "FDM senkronizasyona ihtiyaç duymaz",
            "TDM gürültüye FDM’den daha dayanıklıdır"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Yoğun kullanıcı bulunan bir ortamda (ör. amfi, konferans salonu) Wi-Fi 6 (802.11ax) kullanımının en doğru gerekçesi hangisidir?",
        "options": [
            "OFDMA ile aynı zaman aralığında çoklu kullanıcıya kaynak bölüştürerek verimliliği artırır",
            "CSMA/CA’yı kaldırarak çarpışmaları sıfırlar",
            "Daha yüksek frekans kullanarak kapsama alanını artırır.",
            "Yalnızca tek kullanıcı performansını artırır, yoğunlukta faydası yoktur",
            "Beacon çerçevelerini şifreleyerek hız kazandırır."
        ],
        "correctAnswer": 0
    },
    {
        "question": "Aşağıdakilerden hangisi Ad-Hoc ağların özelliklerinden biridir?",
        "options": [
            "Ad-Hoc ağlar, yalnızca merkezi bir Access Point (AP) kullanarak cihazları birbirine bağlar.",
            "Ad-Hoc ağlar, her cihazın bir ana cihaz gibi merkezi rol üstlendiği ağ yapısıdır.",
            "Ad-Hoc ağlar, sadece Wi-Fi cihazlarıyla sınırlıdır ve Bluetooth desteklemez.",
            "Ad-Hoc ağlarda cihazlar, doğrudan birbirlerine bağlanır ve merkezi bir AP’ye ihtiyaç duymazlar.",
            "Ad-Hoc ağlar, sadece belirli bir cihaz tipine (örneğin, akıllı telefonlar) izin verir."
        ],
        "correctAnswer": 3
    },
    {
        "question": "Content Delivery Network (CDN) nedir?",
        "options": [
            "İnternete bağlanan cihazlar arasında veri paylaşımını sağlayan bir ağ yapısıdır.",
            "İnternetteki verilerin hızlı ve verimli bir şekilde dağıtılmasını sağlayan bir sistemdir.",
            "Verilerin merkezi bir kaynaktan kullanıcıya gönderilmesini sağlayan, tek bir veri iletim hattıdır.",
            "Sadece kablolu ağlarda veri iletimini hızlandıran bir teknolojidir.",
            "Verilerin yalnızca video içeriklerini iletmek için optimize edilmiş bir ağ sistemidir."
        ],
        "correctAnswer": 1
    },
    {
        "question": "Wi-Fi ağlarında kullanılan temel frekans bantları nelerdir ?",
        "options": [
            "2.4 GHz ve 5 GHz",
            "1 GHz ve 3 GHz",
            "5 GHz ve 10 GHz",
            "2 GHz ve 6 GHz",
            "3 GHz ve 8 GHz"
        ],
        "correctAnswer": 0
    },
    {
        "question": "Bir veri parçasını hatasız bir şekilde alan cihazın, göndericiye “Mesajını sağlam bir şekilde aldım.” Anlamına gelen kısa bir onay paketi göndermesi olayı hangisidir ?",
        "options": [
            "Fragmentation",
            "Data Delivery",
            "Retransmission",
            "Acknowledgement",
            "Distribution"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Aşağıdaki ifadelerden hangisi NOMA için teknik olarak doğru ve ayırt edici bir tanımdır?",
        "options": [
            "Kullanıcıları farklı alt taşıyıcılara bölerek aynı zaman aralığında iletir (OFDMA prensibi)",
            "Kullanıcıları farklı uzaysal kanallara ayırmak için anten sayısını artırır (Massive MIMO prensibi)",
            "Aynı zaman–frekans kaynağını birden fazla kullanıcıyla paylaşır; alıcı tarafta SIC (Successive Interference Cancellation) ile ayrıştırma yapılır",
            "mmWave’in kısa menzilini çözmek için hücreleri küçültür (Small Cell prensibi)",
            "Uygulamayı çekirdek ağdan uzağa taşıyarak gecikmeyi düşürür (MEC prensibi)"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Aşağıdaki eşleştirmelerden hangisi 5G’de ilgili teknolojinin temel etkisini doğru verir?",
        "options": [
            "MEC → tepe veri hızını artırır, mmWave → gecikmeyi düşürür",
            "Massive MIMO → kullanıcıları güç seviyeleriyle ayırır, NOMA → uzaysal ayırma yapar",
            "Small Cell → kapsama alanını tek başına “çok uzağa” taşır, mmWave → bina içi penetrasyonu artırır",
            "Beamforming → sinyali belirli yöne yoğunlaştırarak hedef kullanıcıda SNR/verimi artırır, Massive MIMO → çok antenle kapasite/spektral verimliliği artırır",
            "NOMA → duvar geçişini artırır, MEC → mmWave’in kısa menzilini çözer"
        ],
        "correctAnswer": 3
    }
];
