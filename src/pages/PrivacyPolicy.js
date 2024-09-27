import React from "react";
import "./PrivacyPolicy.css"; // Importa o CSS
import HeaderGrey from "../components/body/HeaderGrey"; // Importa o Header
import Footer from "../components/body/Footer"; // Importa o Footer

const PrivacyPolicy = () => {
  return (
    <>
      <HeaderGrey />
      <div className="privacy-policy">
        <div className="privacy-policy-container">
          <h1>Privacy Policy</h1>
          <p>
            This privacy policy applies to the <strong>Refugio do Banzé</strong>{" "}
            app (hereby referred to as "Application") for mobile devices that
            was created by Baladeira Studio (hereby referred to as "Service
            Provider") as an Ad Supported service. This service is intended for
            use "AS IS".
          </p>
          <h2>Information Collection and Use</h2>
          <p>
            The Application collects information when you download and use it.
            This information may include:
          </p>
          <ul>
            <li>Your device's Internet Protocol address (e.g. IP address)</li>
            <li>
              The pages of the Application that you visit, the time and date of
              your visit, the time spent on those pages
            </li>
            <li>The time spent on the Application</li>
            <li>The operating system you use on your mobile device</li>
          </ul>
          <p>
            The Application does not gather precise information about the
            location of your mobile device.
          </p>
          <h2>Third Party Access</h2>
          <p>
            Only aggregated, anonymized data is periodically transmitted to
            external services to aid the Service Provider in improving the
            Application and their service.
          </p>
          <h2>Data Retention Policy</h2>
          <p>
            The Service Provider will retain User Provided data for as long as
            you use the Application and for a reasonable time thereafter. If
            you'd like them to delete User Provided Data, please contact them at{" "}
            <a href="mailto:contato@baladeirastudio.com">
              contato@baladeirastudio.com
            </a>{" "}
            and they will respond in a reasonable time.
          </p>
          <h2>Children</h2>
          <p>
            The Service Provider does not knowingly collect personally
            identifiable information from children under 13 years of age.
          </p>
          <h2>Security</h2>
          <p>
            The Service Provider is concerned about safeguarding the
            confidentiality of your information.
          </p>
          <h2>Changes</h2>
          <p>
            This Privacy Policy may be updated from time to time. The Service
            Provider will notify you of any changes by updating this page with
            the new Privacy Policy.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions regarding privacy while using the
            Application, please contact us via email at{" "}
            <strong>contato@baladeirastudio.com</strong>.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
