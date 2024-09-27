import React from "react";
import "./TermsConditions.css"; // Importa o CSS
import HeaderGrey from "../components/body/HeaderGrey"; // Importa o Header
import Footer from "../components/body/Footer"; // Importa o Footer

const TermsConditions = () => {
  return (
    <>
      <HeaderGrey />
      <div className="terms-conditions">
        <div className="terms-conditions-container">
          <h1>Terms &amp; Conditions</h1>
          <p>
            These terms and conditions apply to the{" "}
            <strong>Refugio do Banzé</strong> app (hereby referred to as
            "Application") for mobile devices that was created by Baladeira
            Studio (hereby referred to as "Service Provider") as an Ad Supported
            service.
          </p>
          <p>
            Upon downloading or utilizing the Application, you are automatically
            agreeing to the following terms. It is strongly advised that you
            thoroughly read and understand these terms prior to using the
            Application. Unauthorized copying, modification of the Application,
            any part of the Application, or our trademarks is strictly
            prohibited. Any attempts to extract the source code of the
            Application, translate the Application into other languages, or
            create derivative versions are not permitted. All trademarks,
            copyrights, database rights, and other intellectual property rights
            related to the Application remain the property of the Service
            Provider.
          </p>
          <h2>Modification of the Application</h2>
          <p>
            The Service Provider is dedicated to ensuring that the Application
            is as beneficial and efficient as possible. As such, they reserve
            the right to modify the Application or charge for their services at
            any time and for any reason. The Service Provider assures you that
            any charges for the Application or its services will be clearly
            communicated to you.
          </p>
          <h2>Personal Data and Security</h2>
          <p>
            The Application stores and processes personal data that you have
            provided to the Service Provider in order to provide the Service. It
            is your responsibility to maintain the security of your phone and
            access to the Application. The Service Provider strongly advises
            against jailbreaking or rooting your phone, which involves removing
            software restrictions and limitations imposed by the official
            operating system of your device. Such actions could expose your
            phone to malware, viruses, malicious programs, compromise your
            phone's security features, and may result in the Application not
            functioning correctly or at all.
          </p>
          <h2>Third-Party Services</h2>
          <p>
            Please note that the Application utilizes third-party services that
            have their own Terms and Conditions. Below are the links to the
            Terms and Conditions of the third-party service providers used by
            the Application:
          </p>
          <ul>
            <li>
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Play Services
              </a>
            </li>
            <li>
              <a
                href="https://developers.google.com/admob/terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                AdMob
              </a>
            </li>
            <li>
              <a
                href="https://unity3d.com/legal/terms-of-service"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unity
              </a>
            </li>
            <li>
              <a
                href="https://gameanalytics.com/terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                GameAnalytics
              </a>
            </li>
          </ul>
          <h2>Responsibility for Data Usage</h2>
          <p>
            The Service Provider cannot be held responsible if the Application
            does not function at full capacity due to lack of access to Wi-Fi or
            if you have exhausted your data allowance.
          </p>
          <h2>Updates and Termination</h2>
          <p>
            The Service Provider may wish to update the application at some
            point. You agree to always accept updates to the application when
            offered to you. The Service Provider may also wish to cease
            providing the application and may terminate its use at any time
            without providing termination notice to you.
          </p>
          <h2>Changes to These Terms and Conditions</h2>
          <p>
            The Service Provider may periodically update their Terms and
            Conditions. Therefore, you are advised to review this page regularly
            for any changes. The Service Provider will notify you of any changes
            by posting the new Terms and Conditions on this page.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or suggestions about the Terms and
            Conditions, please do not hesitate to contact the Service Provider
            at <strong>contato@baladeirastudio.com</strong>.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsConditions;
