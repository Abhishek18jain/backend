import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import saveHistory from "../utils/saveHistory";

const SourceCheck = () => {
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  const verify = async () => {
    if (!url.trim()) return;

    const res = await axios.post("http://localhost:5000/api/source/verify", { url });

    saveHistory({
      type: "source",
      input: url,
      result: res.data.safe,
      accuracy: res.data.domainAge,
    });

    navigate("/result", { state: res.data });
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <Input
        placeholder="Enter URL to verify"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button onClick={verify} className="mt-4">
        Verify Source
      </Button>
    </div>
  );
};

export default SourceCheck;
