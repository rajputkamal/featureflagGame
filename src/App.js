import "./styles/style.css";
import "antd/dist/antd.css";
import { Switch } from "antd";
import { useState } from "react";

function App() {
  const [showFeatureOne, setShowFeatureOne] = useState(true);
  const [showFeatureTwo, setShowFeatureTwo] = useState(true);
  const [showFeatureThree, setShowFeatureThree] = useState(true);

  return (
    <div className="app">
      <h1>Toggle feature</h1>

      <main>
        <div className="features">
          <div className="features_content">
            <h3>Feature 1</h3>
            <Switch
              defaultChecked
              onClick={() => setShowFeatureOne(!showFeatureOne)}
            />
          </div>
          <div className="features_content">
            <h3>Feature 2</h3>
            <Switch
              defaultChecked
              onClick={() => setShowFeatureTwo(!showFeatureTwo)}
            />
          </div>
          <div className="features_content">
            <h3>Feature 3</h3>
            <Switch
              defaultChecked
              onClick={() => setShowFeatureThree(!showFeatureThree)}
            />
          </div>
        </div>

        {/* //Main screen section */}
        <div className="screen">
          <div className="main-screen"></div>

          <div className="screens">
            <div className={`feature-screen ${!showFeatureOne ? "hide" : ""}`}>
              <span className="feature-box"></span>
              <span className="feature-title">F1</span>
            </div>

            <div className={`feature-screen ${!showFeatureTwo ? "hide" : ""}`}>
              <span className="feature-box"></span>
              <span className="feature-title">F2</span>
            </div>

            <div className={`feature-screen ${!showFeatureThree ? "hide" : ""}`}>
              <span className="feature-box"></span>
              <span className="feature-title">F3</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
