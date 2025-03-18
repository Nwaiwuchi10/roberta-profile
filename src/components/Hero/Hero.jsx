import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import whatsapp from "../../assets/whatsapp.png";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import "./Hero.css";
const Hero = () => {
  const phoneNumber = +14698985517;
  // const phoneNumber = "+1(781)351‑8993";
  const WhatsappClick = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            className="primaryText"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            Hey There,
            <br />
            I'm Tina Nicole Blackwood.
          </motion.span>
          <motion.span
            // className={css.sec}
            className="secondaryText"
            // style={{ width: "55%" }}
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            Tina Nicole Blackwood is a Financial Consultant and Wealth Creator
            living in USA,
            <br />
            who has over 15 years of professional experience, and has merits of
            awards as well as Professional Certificate/ license in Europe ,
            North-American and African.
          </motion.span>
        </div>
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <div className={css.personwhy}>
            <motion.img
              variants={slideIn("up", "tween", 0.5, 1.3)}
              src="./rety.jpeg"
              // src="/bety.jpeg"
              alt=""
              className={css.personimgdiv}
            />
          </div>
        </motion.div>
        <br />

        <div className={css.number}>+14698985517</div>

        {/* <br /> */}

        <a className={css.email} href="mailto:tinanicoleblackwood@gmail.com">
          {/* <span>
            {" "}
            <SiGmail style={{ color: "black" }} />
          </span>{" "} */}
          tinanicoleblackwood@gmail.com
        </a>
        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">15</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img src="./certificate.png" alt="" />
            <span>CERTIFIED FINANCIAL CONSULTANT</span>
            <span></span>
          </motion.div>
        </div>
      </motion.div>
      <div className="whatsapp-img-div">
        <div className="whatsapp-img-size" onClick={WhatsappClick}>
          <img src={whatsapp} alt="whatsapp" className="whatsapp-img" />
        </div>{" "}
      </div>
    </section>
  );
};

export default Hero;
