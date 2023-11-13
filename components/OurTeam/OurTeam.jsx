import React from "react";
import Wrapper from "../shared/Wrapper";
import Heading from "../shared/Typography/Heading";
import TeamCard from "./TeamCard";

const OurTeam = () => {
  return (
    <div className="w-full">
      <Wrapper id="ourTeam" style="py-16 ">
        <div className="w-full flex flex-col items-center lg:justify-center justify-start gap-10">
          <Heading text="more ?" />
          <div className="w-full flex sm:flex-row flex-col items-center justify-center gap-10">
            
          <p className="font-[400] text-white-main text-[18px] text-center">{`Ghost AI could provide an Anonymous Swap System that allows users to create "ghost wallets" - digital wallets that are completely anonymous and untraceable. These wallets would be linked to a user's public key, but the private key would be stored in a secure, off-chain location. This would give users the peace of mind that their transactions are completely anonymous and untraceable

`}</p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default OurTeam;
