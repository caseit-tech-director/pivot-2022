import styles from '../../styles/modules/_header.module.scss';
import MaxLayout from '../Layout/MaxLayout';
// import Particle from '../particle';
import Particles from 'react-tsparticles';

const particlesInit = () => {
  // console.log(main);
  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
};
const particlesLoaded = () => {
  console.log(container);
};
export default function HomeBanner(props) {
  return (
    <div className="bg-color--primary test">
      <div id="container">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          canvas={{
            position: 'absolute',
          }}
          options={{
            fpsLimit: 60,
            background: {
              position: 'absolute !important',
            },
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
                speed: 1,
                decay: 0.0003,
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
              size: {
                value: 3.5,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  speed_max: 1,
                  size_min: 0.1,
                  sync: false,
                },
              },
            },
            detectRetina: true,
          }}
        ></Particles>
      </div>

      <MaxLayout className="center--banner">
        <div
          id="home--banner--text--wrapper"
          className={styles['home--banner--text--wrapper']}
        >
          <div className={styles['header--text']}>
            <h1 className={styles['logo--heading']}>{props.header}</h1>
            <div className="overline">{props.overline}</div>
          </div>
          <p>{props.paragraph}</p>
        </div>
      </MaxLayout>
    </div>
  );
}
