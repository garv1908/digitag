import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wallet, ArrowLeft, RefreshCw, Send, Download } from 'lucide-react';

function CryptoWallet() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <button
        onClick={() => navigate('/marketplace')}
        className="flex items-center text-primary hover:text-deep-blue mb-6"
      >
        <ArrowLeft size={24} className="mr-2" />
        Back to Marketplace
      </button>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-center mb-8">
          <Wallet size={48} className="text-primary mr-4" />
          <h1 className="text-3xl font-bold">YOUR CRYPTO WALLET</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Wallet Balance</h2>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-primary">2.5 ETH</p>
                <p className="text-gray-500 mt-2">≈ $4,523.75 USD</p>
              </div>
              <button className="text-primary hover:text-deep-blue">
                <RefreshCw size={24} />
              </button>
            </div>
            <div className="flex gap-4 mt-6">
              <button className="btn-primary flex items-center">
                <Send size={20} className="mr-2" />
                Send
              </button>
              <button className="btn-primary flex items-center">
                <Download size={20} className="mr-2" />
                Receive
              </button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <div>
                  <p className="font-medium">Purchase: Gold Watch NFT</p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
                <span className="text-red-500 font-medium">-0.5 ETH</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <div>
                  <p className="font-medium">Sale: Designer Bag NFT</p>
                  <p className="text-sm text-gray-500">5 hours ago</p>
                </div>
                <span className="text-green-500 font-medium">+0.8 ETH</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <div>
                  <p className="font-medium">Purchase: Diamond Ring NFT</p>
                  <p className="text-sm text-gray-500">1 day ago</p>
                </div>
                <span className="text-red-500 font-medium">-1.2 ETH</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Your NFT Collection</h2>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-lg p-4 shadow-sm">
                  <img
                    src={`https://images.unsplash.com/photo-${item === 1 ? '1548036328-c9fa89d128fa' : item === 2 ? '1523275335684-37898b6baf30' : '1526045431048-f857369baa09'}?auto=format&fit=crop&q=80&w=400`}
                    alt={`NFT ${item}`}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <p className="font-medium">NFT #{item}</p>
                  <p className="text-sm text-gray-500">Owned since 2025</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoWallet;