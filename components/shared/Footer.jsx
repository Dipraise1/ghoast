import React from "react";
import Wrapper from "./Wrapper";
import Heading from "./Typography/Heading";
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <Wrapper id="contact" style="py-16  relative">
      <footer className="w-full flex flex-col items-center justify-start gap-20">
        <div className="w-full flex flex-col items-center justify-start">
        <Heading text="Follow Us" />
        <div className="w-full flex items-center justify-center gap-8">
          <div className="h-[70px] w-[70px] flex items-center justify-center rounded-full bg-white-main cursor-pointer">
            <BsTwitter className="h-[36px] w-[36px]" />
          </div>
          <div className="h-[70px] w-[70px] flex items-center justify-center rounded-full bg-white-main cursor-pointer">
            <FaTelegramPlane className="h-[36px] w-[36px]" />
          </div>
        </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
        <Heading text="Disclaimer" />
        <p className="font-[400] text-white-main text-[18px] text-center">{`👻 **Ghost AI Fun Disclaimer** 👻

Welcome to the world of Ghost AI, where the only thing spooky is our commitment to making finance as fun as a haunted house! 🎃👻

Disclaimer: No actual ghosts were harmed, summoned, or involved in the making of Ghost AI. Our AI algorithms may be mysterious, but they're here to help, not haunt.

Remember, investing in Ghost AI is not like playing hide-and-seek with specters. It's a serious financial decision, so beware of the ghostly market fluctuations! 👀📈

Ghost AI is not responsible for any unexpected apparitions, spectral encounters, or friendly poltergeists that may or may not occur during your investment journey. 👻💰

By using Ghost AI, you agree that our AI may have a mischievous sense of humor, and occasional ghostly whispers might just be market insights in disguise.

Happy haunting, and may your investments be as ethereal as our AI algorithms! 🚀👻💸`}</p>
        </div>
        <p className="font-[400] text-white-main text-[16px] text-center absolute bottom-4">
          © {year} GHOST AI.com All rights reserved.
        </p>
      </footer>
    </Wrapper>
  );
};

export default Footer;
