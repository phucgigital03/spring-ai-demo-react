import React, { useState } from "react";

function ImageGenerator() {
  const [prompts, setPrompts] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  const handleGenerate = async () => {
    try {
      const response = await fetch(`http://localhost:8080/generate-image-options?prompt=${prompts}`)
      const urls = await response.json()
      console.log("generate url: " , urls);
      setImageUrls(urls)
    } catch (error) {
        console.error("Error generating image : ", error)
    }
  };

  return (
    <div className="tab-content">
      <h2>Image Generator</h2>
      <input
        type="text"
        placeholder="Enter prompts for generating image"
        value={prompts}
        onChange={(e) => setPrompts(e.target.value)}
      />
      <button onClick={handleGenerate}>Generate</button>

      <div className="image-grid">
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Generated ${index}`} />
        ))}
        {[...Array(4 - imageUrls.length)].map((_, index) => (
          <div
            key={index + imageUrls.length}
            className="empty-image-slot"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ImageGenerator;
