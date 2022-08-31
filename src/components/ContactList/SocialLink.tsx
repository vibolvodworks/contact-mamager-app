import { ISocialNetworks } from "../../interface";
import React from "react";

interface IProps {
  links: ISocialNetworks;
}

const SocialLink: React.FC<IProps> = ({ links }) => {
  return (
    <div className="social-links mt-2">
      {Object.entries(links).map((link, i) => {
        return (
          <a key={i} href={link[1]} className={link[0]}>
            <i className={"bi bi-" + link[0]}></i>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLink;
