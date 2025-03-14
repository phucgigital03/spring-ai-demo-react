import { useState } from 'react'
import './App.css'
import ImageGenerator from './components/ImageGenerator';
import AskAI from './components/AskAI';
import RecipeGenerator from './components/RecipeGenerator';
import AudioUploader from './components/AudioUploader';

function App() {
  const [activeTab, setActiveTab] = useState("generate-image");

  const handleChange = (tab)=>{
    setActiveTab(tab)
  }

  return (
    <>
      <div className='App'>
        <button
          className={activeTab === "generate-image" ? "active" : ""}
          onClick={()=>{handleChange("generate-image")}}
        >
          Image Generator
        </button>
        <button
          className={activeTab === "ask-ai" ? "active" : ""}
          onClick={()=>{handleChange("ask-ai")}}
        >
          Ask AI
        </button>
        <button
          className={activeTab === "generate-recipe" ? "active" : ""}
          onClick={()=>{handleChange("generate-recipe")}}
        >
          Recipe Generator
        </button>
        <button
          className={activeTab === "audio-transcriber" ? "active" : ""}
          onClick={()=>{handleChange("audio-transcriber")}}
        >
          Audio Transcriber
        </button>

        <div>
          {activeTab === "generate-image" && <ImageGenerator/>}
          {activeTab === "ask-ai" && <AskAI/>}
          {activeTab === "generate-recipe" && <RecipeGenerator/>}
          {activeTab === "audio-transcriber" && <AudioUploader/>}
        </div>

      </div>
    </>
  )
}

export default App
