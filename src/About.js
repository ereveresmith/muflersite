import React from 'react';
import './Main.css'

const About = () => {
  return (
    <div className="Margins">
      <div className="TwoColumnGrid">
      <div className="ImgWrapper">
          <img alt="Image of mufflers" src="https://images.squarespace-cdn.com/content/v1/5e9fa98348d28b20b3f39b36/1587802695206-S94U5Y4Z3VDK6M8NIV9T/ke17ZwdGBToddI8pDm48kFNX2F7KAjgezu6RwzZph-UUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcJ0IUoXo9k8WPjylG-rh_XQEH1cq0KjOHxie2OO7TUYifMIp0AbkYT-Av59IncLpo/shop+old+pic.jpg?format=1500w"></img>
        </div>
        <div className="Section">
          <h1>About Us</h1>
          <p>Mighty Muf’ler has been the go to Muffler shop in Phoenix Arizona since 1979. From custom exhausts to catalytic converter replacements, Mighty Muf’ler can handle any exhaust system you need. It has been locally owned and operated since 1979. </p>
        </div>          
      </div>      
      <div className="TwoColumnGrid">        
        <div className="ImgWrapper">
          <img alt="Image of mufflers" src="https://images.squarespace-cdn.com/content/v1/5e9fa98348d28b20b3f39b36/1587802911818-QWRFQG252HQAG872NGVV/ke17ZwdGBToddI8pDm48kFNX2F7KAjgezu6RwzZph-UUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcJ0IUoXo9k8WPjylG-rh_XQEH1cq0KjOHxie2OO7TUYifMIp0AbkYT-Av59IncLpo/greg.jpg?format=1500w"></img>
        </div>
        <div className="Section">
          <h1>Meet Greg</h1>
          <p>Greg Stevens has been the owner/operator of Mighty Muf’ler since 1979. He has been working on exhaust systems for 40+ years and is the go to guy for anything involving a car’s exhaust. He will be the one to answer the phone and work on the car if need be.</p>
        </div>  
      </div>
    </div>
  );
}

export default About;
