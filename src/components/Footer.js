import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-dark py-4 mt-5 border-top">
      <div className="container text-center">
        <p className="mb-1">
          <a
            href="https://github.com/AhmetArifAYDIN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark"
            title="GitHub profilime göz atın"
          >
            GitHub
          </a>
          {" | "}
          <a
            href="mailto:ahmetarifaydina@gmail.com"
            className="text-dark"
            title="Bana e-posta gönder"
          >
            E-Posta
          </a>
        </p>
        <p className="small text-muted">
          E-posta yoluyla her türlü soru veya önerinizi iletebilirsiniz.
          <br />
          Bu web sitesi, yalnızca bilgilendirme amaçlıdır ve yasal yükümlülük
          taşımaz.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
