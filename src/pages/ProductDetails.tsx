import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const mockProduct = {
  id: '1',
  name: 'Luxury Leather Tote Bag',
  description: 'Handcrafted premium leather tote bag with gold-plated hardware and signature stitching. Perfect for both casual and formal occasions.',
  price: '0.5 ETH',
  colors: ['#8B4513', '#000000', '#F5F5DC'],
  images: [
    'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800'
  ]
};

function ProductDetails() {
  const navigate = useNavigate();
  useParams();
  const [selectedColor, setSelectedColor] = useState(mockProduct.colors[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === mockProduct.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? mockProduct.images.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <button onClick={() => navigate('/marketplace')} className="flex items-center text-primary hover:text-deep-blue mb-6">
        <ArrowLeft size={24} className="mr-2" />
        Back to Marketplace
      </button>

      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-12">
        {/* Left Side - Image Gallery */}
        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-lg bg-white">
            <img src={mockProduct.images[currentImageIndex]} alt={mockProduct.name} className="w-full h-full object-cover" />
          </div>
          <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Right Side - Product Details */}
        <div>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">{mockProduct.name}</h1>
              <div className="flex items-center space-x-2 mt-2 text-green-500">
                <CheckCircle size={24} />
                <span className="font-medium">VERIFIED BY BLOCKCHAIN</span>
              </div>
            </div>

            <p className="text-gray-600 mt-4 mb-6 leading-relaxed">{mockProduct.description}</p>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-3">Available Colors</h2>
              <div className="flex space-x-4">
                {mockProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-primary' : 'border-transparent'}`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-2">Price</h2>
              <p className="text-3xl font-bold text-primary">{mockProduct.price}</p>
              <p className="text-gray-500">≈ $905.75 USD</p>
            </div>

            <button onClick={() => navigate('/purchase')} className="w-full py-3 text-lg font-medium bg-primary text-white rounded-lg hover:bg-primary-dark">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;