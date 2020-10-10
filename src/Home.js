import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="JumboBanner">
        <h1>Mighty Muf'ler</h1>
        <h2>Arizona's Quality Shop since 1979</h2>
      </div>
      <div className="Margins">
        <div className="TwoColumnGrid">
            <div className="Padding">
              <div className="OneColumnGrid">
              <h1>Services Provided</h1>
                <div className="ListItems">
                  <h3>-Custom Exhaust</h3>
                  <h3>-Muffler Replacement</h3>
                  <h3>-Exhaust Repair</h3>
                  <h3>-Catalytic Converter Replacement</h3>
                </div>
              </div>
            </div>
            <div className="ImgWrapper">
              <img alt="The front of the store" src="https://images.squarespace-cdn.com/content/v1/5e9fa98348d28b20b3f39b36/1587803065032-7X0GNQ25GDPSESU7WDN8/ke17ZwdGBToddI8pDm48kPoswlzjSVMM-SxOp7CV59BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIeQMKeWYgwh6Mn73n2eZmZLHHpcPIxgL2SArp_rN2M_AKMshLAGzx4R3EDFOm1kBS/duals+pic.jpg?format=1500w"></img>
            </div>
        </div>
        <div className="TwoColumnGrid">
          <div>
            <h1>Arizona's Quality Shop</h1>
            <span className="yelp-review" data-review-id="lrfhxiFX0qQG0KGkVvT2RQ" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=g5D3r6Onzl8v2Yjj7RMBvQ" rel="nofollow noopener">Cale M.</a>'s <a href="https://www.yelp.com/biz/mighty-mufler-phoenix?hrid=lrfhxiFX0qQG0KGkVvT2RQ" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/Vf-rSLHzPuxSGALuXreIEQ" rel="nofollow noopener">Mighty Muf'ler</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script async="async" src="https://www.yelp.com/embed/widgets.js" type="text/javascript"></script></span>
          </div>
          <div>
            <h1>Hours</h1>
            <p>Monday–Friday</p>
            <p>9am–6pm</p>
            <p>Saturday - Sunday</p>
            <p>Closed</p>
            <h1>Phone</h1>
            <p>(602) 944-5210 </p>
          </div>
        </div>
        <div>
          <h1>Visit Us</h1>
          <p>10032 N Cave Creek Rd</p>
          <p>Phoenix, AZ 85020</p>
          <div className="google-maps"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13296.226117394699!2d-112.0549261!3d33.5778815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8c5a164d90109436!2sMighty%20Muf&#39;ler!5e0!3m2!1sen!2sus!4v1592152940614!5m2!1sen!2sus" width="100%" height="100%" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
