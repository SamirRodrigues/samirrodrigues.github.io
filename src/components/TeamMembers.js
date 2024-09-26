import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./TeamMembers.css";

const teamMembers = [
  {
    id: 1,
    name: "Nome 1",
    position: "Cargo 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "assets/member1.png",
  },
  {
    id: 2,
    name: "Nome 2",
    position: "Cargo 2",
    description:
      "Lorem ipsum dolor sit amet consectetur. Et egestas pellentesque amet urna nec porta eget.",
    image: "assets/member2.png",
  },
  {
    id: 3,
    name: "Nome 3",
    position: "Cargo 3",
    description:
      "Lorem ipsum dolor sit amet consectetur. Est morbi nibh aliquam ac etiam consequat viverra lacus euismod. Odio vulputate ut amet mi facilisis adipiscing.",
    image: "assets/member3.png",
  },
  {
    id: 4,
    name: "Nome 4",
    position: "Cargo 4",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quis at turpis vel ut. Venenatis id tellus neque pellentesque egestas sagittis odio.",
    image: "assets/member4.png",
  },
  {
    id: 5,
    name: "Nome 5",
    position: "Cargo 5",
    description:
      "Lorem ipsum dolor sit amet consectetur. Purus aliquam pellentesque nunc malesuada sapien malesuada quis id.",
    image: "assets/member5.png",
  },
  {
    id: 6,
    name: "Nome 6",
    position: "Cargo 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "assets/member6.png",
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
