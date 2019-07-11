import * as React from "react"
import './banner.css'

const CTABanner = ({headline, subline, cta_text, cta_href, terms_summary, detailed_terms_href, textAlign, background_color, background_image_href}) => {

    return (
        <div>
            <section className="Section"  style={{backgroundImage: `url(${background_image_href})`, backgroundColor: background_color}}>
                <article className="Container Landing" style={{  textAlign: textAlign}}>
                    <header className="header">
                        <div className="header2">
                            <div className="content"/>
                            <div>
                                <h1 className="Headline">{headline}</h1>
                            </div>
                            <div>
                                <h2 className="Subline">{subline}</h2>
                            </div>

                            <div className="ButtonGroup">
                                <div>
                                    <a
                                        className="CTAButton"
                                        href={cta_href}
                                        color="#191414"
                                        tabindex="0"
                                        rel="next"
                                    >
                                        <span>{cta_text}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </header>

                    <footer className="FooterContainer">
                        <div className="Footer">
                            {terms_summary}{" "}
                            {detailed_terms_href && (<><a href={detailed_terms_href}>Terms apply</a>.</>)}

                        </div>
                    </footer>
                </article>
            </section>
        </div>
    )
}


CTABanner.defaultProps = {
    headline: 'Students 3 months of Premium for £0.99.',
    subline: 'Only £4.99/month after. Cancel anytime',
    cta_text: 'Get Premium',
    cta_href: '/purchase/campaign/student',
    terms_summary: 'Offer not available to users who already tried Premium. Offer ends 30 Jun 2019.',
    detailed_terms_href: '/legal/student-intro-offer-terms-and-conditions',
    background_image_href: 'https://campaigns.scdn.co/images/Desktop%20Asset%20-%20Student.jpg',
    background_color: "#9487b4",
    textAlign: "left"

}


export default CTABanner
