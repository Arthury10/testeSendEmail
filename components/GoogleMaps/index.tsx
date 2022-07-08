import React from "react";

export const GoogleMaps = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.250346799296!2d-52.34223399999999!3d-31.7636572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9511b598faccec7b%3A0xbe5c5e1d73e59e0e!2sR.%20Maj.%20C%C3%ADcero%20de%20G%C3%B3es%20Monteiro%2C%20405%20-%20Centro%2C%20Pelotas%20-%20RS%2C%2096015-190!5e0!3m2!1spt-PT!2sbr!4v1654613046247!5m2!1spt-PT!2sbr"
        width="100%"
        height="450"
        loading="lazy"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};
