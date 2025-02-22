import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Loader } from 'lucide-react';

function PurchaseFlow() {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsProcessing(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {isProcessing ? (
        <div className="text-center">
          <Loader size={48} className="text-primary animate-spin mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">PROCESSING PURCHASE</h1>
          <p className="text-gray-600">Please wait while we verify your transaction...</p>
        </div>
      ) : (
        <div className="text-center">
          <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-4">PURCHASE SUCCESSFUL!</h1>
          <p className="text-gray-600 mb-8">Your NFT has been added to your collection</p>
          <button
            onClick={() => navigate('/marketplace')}
            className="btn-primary"
          >
            Return to Marketplace
          </button>
        </div>
      )}
    </div>
  );
}

export default PurchaseFlow;