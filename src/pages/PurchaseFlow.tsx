import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Loader, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      {isProcessing ? (
        <div className="text-center">
          <Loader size={48} className="text-primary animate-spin mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">PROCESSING PURCHASE</h1>
          <p className="text-gray-600">Please wait while we verify your transaction...</p>
        </div>
      ) : (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-12 text-center max-w-lg w-full"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="text-green-500" size={40} />
          </motion.div>

          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Purchase Successful!
          </h1>

          <p className="text-gray-600 mb-8">
            Your transaction has been processed and verified on the blockchain.
            The NFT has been added to your digital wallet.
          </p>

          <div className="space-y-4">
            <button
              onClick={() => navigate('/wallet')}
              className="btn-primary w-full py-3"
            >
              View in Wallet
            </button>

            <Link
              to="/marketplace"
              className="inline-flex items-center space-x-2 text-gray-800 hover:text-primary transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Shopping</span>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default PurchaseFlow;