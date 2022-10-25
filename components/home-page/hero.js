import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.png"
          alt="An Image showing Vasiliy"
          width={100}
          height={100}
        />
      </div>
      <h1>Hi,I am Vasiliy</h1>
      <p>I blog about web3 development</p>
    </section>
  );
}
