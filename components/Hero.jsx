import React from "react";
import Wrapper from "./shared/Wrapper";
import Image from "next/image";
import FilledButton from "./shared/Buttons/FilledButton";
import OutlinedButton from "./shared/Buttons/OutlinedButton";

const Hero = () => {
  return (
    <Wrapper id="hero" style="lg:h-[100vh] lg:max-h-[600px] lg:min-h-[600px]">
      <div className="w-full flex flex-col-reverse items-end justify-start lg:grid lg:grid-cols-2 gap-y-20 lg:gap-10 lg:py-8">
        <div className="flex-1 w-full flex flex-col lg:items-start items-center justify-center gap-8">
          <h1 className="md:text-[50px] md:leadning-[58px] sm:text-[46px] sm:leading-[54px] bg-gradient-to-r from-white-main to-brand-main inline-block bg-clip-text text-transparent lg:text-left text-center text-[40px] leading-[48px] font-[700] uppercase ">
            Welcome to GHOST AI! 
          </h1>
          <div className=" lg:w-[80%] w-full">
            <p className="text-white-main text-[16px] font-[500] text-center lg:text-left ">
              JUST TO BE SAFE!: Check URL:
              <a href="/" className="text-brand-main">
                https://GHOStAI.com
              </a>{" "}
              Ghost AI could provide an Anonymous Swap System that allows users to create "ghost wallets" - digital wallets that are completely anonymous and untraceable.
            </p>
          </div>

          <div className="w-full flex sm:flex-row flex-col items-center justify-center lg:justify-start gap-4 md:gap-7">
            <FilledButton text="Learn more" link="#learnMore" />
            <OutlinedButton text="telegram" link="/" />
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="relative md:h-[500px] sm:w-[500px] w-[400px]  h-[400px] ">
            <Image
              className="h-full w-full bounce"
              src={"/Assets/ProfilePics/ghostai.png"}
              alt=""
              fill
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
