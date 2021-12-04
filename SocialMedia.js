import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faGithub,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";
export default function SocialMedia() {
  return (
      <div className="media">
    <div class="social-container">
      <div class="social-container">
      <h3>Social Follow</h3>
      <a href="https://www.youtube.com/"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
<a href="https://www.facebook.com//"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="https://twitter.com/" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a href="https://www.instagram.com/"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
<a href="https://www.Github.com/"
  className="Github social">
  <FontAwesomeIcon icon={faGithub} size="2x" />
</a>
<a href="https://www.linkedin.com/pulse/publicity-marketing-management-s-sai-sravan/"
  className="LinkedIn social">
  <FontAwesomeIcon icon={faLinkedin} size="2x" />
</a>
</div>
    </div>
    </div>
  );
}