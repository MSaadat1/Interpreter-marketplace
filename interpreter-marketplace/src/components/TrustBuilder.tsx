import "./styles.css";
import { trustBuilderData } from "../staticData";
import type { TrustBuilderDataType } from "../types";

export function TrustBuilder() {
  return (
    <div className="trust-container">
      <div className="trust-header-container">
        <h2 className="trust-header">Why Choose Us?</h2>
      </div>
      <div className="trustCards-container">
        {trustBuilderData.map((item: TrustBuilderDataType,index) => (
          <div key={index} className="trustCard">
            <span  className="cardIcons">{item.icon}</span>
            <h4  className="cardHeader">{item.title}</h4>
            <p  className="cardPara">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
