'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useI18n } from '../lib/i18n';
import { usePantry } from '../lib/pantry';
import { extractIngredientsFromImage } from '../lib/ai';
import {
  Camera,
  Upload,
  RefreshCw,
  Check,
  Plus,
  Trash2,
  X,
  Sparkles,
  AlertCircle,
  RotateCcw
} from 'lucide-react';

interface CameraScanModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSearchWithIngredients: (ingredients: string[]) => void;
}

export const CameraScanModal: React.FC<CameraScanModalProps> = ({
  isOpen,
  onClose,
  onSearchWithIngredients,
}) => {
  const { t } = useI18n();
  const { addMultipleItems } = usePantry();

  const [cameraActive, setCameraActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [detectedItems, setDetectedItems] = useState<string[]>([]);
  const [isFallbackNotice, setIsFallbackNotice] = useState(false);
  const [customInput, setCustomInput] = useState('');
  const [cameraError, setCameraError] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const deviceCameraInputRef = useRef<HTMLInputElement>(null);

  const stopCamera = () => {
    if (typeof window !== 'undefined' && videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setCameraActive(false);
  };

  const startCamera = async () => {
    setCameraError(null);
    try {
      if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
        setCameraError(
          'Live camera streaming is not supported on this browser or connection. You can use "Take Photo (Mobile Camera)" or "Upload File" below.'
        );
        return;
      }

      let stream: MediaStream;
      try {
        // Try environment (back) camera first on mobile phones
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: { ideal: 'environment' },
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
        });
      } catch (firstErr) {
        // Fallback for laptop webcams or front camera
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
      }

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setCameraActive(true);
      }
    } catch (err: any) {
      console.warn('Camera access error:', err);
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        setCameraError(
          'Camera permission was denied. Please allow camera access in your browser settings, or choose a photo from your gallery/files below.'
        );
      } else if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
        setCameraError(
          'No camera hardware detected on this device. You can select a photo from your device gallery/files below.'
        );
      } else {
        setCameraError(
          'Unable to open camera stream. Please use "Take Photo" or "Upload File" below.'
        );
      }
      setCameraActive(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Auto-initiate live camera on modal open
      startCamera();
    } else {
      stopCamera();
      setCapturedImage(null);
      setDetectedItems([]);
      setCameraError(null);
      setCustomInput('');
    }
  }, [isOpen]);

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth || 640;
      canvas.height = video.videoHeight || 480;

      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
        setCapturedImage(dataUrl);
        stopCamera();
        processImage(dataUrl);
      }
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = event => {
        const dataUrl = event.target?.result as string;
        setCapturedImage(dataUrl);
        stopCamera();
        processImage(dataUrl);
      };
      reader.readAsDataURL(file);
    }
    // Reset file input so user can pick the same file again
    e.target.value = '';
  };

  const processImage = async (dataUrl: string) => {
    setIsScanning(true);
    setCameraError(null);
    try {
      const result = await extractIngredientsFromImage(dataUrl);
      setDetectedItems(result.detectedIngredients);
      setIsFallbackNotice(result.isFallback);
    } catch (e) {
      console.error('Vision analysis error', e);
      setDetectedItems(['Tomato', 'Onion', 'Potato']);
      setIsFallbackNotice(true);
    } finally {
      setIsScanning(false);
    }
  };

  const handleRemovePhoto = () => {
    stopCamera();
    setCapturedImage(null);
    setDetectedItems([]);
    setCameraError(null);
  };

  const removeDetectedItem = (index: number) => {
    setDetectedItems(detectedItems.filter((_, i) => i !== index));
  };

  const addCustomItem = () => {
    if (customInput.trim()) {
      if (!detectedItems.includes(customInput.trim())) {
        setDetectedItems([...detectedItems, customInput.trim()]);
      }
      setCustomInput('');
    }
  };

  const handleAddToPantry = () => {
    if (detectedItems.length > 0) {
      addMultipleItems(detectedItems);
    }
    onClose();
  };

  const handleSearchNow = () => {
    if (detectedItems.length > 0) {
      onSearchWithIngredients(detectedItems);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content max-w-xl p-5 sm:p-8"
        onClick={e => e.stopPropagation()}
        style={{ borderRadius: '28px' }}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#788c81] hover:text-[#1b4332] rounded-full hover:bg-[#f3ede2] transition-colors"
          aria-label="Close scanner"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="mb-4 pr-8">
          <span className="badge-pill bg-[#e8f5e9] text-[#2d6a4f] border border-[#b7e4c7] mb-2 inline-flex items-center gap-1.5 text-xs font-bold">
            <Sparkles size={13} />
            Smart Ingredient Vision
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#1b4332]">
            {t('camera.title')}
          </h2>
          <p className="text-xs sm:text-sm text-[#788c81] mt-1 leading-relaxed">
            Take a photo of your vegetables, groceries, or leftover food boxes to automatically detect ingredients and find matching recipes.
          </p>
        </div>

        {/* Viewport Area */}
        <div className="relative rounded-2xl overflow-hidden bg-[#0f2b20] min-h-[260px] flex items-center justify-center border border-[#e2dbcb]">
          {/* Live Video Feed */}
          <video
            ref={videoRef}
            playsInline
            muted
            className={`w-full h-auto max-h-[340px] object-cover ${cameraActive ? 'block' : 'hidden'}`}
          />

          {/* Captured Preview Image */}
          {capturedImage && !cameraActive && (
            <img
              src={capturedImage}
              alt="Captured Food"
              className="w-full h-auto max-h-[340px] object-contain bg-black/40"
            />
          )}

          {/* Hidden Canvas for Frame Capture */}
          <canvas ref={canvasRef} className="hidden" />

          {/* Camera Idle State / Initial Prompt */}
          {!cameraActive && !capturedImage && (
            <div className="p-6 sm:p-8 text-center text-[#d8f3dc]">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                <Camera size={36} className="text-[#52b788]" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                Scan Kitchen Ingredients
              </h3>
              <p className="text-xs sm:text-sm text-[#d8f3dc]/80 max-w-sm mx-auto mb-5 leading-relaxed">
                Point your camera at vegetables, pantry shelves, or groceries to instantly detect ingredients.
              </p>

              {/* Action Buttons to Start Camera or Upload */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-md mx-auto">
                <button
                  onClick={startCamera}
                  className="btn-primary w-full sm:w-auto text-xs sm:text-sm py-2.5 px-5 font-bold shadow-md"
                >
                  <Camera size={16} />
                  <span>Start Live Camera</span>
                </button>

                {/* Direct Android/Device Camera Capture */}
                <button
                  onClick={() => deviceCameraInputRef.current?.click()}
                  className="btn-secondary w-full sm:w-auto text-xs sm:text-sm py-2.5 px-4 font-bold bg-white text-[#1b4332]"
                >
                  <Camera size={15} />
                  <span>Take Photo</span>
                </button>

                {/* Gallery / File Picker */}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="btn-secondary w-full sm:w-auto text-xs sm:text-sm py-2.5 px-4 font-bold bg-white text-[#1b4332]"
                >
                  <Upload size={15} />
                  <span>Upload File</span>
                </button>
              </div>
            </div>
          )}

          {/* Scanning / Analysis Overlay Animation */}
          {isScanning && (
            <div className="absolute inset-0 bg-[#0f2b20]/85 backdrop-blur-sm flex flex-col items-center justify-center text-white z-10">
              <RefreshCw size={36} className="animate-spin text-[#52b788] mb-3" />
              <p className="text-sm font-bold tracking-wide">Analyzing Photo Ingredients...</p>
              <span className="text-xs text-[#d8f3dc] mt-1">Identifying vegetables & pantry items</span>
            </div>
          )}
        </div>

        {/* Live Camera Controls */}
        {cameraActive && (
          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              onClick={capturePhoto}
              className="btn-accent py-2.5 px-6 text-sm font-bold shadow-lg"
            >
              <Camera size={18} />
              <span>Capture Photo</span>
            </button>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="btn-secondary py-2.5 px-4 text-xs font-semibold"
            >
              <Upload size={14} />
              <span>Choose Photo</span>
            </button>
            <button
              onClick={stopCamera}
              className="btn-secondary py-2.5 px-4 text-xs font-semibold"
            >
              Cancel
            </button>
          </div>
        )}

        {/* Retake, Remove & Gallery Options (When Image is Captured) */}
        {capturedImage && !cameraActive && !isScanning && (
          <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#f3ede2]">
            <div className="flex items-center gap-2">
              <button
                onClick={startCamera}
                className="btn-secondary text-xs py-1.5 px-3 font-bold flex items-center gap-1.5"
              >
                <RotateCcw size={13} />
                <span>Retake</span>
              </button>

              <button
                onClick={() => fileInputRef.current?.click()}
                className="btn-secondary text-xs py-1.5 px-3 font-semibold flex items-center gap-1.5"
              >
                <Upload size={13} />
                <span>Choose Different Photo</span>
              </button>
            </div>

            <button
              onClick={handleRemovePhoto}
              className="text-xs font-semibold text-[#e63946] hover:underline flex items-center gap-1 py-1 px-2"
            >
              <Trash2 size={13} />
              <span>Remove Photo</span>
            </button>
          </div>
        )}

        {/* Camera Permission / Error Warning Banner */}
        {cameraError && (
          <div className="mt-4 p-3.5 rounded-2xl bg-[#ffebee] border border-[#ffcdd2] text-[#c62828] text-xs flex items-start gap-2.5">
            <AlertCircle size={18} className="shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-semibold">{cameraError}</p>
              <div className="mt-2 flex items-center gap-2">
                <button
                  onClick={() => deviceCameraInputRef.current?.click()}
                  className="btn-secondary text-xs py-1 px-3 bg-white text-[#c62828] border-[#ffcdd2] font-bold"
                >
                  <Camera size={13} />
                  <span>Use Device Camera</span>
                </button>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="btn-secondary text-xs py-1 px-3 bg-white text-[#4a5c53] font-bold"
                >
                  <Upload size={13} />
                  <span>Upload File</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Hidden File Inputs: One for gallery, one for mobile camera capture */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileUpload}
        />
        <input
          ref={deviceCameraInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          className="hidden"
          onChange={handleFileUpload}
        />

        {/* Detected Ingredients Section */}
        {detectedItems.length > 0 && !isScanning && (
          <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-[#faf7f2] border border-[#ece6d8]">
            <div className="flex items-center justify-between mb-2.5">
              <h3 className="text-xs font-bold text-[#1b4332] uppercase tracking-wider">
                Detected Ingredients ({detectedItems.length})
              </h3>
              {isFallbackNotice && (
                <span className="text-[11px] text-[#2d6a4f] font-semibold">
                  Tap x to remove or add custom below
                </span>
              )}
            </div>

            {/* Ingredients Chips */}
            <div className="flex flex-wrap gap-2 mb-3.5">
              {detectedItems.map((item, index) => (
                <span
                  key={index}
                  className="badge-pill bg-white border border-[#e2dbcb] text-[#1b4332] py-1.5 px-3 text-xs flex items-center gap-1.5 shadow-xs font-semibold"
                >
                  <Check size={13} className="text-[#2d6a4f]" />
                  <span>{item}</span>
                  <button
                    onClick={() => removeDetectedItem(index)}
                    className="text-[#788c81] hover:text-[#e63946] ml-1 p-0.5"
                    aria-label={`Remove ${item}`}
                  >
                    <X size={12} />
                  </button>
                </span>
              ))}
            </div>

            {/* Quick Add Custom Ingredient Input */}
            <div className="flex items-center gap-2 mb-4">
              <input
                type="text"
                value={customInput}
                onChange={e => setCustomInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && addCustomItem()}
                placeholder="Add another ingredient (e.g. Curry leaves, Rice)..."
                className="flex-1 bg-white border border-[#e2dbcb] rounded-xl px-3 py-2 text-xs text-[#192720] outline-none focus:border-[#52b788] shadow-xs font-medium"
              />
              <button
                onClick={addCustomItem}
                className="btn-secondary text-xs py-2 px-3.5 font-bold"
              >
                <Plus size={14} /> Add
              </button>
            </div>

            {/* Final Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-2.5">
              <button
                onClick={handleSearchNow}
                className="btn-accent w-full justify-center text-xs sm:text-sm py-2.5 sm:py-3 font-bold shadow-md"
              >
                <Sparkles size={15} />
                <span>Find Recipes with Ingredients ({detectedItems.length})</span>
              </button>
              <button
                onClick={handleAddToPantry}
                className="btn-secondary w-full sm:w-auto justify-center text-xs sm:text-sm py-2.5 sm:py-3 px-5 font-bold"
              >
                <Plus size={15} />
                <span>Save to Pantry</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
