import React, { useState } from "react";
import Link from "next/link";
import Wrapper from "../shared/Wrapper";
import Heading from "../shared/Typography/Heading";
import { TbSquareRoundedChevronRightFilled } from "react-icons/tb";
import { BiLinkExternal } from "react-icons/bi";
import { FaCopy, FaWallet, FaMoneyBill } from "react-icons/fa";
import { Ethheck2 } from "react-icons/bs";
import Tooltip from "@mui/material/Tooltip";

const BuyApepe = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("soon");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  const options = [
    {
      text: "Liquidity locked ",
      link: "https://www.coinscope.co/lockers/token/0xc47672cd8f50Ae03156684cB523B1ED4BB349f2F",
      linkText: "Lock",
    },
    {
      text: "Contract tbr",
      link: "https://www.coinscope.co/coin/1-apepe",
      linkText: "Coinscope",
    },
    {
      text: "De.Fi score 100/100!",
      link: "https://de.fi/scanner/contract/0x463464927671a2e8d406a1a3e64093d42a181c44?56",
      linkText: "Security",
    },
  ]; 

  return (
    <div className="w-full">
      <Wrapper id="buy-apepe" style="py-16">
        <div className="w-full flex flex-col items-center lg:justify-center justify-start gap-10">
          <Heading text="Buy GHOST AI" />
          <div className="w-full grid lg:grid-cols-2 gap-8">
            <div className="w-full flex flex-col lg:items-start items-center justify-start gap-6">
              <h2 className="text-white-main font-bold text-[28px] hidden lg:flex">
                Buy GHOST AI directly on our website!
              </h2>
              <p className="text-white-main/70 text-[20px] leading-[28px] font-semibold">
                {" "}
                You can buy GHOST AI on our website by exchanging it with any cryptocurrency or fiat currency (service provided by Bogged.Finance).
              </p>
              {options.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-full flex items-center justify-start gap-3"
                  >
                    <TbSquareRoundedChevronRightFilled className="text-white-main h-[20px] w-[20px]" />
                    <p className="text-brand-main text-[18px] font-[500]">
                      {item.text}
                    </p>
                    <Link
                      href={item.link}
                      className="flex items-center justify-start gap-1 text-white-main/70 text-[18px] font-semibold"
                    >
                      {item.linkText} <BiLinkExternal />
                    </Link>
                  </div>
                );
              })}
              <hr className="w-full border-dashed" />
              <p className="text-white-main/70 text-[20px] leading-[28px] font-semibold">
                Contract Details
              </p>
              <Tooltip title={copied ? "Copied" : "Copy"} arrow placement="top">
                <div
                  onClick={copyToClipboard}
                  className="h-[46px] w-full lg:w-auto flex items-center lg:justify-start justify-between gap-4 px-4 rounded-[8px] bg-white-main/50 cursor-pointer"
                >
                  <p className="text-white-main/80 text-[18px] font-medium sm:inline-block hidden">
                  soon
                  </p>
                  <p className="text-white-main/80 text-[18px] font-medium sm:hidden inline-block">
                  soon
                  </p>
                  {copied ? (
                    <Ethheck2 className="text-white-main/80 h-[20px] w-[20px]" />
                  ) : (
                    <FaCopy className="text-white-main/80 h-[20px] w-[20px]" />
                  )}
                </div>
              </Tooltip>
              <div className="w-full flex sm:flex-row flex-col gap-6 items-center justify-start">
                <button className="h-[46px] sm:w-[220px] w-full flex items-center justify-center gap-2 bg-white-main/50 rounded-[8px] text-white-main/80 text-[18px] font-medium">
                  {" "}
                  <FaWallet className="h-[20px] w-[20px]" />
                  Add to MetaMask
                </button>
                <button className="h-[46px] sm:w-[200px] w-full flex items-center justify-center gap-2 bg-white-main/50 rounded-[8px] text-white-main/80 text-[18px] font-medium">
                  {" "}
                  <FaMoneyBill className="h-[20px] w-[20px]" />
                  Buy on Uniswap
                </button>
              </div>
            </div>
            <div className="w-full flex items-start justify-start">
            <iframe
                src="https://app.uniswap.org/#/swap?exactField=input&exactAmount=10&inputCurrency=0x6b175474e89094c44da98b954eedeac495271d0f"
                height="660px"
                width="100%"
              ></iframe>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default BuyApepe;
