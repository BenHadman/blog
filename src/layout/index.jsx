import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";

export default function MainLayout({ children }) {
  return (
    <div className="layout-container">
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>

      <main class="content-3">
        {children}
        <div class="spacer" data-height="96" style="height: 96px;"></div>
      </main>
    </div>
  );
}
