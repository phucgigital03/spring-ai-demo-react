import React, { useState } from "react";

function AskAI() {
  const [prompt, setPrompt] = useState("");
  const [chatResponse,setChatRes] = useState("");

  const handleAsk = async () => {
    try {
      const response = await fetch(`http://localhost:8080/ask-ai-options?prompt=${prompt}`);
      const data = await response.text();
      console.log("Asking Data: ", data);
      setChatRes(data)
    } catch (error) {
      console.log("Error asking AI: ", error);
    }
  };

  return (
    <div className="tab-content">
      <h2>Talking to AI</h2>
      <input
        type="text"
        placeholder="Enter a prompt for asking"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={handleAsk}>Asking Now</button>

      <div className="output">
        <p>{chatResponse}</p>
      </div>
    </div>
  );
}

export default AskAI;
