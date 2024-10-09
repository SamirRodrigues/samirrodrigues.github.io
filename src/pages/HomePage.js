import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import HeaderGrey from "../components/body/HeaderGrey";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleVerMaisClick = () => {
    navigate("/details");
  };

  return (
    <div className="homepage">
      <HeaderGrey />
      <Container fluid className="text-center hero-section">
        <Row>
          <Col>
            <h1 className="mt-4">
              Despertando
              <br />
              Cultura & Diversão <br />
              em <strong>CADA JOGO</strong>
            </h1>
            <Button
              variant="outline-light"
              className="mt-4 btn-hero"
              onClick={handleVerMaisClick}
            >
              <FaChevronDown className="mr-2" /> Ver mais
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;

// // src/pages/HomePage.js
// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import { FaChevronDown } from "react-icons/fa";
// import HeaderGrey from "../components/body/HeaderGrey";
// import FirstSection from "../components/inicio/FirstSection";
// import LaunchSection from "../components/inicio/LaunchSection";
// import PartnersSection from "../components/inicio/PartnersSection";
// import Footer from "../components/body/Footer";
// import "./HomePage.css";

// const HomePage = () => {
//   const handleVerMaisClick = () => {
//     const element = document.getElementById("details-section");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="homepage">
//       <HeaderGrey />
//       <Container fluid className="text-center hero-section">
//         <Row>
//           <Col>
//             <h1 className="mt-4">
//               Despertando
//               <br />
//               Cultura & Diversão <br />
//               em <strong>CADA JOGO</strong>
//             </h1>
//             <Button
//               variant="outline-light"
//               className="mt-4 btn-hero"
//               onClick={handleVerMaisClick}
//             >
//               <FaChevronDown className="mr-2" /> Ver mais
//             </Button>
//           </Col>
//         </Row>
//       </Container>
//       {/* Seção de Detalhes */}
//       <div id="details-section">
//         <FirstSection />
//         <LaunchSection />
//         <PartnersSection />
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default HomePage;
