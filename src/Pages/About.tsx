import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import '../CSS/About.css'
import Trip1 from "../Assests/Resturant4.jpg";
import Trip2 from "../Assests/Resturant4.jpg";
import Trip3 from "../Assests/Res4.webp";
import Trip4 from "../Assests/Res4.webp";
import Trip5 from "../Assests/Res5.jpeg";
const About: React.FC = () => {
  const typedElement = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (typedElement.current) {
      new Typed(typedElement.current, {
        strings: ['<i>First</i> sentence.', '& a second sentence.'],
        typeSpeed: 50,
      });
    }
  }, []);

  return (
    <div className='body'>
      <div>
        <span id="element" ref={typedElement}></span>
      </div>

      <div className="box">
        <span style={{ '--i': 1 } as React.CSSProperties}>
          <img src={Trip1} alt="Pic2" />
        </span>
        <span style={{ '--i': 3 } as React.CSSProperties}>
          <img src={Trip2} alt="Pic4" />
        </span>
        <span style={{ '--i': 5 } as React.CSSProperties}>
          <img src={Trip3} alt="Pic4" />
        </span>
        <span style={{ '--i': 2 } as React.CSSProperties}>
          <img src={Trip4} alt="Pic3" />
        </span>
        <span style={{ '--i': 4 } as React.CSSProperties}>
          <img src={Trip5} alt="Pic2" />
        </span>
        <span style={{ '--i': 6 } as React.CSSProperties}>
          <img src={Trip3} alt="Pic3" />
        </span>
        <span style={{ '--i': 7 } as React.CSSProperties}>
          <img src={Trip5} alt="Pic4" />
        </span>
        <span style={{ '--i': 8 } as React.CSSProperties}>
          <img src={Trip4} alt="Pic3" />
        </span>
      </div>
    </div>
  );
}

export default About;
