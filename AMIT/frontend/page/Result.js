import React from "react";
import { useLocation, Link } from "react-router-dom";
import StatusBadge from "../components/StatusBadge";
import Card from "../components/Card";

const Result = () => {
  const { state } = useLocation();

  // Define status colors based on the image: True is green, Fake/False should be red/orange
  const isTrue = state?.result?.toLowerCase() === "true";
  const resultColor = isTrue ? "text-green-400" : "text-red-400"; // Assuming a red/orange for 'Fake'
  const iconColor = isTrue ? "text-green-500 bg-green-900/40" : "text-red-500 bg-red-900/40";
  const accuracyColor = isTrue ? "text-green-400" : "text-orange-400"; // Orange for accuracy, regardless of result, or match result for emphasis

  if (!state || !state.result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <h1 className="text-white text-2xl">No result data found.</h1>
        <Link to="/" className="mt-4 text-blue-400 hover:text-blue-300">Go to Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Card className="bg-slate-800/80 backdrop-blur rounded-2xl border border-slate-700/50 shadow-xl">
          <div className="p-8 md:p-10 text-center">
            
            {/* Back Button and Title Area */}
            <div className="relative">
              <Link 
                to="/text-check" // Assuming the user came from text check
                className="absolute left-0 top-1 text-slate-400 hover:text-white transition-colors"
                aria-label="Go back to verify"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">Result</h2>
            </div>


            {/* Status Icon */}
            <div className={`flex justify-center mb-4 mx-auto w-20 h-20 rounded-full ${iconColor} p-2`}>
              {/* Checkmark or Exclamation Icon */}
              {isTrue ? (
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.503-1.605 1.748-3.042L13.748 4.298c-.755-1.442-2.741-1.442-3.5 0L3.333 16.958c-.755 1.437.21 3.042 1.75 3.042z" />
                </svg>
              )}
            </div>

            {/* Result Text */}
            {state.result && (
              <div className="mb-6">
                <p className={`text-3xl font-bold ${resultColor}`}>{state.result}</p>
              </div>
            )}
            
            {/* Accuracy Score */}
            {state.accuracy && (
              <div className="mb-8">
                <p className="text-slate-400 text-sm mb-1 uppercase tracking-wider">Confidence</p>
                <p className={`text-3xl font-bold ${accuracyColor}`}>
                  {state.accuracy}%
                </p>
              </div>
            )}

            {/* Sources List */}
            {state.sources && state.sources.length > 0 && (
              <div className="mt-8 text-left">
                <h3 className="text-lg font-semibold mb-4 text-white uppercase tracking-wider border-b border-slate-700/50 pb-2">Sources</h3>
                <div className="space-y-3">
                  {state.sources.map((s, i) => (
                    <a
                      key={i}
                      // Keep original link logic
                      href={s.link || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors duration-200 border border-slate-700/50"
                    >
                      <span className="text-slate-200 text-sm hover:text-white transition-colors truncate mr-4">
                        {s.title || s.displayLink || "Unnamed Source"}
                      </span>
                      {/* External Link Icon */}
                      <svg 
                        className="w-4 h-4 text-slate-400 flex-shrink-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-7-3l-7 7M10 10l-7 7m11-9h5v5"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Verify Another Button - Replaced Link with a styled button */}
            <Link
              to="/"
              className="mt-8 block w-full py-3 bg-blue-700/80 hover:bg-blue-600 transition-colors duration-300 rounded-xl text-white text-lg font-semibold shadow-lg shadow-blue-500/20"
            >
              Verify Another 
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Result;