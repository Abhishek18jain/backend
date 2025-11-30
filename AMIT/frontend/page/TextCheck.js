import React, { useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import saveHistory from "../utils/saveHistory";
import Card from "../components/Card";
import { Link } from "react-router-dom"; // Import Link for back button functionality

const TextCheck = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const verify = async () => {
    if (!text.trim()) return;
    setLoading(true);

    // Keep original logic
    try {
      const res = await axios.post("http://localhost:5000/api/text/verify", { text });

      saveHistory({
        type: "text",
        input: text,
        result: res.data.result,
        accuracy: res.data.accuracy,
      });

      navigate("/result", { state: res.data });
    } catch (error) {
      console.error("Verification failed:", error);
      // Handle error gracefully, maybe show an error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-6">
        {/* Back Button and Title Area */}
        <div className="relative">
          <Link 
            to="/" 
            className="absolute left-0 top-1 text-slate-400 hover:text-white transition-colors"
            aria-label="Go back to home"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white tracking-tight">Verify Text</h1>
            <p className="text-slate-400 text-md mt-1">Enter news headline or article to check</p>
          </div>
        </div>

        {/* Text Input Card */}
        <Card className="bg-slate-800/80 backdrop-blur rounded-2xl border border-slate-700/50 shadow-xl p-6">
          <div className="space-y-6">
            <textarea
              className="w-full h-48 bg-slate-900/60 border border-slate-700/50 text-white rounded-xl p-4 text-base placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 resize-none backdrop-blur-sm"
              placeholder="Enter news text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              disabled={loading}
            />

            {/* VERIFY Button - Matches the Orange button style in the image */}
            <Button 
              onClick={verify} 
              disabled={loading}
              // Tailwind classes for the orange button: from-orange-500/90 via-orange-600/90 to-orange-700/90
              className="w-full py-4 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 disabled:from-slate-600 disabled:to-slate-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.01] disabled:hover:scale-100 shadow-xl shadow-orange-500/20 disabled:shadow-none flex items-center justify-center gap-3 text-lg"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Checking...</span>
                </>
              ) : (
                <span>VERIFY</span>
              )}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TextCheck;