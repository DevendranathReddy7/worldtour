import styles from "./Homepage.module.css";
import Navbar from "./Navbar";

export default function Homepage() {
  return (
    <>

      <main className={styles.homepage}>
        <Navbar />
        <section>
          <h1>
            You travel the world.
            <br />
            We keeps track of your adventures.
          </h1>
          <h2>
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends how
            you have wandered the world.
          </h2>
        </section>

      </main>
    </>

  );
}
