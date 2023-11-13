import React, { useState } from 'react';

const DownloadProfilePicture = ({ name }) => {
  const aboutText =
    "Ghost AI uses advanced AI technology to provide a secure platform for financial transactions. It uses a decentralized blockchain network, meaning that it's not controlled by any one entity, and all transactions are transparent and immutable. The network is also able to handle larger volumes of transactions without compromising on speed or security. And it ensures that all users have privacy and anonymity, which are key features of the platform. In a way, the 'ghosts' in this token are the AI algorithms that are constantly learning and improving, keeping the network up-to-date.";

  return (
    <div className="p-4 rounded-lg my-4 bg-[#01213b] text-white max-w-[400px] mx-auto">
      <div className="text-left">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2 text-brand-main">About Ghost AI</h2>
          <p className="text-brand-main">{aboutText}</p>
        </div>
      </div>
    </div>
  );
};

export default DownloadProfilePicture;
