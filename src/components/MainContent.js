import React, { useState } from "react";
import Form from "./Form";
import Result from "./Result";
import { calculate } from "../utils/Calculator";

const MainContent = () => {
  const [kategori, setKategori] = useState(0);
  const [kisiSayisi, setKisiSayisi] = useState("");
  const [sonuc, setSonuc] = useState("");
  const [borderStyle, setBorderStyle] = useState("");

  const handleCalculate = () => {
    const { success, message } = calculate(kategori, kisiSayisi);
    setSonuc(message);
    setBorderStyle(success ? "border-success" : "border-danger");
  };

  return (
    <main className="flex-grow-1 d-flex justify-content-center align-items-center text-center">
      <div className="container">
        <h1 className="h3 font-weight-bold mt-5 mb-3">Hatim Hesapla</h1>
        <p className="small mb-4">
          Tevhid, İhlas ve diğer hatimlerin okuma sayısını düzenlemek için
          geliştirilmiştir. <br /> Belirlenen toplam okuma sayısını kullanarak,
          katılımcı sayısına göre her bireyin okuması gereken miktarı otomatik
          olarak hesaplayabilirsiniz.
        </p>

        <div className="card shadow-sm rounded-0 mt-4 mb-4">
          <div className="card-body">
            <Form
              kategori={kategori}
              setKategori={setKategori}
              kisiSayisi={kisiSayisi}
              setKisiSayisi={setKisiSayisi}
              handleCalculate={handleCalculate}
            />
            <Result sonuc={sonuc} borderStyle={borderStyle} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
