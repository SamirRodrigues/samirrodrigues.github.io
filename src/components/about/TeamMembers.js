import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./TeamMembers.css";

const teamMembers = [
  {
    id: 1,
    name: "Samir",
    position: "Producer|Programador",
    description:
      "Profissional de TI com foco em inovação e desenvolvimento de jogos educacionais.",
    image: "assets/Perfil1.jpg",
  },
  {
    id: 2,
    name: "Jucinara",
    position: "Historiadora",
    description:
      "Especialista em conectar o passado ao presente através de narrativas inspiradoras e educativas.",
    image: "assets/Perfil2.jpg",
  },
  {
    id: 3,
    name: "Ecto",
    position: "Artista",
    description:
      "Artista dedicado a criar visuais envolventes e expressivos que dão vida aos projetos.",
    image: "assets/Perfil3.jpg",
  },
  {
    id: 4,
    name: "Jorge",
    position: "Desenvolvedor Web",
    description:
      "Desenvolvedor web apaixonado por criar soluções eficientes e inovadoras para o mundo digital.",
    image: "assets/Perfil4.jpg",
  },
  {
    id: 5,
    name: "Luan Messias",
    position: "Designer",
    description:
      "Designer que vive para criar identidades visuais marcantes e interfaces que conquistam à primeira vista, além de ser apaixonado por compor trilhas sonoras que dão alma a experiências criativas e imersivas.",
    image: "assets/Perfil5.jpeg",
  },
  {
    id: 6,
    name: "Gabriel D. Oliveira",
    position: "Game Designer",
    description:
      "Profissional com foco no desenvolvimento de jogos em busca da diversão.",
    image: "assets/Perfil6.jpeg",
  },
  {
    id: 7,
    name: "Jonas Sena",
    position: "Programador",
    description:
      "Programador comprometido em criar jogos que proporcionam momentos de diversão, conexão e aprendizado.",
    image: "assets/Perfil7.jpg",
  },
];

const TeamMembers = () => {
  return (
    <section className="team-members-section">
      <Container>
        <Row>
          <Col>
            <div className="title-team">
              <h3>
                Conheça nosso <strong>TIME!</strong>
              </h3>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {teamMembers.map((member) => (
            <Col xs={12} md={6} lg={5} key={member.id} className="mb-4">
              <div className="team-member-card">
                <Row className="align-items-start no-gutters">
                  <Col xs={12} md={4} className="image-col">
                    <div className="card-image-wrapper">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="card-image"
                      />
                    </div>
                  </Col>
                  <Col xs={12} md={8} className="text-col">
                    <div className="card-content">
                      <h5 className="card-name">{member.name}</h5>
                      <p className="card-position">{member.position}</p>
                      <p className="card-description">{member.description}</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TeamMembers;
