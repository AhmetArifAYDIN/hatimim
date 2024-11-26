export const calculate = (kategori, kisiSayisi) => {
  const adetSayilari = {
    1: 100, // İhlas
    2: 72000, // Tevhid
    3: 313, // Ayet-el Kürsi
    4: 4444, // Salat-ı Nariye
  };

  // Geçersiz giriş kontrolü
  if (kisiSayisi <= 0 || !adetSayilari[kategori]) {
    return {
      success: false,
      message: "Lütfen geçerli bir kategori ve kişi sayısı giriniz!",
    };
  }

  const adet = adetSayilari[kategori];

  // Eğer kişi sayısı 1 ise, direkt olarak toplam okuma miktarı verilmesi
  if (kisiSayisi === 1) {
    return {
      success: true,
      message: `1 kişi toplam ${adet} adet okuyacak.`,
      data: [adet], // Tek kişi için toplam okuma
    };
  }

  // İhlas Hatmi için özel durum: 33'ten fazla kişi varsa
  if (kategori === 1 && kisiSayisi > 33) {
    return {
      success: true,
      message: `33'ten fazla kişi olduğu için herkes 3 adet okuyacak.`,
      data: Array(kisiSayisi).fill(3), // Herkes için 3 adet okuma
    };
  }

  // Diğer hatimler için: kişi sayısı, toplam adedi aşarsa hata döndür
  if (kategori !== 1 && kisiSayisi > adet) {
    return {
      success: false,
      message:
        "Hatimdeki adetten fazlasının hesaplanması.. En kısa sürede çözülecektir.",
    };
  }

  // Genel hesaplama (Sadece kişi sayısı 1'den fazla ise hesaplama yapılır)
  const diziSon = Array(Number(kisiSayisi)).fill(Math.floor(adet / kisiSayisi));
  const eklenecekSayi = adet - Math.floor(adet / kisiSayisi) * kisiSayisi;

  // Arta kalanları dağıt
  for (let i = 0; i < eklenecekSayi; i++) {
    diziSon[i] += 1;
  }

  // Sonuçları belirtirken sadece "kaç kişi kaç adet okuyacak" mesajı dönülecek
  const uniqueValues = [...new Set(diziSon)];
  const resultMessage = uniqueValues
    .map(
      (value) =>
        `${
          diziSon.filter((num) => num === value).length
        } kişi ${value} adet okuyacak`
    )
    .join(", ");

  return {
    success: true,
    message: resultMessage,
    data: diziSon, // Detaylı dağılım verisi
  };
};
