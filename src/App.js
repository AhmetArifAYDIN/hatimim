import React from "react";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

const App = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "hatimim - Hatim Hesaplama Aracı",
    description:
      "Tevhid, İhlas ve diğer hatimlerin okuma sayısını düzenlemek için geliştirilmiştir. Belirlenen toplam okuma sayısını kullanarak, katılımcı sayısına göre her bireyin okuması gereken miktarı otomatik olarak hesaplayabilirsiniz.",
    url: "https://hatimim.netlify.app",
  };

  return (
    <div className="d-flex flex-column h-100">
      {/* SEO Başlık ve Meta Etiketleri */}
      <Helmet>
        <meta charSet="UTF-8" />
        <title>hatimim - Hatim Hesaplama Aracı</title>
        <meta
          name="description"
          content="Tevhid, İhlas ve diğer hatimlerin okuma sayısını düzenlemek için geliştirilmiştir. Belirlenen toplam okuma sayısını kullanarak, katılımcı sayısına göre her bireyin okuması gereken miktarı otomatik olarak hesaplayabilirsiniz."
        />
        <meta property="og:title" content="hatimim - Hatim Hesaplama Aracı" />
        <meta
          property="og:description"
          content="Tevhid, İhlas ve diğer hatimlerin okuma sayısını düzenlemek için geliştirilmiştir. Belirlenen toplam okuma sayısını kullanarak, katılımcı sayısına göre her bireyin okuması gereken miktarı otomatik olarak hesaplayabilirsiniz."
        />
        <meta property="og:image" content={`./logo.svg`} />
        <meta property="og:url" content="https://hatimim.netlify.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="hatimim - Hatim Hesaplama Aracı" />
        <meta
          name="twitter:description"
          content="Tevhid, İhlas ve diğer hatimlerin okuma sayısını düzenlemek için geliştirilmiştir. Belirlenen toplam okuma sayısını kullanarak, katılımcı sayısına göre her bireyin okuması gereken miktarı otomatik olarak hesaplayabilirsiniz."
        />
        <meta name="twitter:image" content={`./logo.svg`} />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <header>
        <Navbar />
      </header>
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
