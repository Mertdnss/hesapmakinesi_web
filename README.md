# 🧮 Hesap Makinesi

Modern ve kullanıcı dostu bir web tabanlı hesap makinesi uygulaması. Temel matematiksel işlemleri gerçekleştirmek için tasarlanmış, responsive ve görsel olarak çekici bir arayüze sahiptir.

## ✨ Özellikler

- **Temel Matematiksel İşlemler**: Toplama (+), çıkarma (-), çarpma (×), bölme (÷)
- **Modern Tasarım**: Gradient arka plan ve şık buton tasarımları
- **Responsive Arayüz**: Tüm cihazlarda mükemmel görünüm
- **Kullanıcı Dostu**: Sezgisel ve kolay kullanım
- **Temizleme Özelliği**: Tek tıkla ekranı temizleme (C butonu)
- **Hover Efektleri**: İnteraktif buton animasyonları

## 🚀 Canlı Demo

Uygulamayı kullanmak için `index.html` dosyasını herhangi bir web tarayıcısında açın.

## 📁 Proje Yapısı

```
hesapmakinesi/
├── index.html      # Ana HTML dosyası
├── script.js       # JavaScript işlevselliği
├── style.css       # CSS stilleri
└── README.md       # Proje dokümantasyonu
```

## 🛠️ Teknolojiler

- **HTML5**: Yapısal işaretleme
- **CSS3**: Modern stil ve animasyonlar
- **JavaScript (ES6+)**: İnteraktif işlevsellik

## 💻 Kurulum

1. Projeyi bilgisayarınıza indirin:
   ```bash
   git clone [repository-url]
   cd hesapmakinesi
   ```

2. `index.html` dosyasını web tarayıcınızda açın:
   - Dosyaya çift tıklayın, veya
   - Tarayıcınızda `Ctrl+O` (Windows/Linux) veya `Cmd+O` (Mac) ile dosyayı açın

## 🎯 Kullanım

1. **Sayı Girişi**: 0-9 arası sayılara tıklayarak sayıları girin
2. **İşlem Seçimi**: +, -, ×, ÷ butonlarından birini seçin
3. **İkinci Sayı**: İkinci sayıyı girin
4. **Sonuç**: = butonuna tıklayarak sonucu görün
5. **Temizleme**: C butonuna tıklayarak ekranı temizleyin

## 🎨 Tasarım Özellikleri

### Renk Paleti
- **Arka Plan**: Çok renkli gradient (pembe-mor-mavi-yeşil geçişi)
- **Ana Butonlar**: Mavi (#1899D6)
- **İşlem Butonları**: Mor (#8e8be1)
- **Temizleme Butonu**: Kırmızı (rgb(214, 15, 15))
- **Eşittir Butonu**: Bej (rgb(244, 209, 163))

### Responsive Tasarım
- Maksimum genişlik: 18rem
- Esnek yükseklik: 30vh
- Tüm cihazlarda uyumlu görünüm

## 🔧 Kod Yapısı

### JavaScript İşlevleri
- `Calculate()`: Matematiksel işlemleri gerçekleştirir
- `AddScreen()`: Ekrana sayı ekler
- `ShowResult()`: Sonucu ekranda gösterir
- Event listeners: Buton tıklamalarını yönetir

### CSS Sınıfları
- `.mainArea`: Ana hesap makinesi konteyneri
- `.screen`: Sonuç ekranı
- `.row`: Buton satırları
- `.nums`: Sayı butonları
- `.process`: İşlem butonları
- `.active`, `.active2`, `.active3`: Farklı buton stilleri

## 🐛 Bilinen Sınırlamalar

- Ondalık sayı desteği sınırlı
- Çok büyük sayılarla işlem yapıldığında ekran taşması olabilir
- Klavye desteği mevcut değil

## 🚀 Gelecek Geliştirmeler

- [ ] Ondalık sayı desteği
- [ ] Klavye kısayolları
- [ ] İşlem geçmişi
- [ ] Bilimsel hesap makinesi modu
- [ ] Tema seçenekleri
- [ ] Ses efektleri

## 🤝 Katkıda Bulunma

1. Bu projeyi fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeni-ozellik`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## 👨‍💻 Geliştirici

Bu proje, modern web teknolojilerini kullanarak basit ama etkili bir hesap makinesi oluşturmak amacıyla geliştirilmiştir.

---

⭐ Bu projeyi beğendiyseniz, lütfen yıldız verin!

📧 Sorularınız için iletişime geçebilirsiniz.