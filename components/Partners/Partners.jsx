import React from 'react';
import Image from 'next/image';
import Wrapper from '../shared/Wrapper';
import Heading from '../shared/Typography/Heading';

const Partners = () => {
  return (
    <div className='w-full'>
      <Wrapper id="partners" style="py-16">
        <div className="w-full flex flex-col items-center lg:justify-center justify-start gap-10">
          <Heading text="Partners" />
          <div className='w-full flex items-center justify-center xs:justify-between gap-9 flex-wrap'>
            <a href="https://dexscreener.com/Eth/0xc47672cd8f50ae03156684cb523b1ed4bb349f2f" target="_blank" rel="noopener noreferrer">
              <div className='w-[200px] sm:w-[250px] h-[100px] sm:h-[150px] flex items-center justify-center relative '>
                <Image src="/Assets/Partners/dexscreenercom.png" alt='' fill className='object-contain' />
              </div>
            </a>
            <a href="https://www.dextools.io/app/en/bnb/pair-explorer/0xc47672cd8f50ae03156684cb523b1ed4bb349f2f" target="_blank" rel="noopener noreferrer">
              <div className='w-[200px] sm:w-[250px] h-[100px] sm:h-[150px] flex items-center justify-center relative '>
                <Image src="/Assets/Partners/dextools.png" alt='' fill className='object-contain' />
              </div>
            </a>
            <a href="https://www.geckoterminal.com/Eth/pools/0xc47672cd8f50ae03156684cb523b1ed4bb349f2f?utm_source=coingecko&utm_medium=referral&utm_campaign=searchresults" target="_blank" rel="noopener noreferrer">
              <div className='w-[200px] sm:w-[250px] h-[100px] sm:h-[150px] flex items-center justify-center relative '>
                <Image src="/Assets/Partners/coingecko.png" alt='' fill className='object-contain' />
              </div>
            </a>
            <a href="https://coinmarketcap.com/dexscan/Eth/0xc47672cd8f50ae03156684cb523b1ed4bb349f2f/" target="_blank" rel="noopener noreferrer">
              <div className='w-[200px] sm:w-[250px] h-[100px] sm:h-[150px] flex items-center justify-center relative '>
                <Image src="/Assets/Partners/coinmarketcap.png" alt='' fill className='object-contain' />
              </div>
            </a>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Partners;
