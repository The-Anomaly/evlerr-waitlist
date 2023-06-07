import { Logo } from "assets";
import styles from "./styles.module.scss";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    const value = e.target.value;
    setEmail(value);
  };

  const handleSubmit = () => {
    setError("");
    if (regex.test(email)) {
      // submit
      console.log(email);
    } else {
      // error
      setError("Enter a valid email");
    }
  };

  return (
    <main className={styles.container}>
      <section className={styles.imgSec}></section>
      <section className={styles.contentSec}>
        <Logo className={styles.logo} />
        <h1 className={styles.ttl}>
          Find Properties for{" "}
          <span>
            <TypeAnimation
              sequence={[
                // Same String at the start will only be typed once, initially
                "rent",
                3000,
                "sale",
                3000,
                "short stay",
                3000,
              ]}
              speed={{value: 50, type: "keyStrokeDelayInMs"}}
              style={{ fontSize: "inherit", color: "inherit" }}
              repeat={Infinity}
            />
          </span>
        </h1>
        <p className={styles.txt}>
          Explore a diverse range of listings, from stunning villas and
          luxurious apartments to prime commercial spaces in the beautiful
          mediterranean paradise of North Cyprus.
        </p>
        <fieldset className={styles.inputWrap}>
          <input
            onChange={handleChange}
            placeholder="Enter your email"
            type="email"
            value={email}
          />
          <button onClick={handleSubmit}>Notify Me</button>
          <p>{error}</p>
        </fieldset>
        <p className={styles.note}>
          We will notify you immediately our website is available to the public
        </p>
      </section>
    </main>
  );
};

export { Waitlist };
