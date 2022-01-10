import Particles from 'react-tsparticles';
const particlesInit = (main) => {
  console.log(main);

  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
};
const particlesLoaded = (container) => {
  console.log(container);
};
export default function Particle() {
  return (
      <div className="outer-container">
      <Particles
        id="particles-js"
        init={particlesInit}
        loaded={particlesLoaded}
        canvasClassName="testCanvas"
        //   container={@link home--banner--text--wrapper}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 40,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            "size": {
              "value": 3.5,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 1,
                "speed_max": 1,
                "size_min": 0.1,
                "sync": false
              }
            },
          },
          detectRetina: true,
        }}
      />

      </div>
  );
}
