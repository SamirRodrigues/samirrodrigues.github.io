// src/components/DownloadSection.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DownloadSection.css";

const downloads = [
  {
    id: 1,
    title: "Acesse nossas pesquisas",
    description:
      "Explore estudos sobre a cultura quilombola e sua resistência histórica, preservando memórias e saberes.",
    image: "assets/download1.png",
    link: "#",
  },
  {
    id: 2,
    title: "Baixe nosso plano de aulas",
    description:
      "Tenha acesso aos materiais didáticos para ensinar a história dos quilombos de forma dinâmica e inspiradora.",
    image: "assets/download2.png",
    link: "#",
  },
];

const DownloadSection = () => {
  return (
    <section className="download-section">
      <div className="container">
        <div className="row justify-content-center">
          {downloads.map((download) => (
            <div key={download.id} className="col-md-6 col-lg-4 mb-4">
              <div
                className="download-item d-flex align-items-center justify-content-center"
                style={{ backgroundImage: `url(${download.image})` }}
              >
                <div className="download-content text-center">
                  <h3>{download.title}</h3>
                  <p>{download.description}</p>
                  <a href={download.link} className="download-button">
                    <i className="fas fa-download"></i> Fazer download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
