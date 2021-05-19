import React from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.css";

function Footer({ config }) {
  const url = config.siteRss;
  const { copyright } = config;
  if (!copyright) {
    return null;
  }
  return (
    <footer class="footer">
      <div class="container">
        <span class="copyright">© 2021 Ben Hadman.</span>
        <Link to={url}>
          <button type="button">Subscribe</button>
        </Link>
        <UserLinks config={config} labeled />
      </div>
    </footer>
  );
}

export default Footer;
