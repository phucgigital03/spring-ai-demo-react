import { useState } from 'react'
import './App.css'

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

        <div>
          {activeTab === "generate-image" && <h1>generate image</h1>}
          {activeTab === "ask-ai" && <h1>ask ai</h1>}
          {activeTab === "generate-recipe" && <h1>generate recipe</h1>}
        </div>

      </div>
    </>
  )
}

export default App
