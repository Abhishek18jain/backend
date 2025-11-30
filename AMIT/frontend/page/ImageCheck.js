import React, { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const ImageCheck = () => {
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  const handleFile = (e) => {
    setError("Image verification is coming soon!");
    const img = e.target.files[0];
    if (img) setPreview(URL.createObjectURL(img));
  };

  return (
    <div className="max-w-3xl mx-auto mt-12 px-4">

      <div className="bg-[#12202F] p-6 rounded-xl border border-gray-700 mb-6">
        <input
          type="file"
          onChange={handleFile}
          className="text-white mb-4 w-full"
          accept="image/*"
        />

        {error && (
          <div className="bg-red-600/30 text-red-300 p-3 rounded-lg mb-4 border border-red-600">
            {error}
          </div>
        )}

        {preview && (
          <img
            src={preview}
            alt="preview"
            className="w-full rounded-lg mb-4 border border-gray-700"
          />
        )}

        <Button disabled className="opacity-50 cursor-not-allowed">
          Verify Image (Coming Soon)
        </Button>
      </div>
    </div>
  );
};

export default ImageCheck;
