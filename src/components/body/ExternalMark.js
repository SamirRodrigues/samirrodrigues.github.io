// Seta ↗ ao lado de links que abrem outro site em nova aba
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "./ExternalMark.css";

const ExternalMark = () => (
  <>
    <FiArrowUpRight className="external-mark" aria-hidden="true" />
    <span className="visually-hidden"> (abre em nova aba)</span>
  </>
);

export default ExternalMark;
