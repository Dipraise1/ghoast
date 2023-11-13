import React from "react";
import Wrapper from "./shared/Wrapper";
import Heading from "./shared/Typography/Heading";

const TradingChart = () => {
  return (
    <Wrapper id={"tradeChart"} style="py-16 lg:min-h-[100vh]">
      <div className="w-full h-full flex flex-col items-center justify-start gap-10">
        <Heading text="devil's comet  to USD Chart" style={"text-center"} />
        <div className="w-full h-[800px]">
          <iframe
            height="50%"
            width="100%"
            id="geckoterminal-embed"
            src="https://coin360.com/coin-widget?coin=ethereum-eth&utm_source=embed_widget_coin" 
            allow="clipboard-write"
            allowFullScreen
          ></iframe>

        </div>
      </div>
    </Wrapper>
  );
};

export default TradingChart;
