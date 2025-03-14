import axios from "axios";
import { useState } from "react";

function AudioUploader() {
  const [file, setFile] = useState(null);
  const [transcription, setTranscription] = useState("");

  const handleChange = (e) => {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  };

  const handleGenerate = async () => {
    const formData = new FormData();
    formData.append('file', file);
    
    try {
        const response = await axios.post('http://localhost:8080/api/transcribe', formData, {
            headers: {
                'Content-Type':'multipart/form-data',
            }
        });
        setTranscription(response.data);
    } catch (error) {
        console.error("Error transcribing audio", error);
    }
  };

  return (
    <div className="tab-content">
      <h2>AudioUploader</h2>
      <div className="file-input">
        <input type="file" accept="audio/*" onChange={(e) => handleChange(e)} />
      </div>

      <button onClick={handleGenerate}>Generate</button>

      <div className="output">
        <h2>Transcription Result</h2>
        <p>{transcription}</p>
      </div>
    </div>
  );
}

export default AudioUploader;
