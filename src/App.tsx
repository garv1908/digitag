import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ItemDisplay from './pages/ItemDisplay';
import CryptoWallet from './pages/CryptoWallet';
import ProductDetails from './pages/ProductDetails';
import PurchaseFlow from './pages/PurchaseFlow';
import ImportNFT from './pages/ImportNFT';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/marketplace" element={<ItemDisplay />} />
        <Route path="/wallet" element={<CryptoWallet />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/purchase" element={<PurchaseFlow />} />
        <Route path="/import-nft" element={<ImportNFT />} />
      </Routes>
    </Router>
  );
}

export default App;