"use client";
import acmeLogo from "@/app/landing/assets/logo-acme.png";
import quantumLogo from "@/app/landing/assets/logo-quantum.png";
import echoLogo from "@/app/landing/assets/logo-echo.png";
import celestialLogo from "@/app/landing/assets/logo-celestial.png";
import pulseLogo from "@/app/landing/assets/logo-pulse.png";
import apexLogo from "@/app/landing/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <>
      <div id="customers" className="py-8 md:py-12 bg-white">
        <div className="container">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            <motion.div
              className="flex gap-14 flex-none pr-14"
              animate={{
                translateX: "-50%",
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Image
                src={acmeLogo}
                alt="acme logo"
                className="logo-ticker-image"
              />
              <Image
                src={quantumLogo}
                alt="quantum logo"
                className="logo-ticker-image"
              />
              <Image
                src={echoLogo}
                alt="echo logo"
                className="logo-ticker-image"
              />
              <Image
                src={celestialLogo}
                alt="celestial logo"
                className="logo-ticker-image"
              />
              <Image
                src={pulseLogo}
                alt="pulse logo"
                className="logo-ticker-image"
              />
              <Image
                src={apexLogo}
                alt="apex logo"
                className="logo-ticker-image"
              />
              {/* second set of logo  for animation */}
              <Image
                src={acmeLogo}
                alt="acme logo"
                className="logo-ticker-image"
              />
              <Image
                src={quantumLogo}
                alt="quantum logo"
                className="logo-ticker-image"
              />
              <Image
                src={echoLogo}
                alt="echo logo"
                className="logo-ticker-image"
              />
              <Image
                src={celestialLogo}
                alt="celestial logo"
                className="logo-ticker-image"
              />
              <Image
                src={pulseLogo}
                alt="pulse logo"
                className="logo-ticker-image"
              />
              <Image
                src={apexLogo}
                alt="apex logo"
                className="logo-ticker-image"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
