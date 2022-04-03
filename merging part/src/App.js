import "./App.css";
import Box from "./Box";

function App() {
  return (
    <div className="App">
      <div className="upper-box">
        <h1 className="sg">Meet Our People</h1>
        <div className="mini-box">
          <p className="text">
            “Our customer retention rate speaks volumes about the quality of the
            platform and the people I am working with.”
          </p>
          <p className="text">Avinash Thakur</p>
          <p className="text">Senior UI/UX Designer</p>
        </div>
        <div className="mini-box box2">
          <p className="dummy"> Dummy Image</p>
        </div>
      </div>

      <div className="middle-heading">LEARN MORE ABOUT OUR STORIES</div>
      <div className="middle"></div>

      <div className="middle-box">
        <Box />
      </div>

      <div className="footer"></div>
    </div>
  );
}

export default App;
