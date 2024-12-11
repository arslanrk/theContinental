'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Coin from '../../public/assets/coin3.png';
import Coin2 from '../../public/assets/coin2-removebg.png';

const CoinFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(()=>{
    setIsFlipped(true);
  },[])

  return (
    <div className="coin-container absolute left-[100px] cursor-pointer" onClick={handleFlip}>
      <div className={`coin  shadow-[0_0_15px_5px_rgba(255,215,0,0.8)] ring-2 ring-[#f3cc8a] animate-pulse heroCard  ${isFlipped ? 'flip' : ''}`}>
        
      
        <div className="coin-face coin-front">
          <Image
            src={Coin}
            alt="Front of Coin"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div> 
        <div className="coin-face coin-back">
          <Image
            src={Coin2}
            alt="Back of Coin"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>

      </div>
    </div>
  );
};

export default CoinFlip;
