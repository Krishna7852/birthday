import React, { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import ReactParticles from 'react-particles-js';
import particlesConfig from './particles.js';
import './App.css';
import dhaddy from './dhaddy.png';
import product from './image1.png';
import engineering from './image6.png';
import webDeveloper from './image4.svg';
import developers from './image5.svg';
import task from './image3_n.png';
import task_1 from './image3.svg';
 
function App() {
  return (
    <div className="main">
      <Particles>
        <Hero>
          <div className="container">
            <Info />
            <div className="row">
              {cards.map((card, i) => (
                <div className="column">
                  <Card>
                    <div className="card-title">{card.title}</div>
                    {card.subTitle && <h4>{card.subTitle}</h4>}
                    <div className="card-body">{card.description}</div>
                    <Image ratio={card.imageRatio} src={card.image} />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Hero>
      </Particles>
    </div>
  );
}

function Card({ children }) {
  // We add this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.
  const ref = useRef();

  // Keep track of whether card is hovered so we can increment ...
  // ... zIndex to ensure it shows up above other cards when animation causes overlap.
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      xys: [0, 0, 1],
      // Setup physics
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
    };
  });

  return (
    <animated.div
      ref={ref}
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        // Get mouse x position within card
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        // Get mouse y position within card
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        // Set animated values based on mouse position and card dimensions
        const dampen = 50; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.07 // Scale
        ];

        // Update values to animate to
        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        // Set xys back to original
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        )
      }}
    >
      {children}
    </animated.div>
  );
}

function Particles({ children }) {
  return (
    <div style={{ position: 'relative' }}>
      <ReactParticles
        params={particlesConfig}
        style={{
          position: 'absolute',
          zIndex: 1,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0
        }}
      />
      {children && <div style={{ position: 'relative' }}>{children}</div>}
    </div>
  );
}

function Hero({ children }) {
  return (
    <div className="hero">
      <div className="hero-body">{children}</div>
    </div>
  );
}

function Image({ ratio, src }) {
  return (
    <div className="image-container">
      <div className="image-inner-container">
        <div
          className="ratio"
          style={{
            paddingTop: ratio * 100 + '%'
          }}
        >
          <div className="ratio-inner">
            <img src={src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="info">
      Happy Birthday <h1>Sumit Sharma</h1> <img src={dhaddy} width="50px" height="80px" alt="" /> By Core HR creations
    </div>
  );
}

const cards = [
  {
    title: 'Krishna Prasad',
    subTitle: 'Happy Birthday, Sumit!!!',
    description:
      'May the year be filled with lots of new technologies, 2+ inches bigger Biceps,  and some great rides. Have a wonderful year filled with good health, and may all your wishes come true.',
    image: task,
    imageRatio: 784 / 1016
  },
  {
    title: 'Vinod',
    description:
      'Dude, Geek, Witty, Humility and what else to describe you!!!! May this day bring you countless happiness and endless joy and live with good health and serenity. Happy Birthday Sumit!!!!! Let all your dreams come true and lots of love from the team.',
    image: engineering,
    imageRatio: 839 / 1133
  },
  {
    title: 'Suba',
    description:
      'Wishing a very happy birthday! Let this 2021 be a dream come true year!😀',
    image: product,
    imageRatio: 839 / 1133
  },
  {
    title: 'Sangeetha',
    description:
      "Export your project as a high-quality React codebase. We're lazer focused on helping you build and iterate quickly, but expect that you'll eventually want to export and wrap things up in your favorite code editor.",
    image: product,
    imageRatio: 730 / 1030
  },
  {
    title: 'Bhushan',
    subTitle: 'Select happiness, joy, health, wealth from LIFE where year => ‘2021’;',
    description:
      "Happy birthday! I wish you plenty of joy today and every day of the coming year! You are a fantastic example of wisdom, leadership, and foresight. On your birthday, I wish you peace, good health, and happiness. You are the best mentor anyone could have asked for. I am very proud to work with you and see what you've been able to achieve. Happy birthday भायो",
    image: task_1,
    imageRatio: 730 / 1030
  },
  {
    title: 'Krishna Bhamre',
    description:
      'Under your leadership, we have achieved many things! Thanks for making it all happen. Sending you warm wishes on your birthday, Sumit Bhai. Have a great year ahead.💥🎂',
    image: webDeveloper,
    imageRatio: 839 / 1133
  },
  {
    title: 'Vivek Havalad',
    description:
      'You are not just an awesome leader but a great teacher as well. Happy birthday Sumit Bhai and may you have a wonderful day.🎂🎂',
    image: webDeveloper,
    imageRatio: 839 / 1133
  },
  {
    title: 'Sourabh',
    description:
      'Happy Birthday, Sumit sir. I wish that you remain the awesome person you have always been. Thanks for making work fun and being such a great mentor. Happy birthday!🎂🍰',
    image: webDeveloper,
    imageRatio: 839 / 1133
  },
  {
    title: 'Umakant',
    description:
      'Wishing you good health and happiness as you complete another trip around the sun. Today is a perfect day to tell you that you have been a wonderful friend, colleague, supporter, and guide. I really appreciate your helpful and motivating nature. You are an excellent mentor with a generous heart.Bhai Happy Birthday!',
    image: developers,
    imageRatio: 839 / 1133
  },
  {
    title: 'Sameer',
    description:
      'Wishing you tons of good fortune and success in all your life. It is truly a great experience to be a part of your team! We owe you so much for your constant support and perfect leadership! Wishing you Many Many Happy Returns of the day Sumit!',
    image: developers,
    imageRatio: 839 / 1133
  },
  {
    title: 'Sourav',
    description:
      'Happy Birthday Sumit bhai. Thank you for leading the team and for making our workplace an awesome place to be in. Wish you a long and successful career and also a life filled with health, joy and happiness. Many many happy returns of the day bhai',
    image: task_1,
    imageRatio: 839 / 1133
  },
];

export default App;
