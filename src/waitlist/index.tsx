import { Logo } from "assets";
import styles from "./styles.module.scss";

const Waitlist = () => {
  return (
    <main className={styles.container}>
      <section className={styles.imgSec}></section>
      <section className={styles.contentSec}>
        <Logo className={styles.logo} />
        <h1 className={styles.ttl}>
          Find Properties for <span>rent</span>
        </h1>
        <p className={styles.txt}>
          Explore a diverse range of listings, from stunning villas and
          luxurious apartments to prime commercial spaces in the beautiful
          mediterranean paradise of North Cyprus.
        </p>
        <fieldset className={styles.inputWrap}>
          <input placeholder="Enter your email" type="email" />
          <button>Notify Me</button>
        </fieldset>
        <p className={styles.note}>
          We will notify you immediately our website is available to the public
        </p>
      </section>
    </main>
  );
};

export { Waitlist };
