import { Logo } from "assets";
import styles from "./styles.module.scss";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { useSheet } from "helpers/sheet";

const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const onClose = () => {
    setError("");
    setEmail("");
  };

  const { toast, closeSurveyToast, sendMessage, loading } = useSheet({
    closeForm: onClose,
    message: {
      success: "You've been added to the waitlist!",
      error: "Failed to add to waitlist, please try again later",
    },
  });

  console.log(toast, closeSurveyToast, loading);

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
      sendMessage({ email });
    } else {
      // error
      setError("Enter a valid email");
    }
  };

  return (
    <main className={styles.container}>
      {toast.show && (
        <div
          className={`${styles.toast} ${
            toast.type ? styles.success : styles.error
          }`}
        >
          <h3>{toast.heading}</h3>
          <p>{toast.text}</p>
        </div>
      )}
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
              speed={{ value: 50, type: "keyStrokeDelayInMs" }}
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
            name="email"
            disabled={loading}
          />
          <button onClick={handleSubmit}>
            {loading ? "loading..." : "Notify Me"}
          </button>
          <p className={styles.error}>{error}</p>
        </fieldset>
        <p className={styles.note}>
          We will notify you immediately our website is available to the public
        </p>
      </section>
    </main>
  );
};

export { Waitlist };
