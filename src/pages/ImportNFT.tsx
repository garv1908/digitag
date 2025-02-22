import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, ImageIcon, Loader } from 'lucide-react';
import { motion } from 'framer-motion';

const ImportNFT = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isImporting, setIsImporting] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFiles(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFiles(files[0]);
    }
  };

  const handleFiles = (file: File) => {
    if (file.type.startsWith('image/')) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select an image file');
    }
  };

  // Handles the NFT import process with a 3-second loading animation
  const handleImportNFT = () => {
    setIsImporting(true);
    setTimeout(() => {
      navigate('/wallet'); // Redirects to wallet page
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
      {isImporting ? ( // Show loading screen during import
        <div className="text-center">
          <Loader size={48} className="text-primary animate-spin mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">IMPORTING NFT</h1>
          <p className="text-gray-600">Please wait while we add your NFT to your collection...</p>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <center>
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Import NFT</h1>
          </center>
          

          <div className="bg-white rounded-xl shadow-lg p-8">
            <motion.div
              className={`border-2 border-dashed rounded-lg p-8 text-center ${
                isDragging ? 'border-primary bg-primary/5' : 'border-gray-300'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              animate={{
                scale: isDragging ? 1.02 : 1,
                borderColor: isDragging ? '#0466C8' : '#E5E7EB',
              }}
            >
              {preview ? (
                <div className="space-y-4">
                  <img
                    src={preview}
                    alt="Preview"
                    className="max-w-md mx-auto rounded-lg"
                  />
                  <button
                    onClick={() => {
                      setSelectedFile(null);
                      setPreview(null);
                    }}
                    className="btn-primary"
                  >
                    Choose Different Image
                  </button>
                </div>
              ) : (
                <>
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ImageIcon className="text-gray-400" size={32} />
                  </div>
                  <p className="text-lg text-gray-800 mb-2">
                    Drag and drop your NFT image here
                  </p>
                  <p className="text-gray-600 mb-4">
                    or click to select from your computer
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="btn-primary inline-flex items-center space-x-2 cursor-pointer"
                  >
                    <Upload size={20} />
                    <span>Choose File</span>
                  </label>
                </>
              )}
            </motion.div>

            {selectedFile && !isImporting && (
              <div className="mt-8">
                <button
                  onClick={handleImportNFT}
                  className="btn-primary w-full py-3 text-lg"
                >
                  Import NFT to Collection
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImportNFT;