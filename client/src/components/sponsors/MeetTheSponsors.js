import React from "react";
import braintree from "../sponsorLogos/braintree.png";


export default function MeetTheSponsors({ title, subtitle, dark, id }) {
  return (

      <div className="section-content" id={id}>

          <h1>{title}</h1>

          <img className="braintree" src={braintree}/>

          <div className="row">
            {subtitle}
          </div>

      </div>

  );
}
