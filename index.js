import * as React from "react";
import "./banner.css";

const CTABanner = ({
  headline,
  subline,
  cta_text,
  cta_href,
  terms_summary,
  detailed_terms_href,
  image_href,
}) => {
  return (
    <section className="CTABanner">
      <article className="Container">
        <header>
          <h1 className="Headline">{headline}</h1>
          <h2 className="Subline">{subline}</h2>

          <a className="CTAButton" href={cta_href} color="#191414">
            <span>{cta_text}</span>
          </a>

          <div className="Terms">
            <p>
              {terms_summary}{" "}
              {detailed_terms_href && (
                <a href={detailed_terms_href}>Terms apply.</a>
              )}
            </p>
          </div>
        </header>
        <img src={image_href} alt="headphones" />
      </article>
    </section>
  );
};

export default CTABanner;
