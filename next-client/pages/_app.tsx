import "bulma/css/bulma.min.css";
import Link from "next/link";
import React from "react";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="container is-fluid">
        <div
          className="columns is-mobile is-vcentered  is-centered has-text-centered"
          style={{ width: "100%" }}
        >
          <div className="column is-6">
            <div className="content">
              <Link href="/">
                <h5
                  className="hoverable"
                  style={{ textDecoration: "line-through" }}
                >
                  ytgif
                </h5>
              </Link>
              <Link href="/">
                <img
                  className="hoverable"
                  src="brand.jpg"
                  alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
                  width="250"
                  height="100"
                />
              </Link>
            </div>
          </div>
        </div>
        <Component {...pageProps} />;
      </div>
    </>
  );
}

export default MyApp;
