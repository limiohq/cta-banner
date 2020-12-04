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

CTABanner.defaultProps = {
  headline: "Students 3 months of Premium for £0.99.",
  subline: "Only £4.99/month after. Cancel anytime",
  cta_text: "Get Premium",
  cta_href: "/purchase/campaign/student",
  terms_summary:
    "Offer not available to users who already tried Premium. Offer ends 30 Jun 2019.",
  detailed_terms_href: "/legal/student-intro-offer-terms-and-conditions",
  image_href:
    "https://campaigns.scdn.co/images/Desktop%20Asset%20-%20Student.jpg",
};

export default CTABanner;
