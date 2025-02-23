import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Watch, BellRingIcon as RingIcon, Gem, Link, Shirt, Shovel as Shoe, Search, Wallet, UserCircle, Upload, Briefcase, Gift, Footprints, Crown } from 'lucide-react';
import img1 from '../../assets/bags/bag1.png'
import img2 from '../../assets/bags/bag2.png' 
import img3 from '../../assets/bags/bag3.png' 
import img4 from '../../assets/bags/bag4.png' 
import img5 from '../../assets/bags/bag5.png' 
import img6 from '../../assets/bags/bag6.png' 
import img7 from '../../assets/bags/bag7.png' 
import img8 from '../../assets/bags/bag8.png' 
import img9 from '../../assets/bags/bag9.png' 

type Category = {
  id: string;
  name: string;
  icon: React.ReactNode;
};

const categories: Category[] = [
  { id: 'bags', name: 'Bags', icon: <Briefcase size={24} /> },
  { id: 'watches', name: 'Watches', icon: <Watch size={24} /> },
  { id: 'rings', name: 'Rings', icon: <Crown size={24} /> },
  { id: 'gems', name: 'Gems', icon: <Gem size={24} /> },
  { id: 'gifts', name: 'Gifts', icon: <Gift size={24} /> },
  { id: 'shirts', name: 'Shirts', icon: <Shirt size={24} /> },
  { id: 'shoes', name: 'Shoes', icon: <Footprints size={24} /> }
];

const mockProducts = [
  {
    id: 1,
    name: 'ChicCarry Leather Tote',
    price: '0.5 ETH',
    image: img1
  },
  {
    id: 2,
    name: 'SleekSatchel Handbag',
    price: '1.2 ETH',
    image: img2},
  {
    id: 3,
    name: 'Classic Elegance Clutch',
    price: '1.0 ETH',
    image: img3},
  {
    id: 4,
    name: 'Vintage Charm Crossbody',
    price: '0.8 ETH',
    image: img4}, 
  {
    id: 5,
    name: 'Artisan Craft Leather Sling',
    price: '2.1 ETH',
    image: img5},  
  {
    id: 6,
    name: 'Retro Revival Satchel',
    price: '0.9 ETH',
    image: img6},  
  {
    id: 7,
    name: 'Stylish Serenity Sling',
    price: '1.3 ETH',
    image: img7},
  {
    id: 8,
    name: 'Elegant Allure Tote',
    price: '2.3 ETH',
    image: img8},  
  {
    id: 9,
    name: 'Fusion Fashion Satchel',
    price: '1.7 ETH',
    image: img9},  
];

function ItemDisplay() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        {/* Profile Section */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <UserCircle size={40} className="text-primary" />
            <div>
              <h3 className="font-medium">Abrar Ahmed</h3>
              <p className="text-sm text-gray-500">abc@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-3 w-full p-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={() => navigate('/import-nft')}
            className="btn-primary w-full mb-3 flex items-center justify-center space-x-2"
          >
            <Upload size={20} />
            <span>Import NFT</span>
          </button>
          <button
            className="w-full p-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors flex items-center justify-center space-x-2"
          >
            <ShoppingBag size={20} />
            <span>View Collection</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-96">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search Products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pl-12"
            />
          </div>
          <button
            onClick={() => navigate('/wallet')}
            className="btn-primary flex items-center space-x-2"
          >
            <Wallet size={20} />
            <span>Crypto Wallet</span>
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-30 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-primary font-semibold mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemDisplay;