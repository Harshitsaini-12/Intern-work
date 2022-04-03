import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h3 className="text">Some heading here</h3>
      </div>
      <div className="back-button">
        <button className="btn"> ← Go Back to Jobs</button>
      </div>

      <div className="apply">
        <div className="first-half">
          <h1 className="sales">Manager Sales (India)</h1>
          <h3 className="data">Multiple Locations</h3>
          <br />

          <div className="details">
            <div className="data1">
              Department <span>B2C Sales</span>
            </div>
            <div className="data2">
              Job posted on <span>Feb 4, 2022</span>
            </div>
            <div className="data3">
              Employment type <span>Permanent</span>
            </div>
            <div className="data4">
              Experience range <span>0 - N.A.</span>
            </div>
          </div>
        </div>
        <div className="second-half">
          <button id="btn-1">APPLY FOR THIS JOB</button>
          <button id="btn-2">SHARE</button>
        </div>
      </div>

      <div className="role-manager">
        <div className="job-descrption">
          <h3>ROLE: Manager - Sales - Day Shift</h3>
          <br />
          <p>
            <span className="span">Company Overview:</span>dolor sit amet,
            consectetur adipiscing elit. Tortor, risus, lacus vehicula orci id
            faucibus non tellus. A eget arcu nulla suspendisse. Purus purus
            tortor dolor diam enim nunc, amet tellus tempor. Mollis mauris, id
            ultrices id. In aliquet ac venenatis leo. Sit adipiscing quis
            vestibulum quis donec vel sed commodo lacinia. Quis nullam quis
            convallis integer est sed convallis cursus. Interdum ipsum nunc
            vitae egestas. Ullamcorper turpis non, turpis viverra in adipiscing
            eleifend. Lectus adipiscing enim nisi morbi arcu euismod morbi
            aenean imperdiet. Lorem in magnis tristique erat aliquet suspendisse
            commodo gravida. Diam consequat vel sit ultricies sed eget tincidunt
            aliquam. In ultricies risus, tincidunt senectus velit enim elit
            tincidunt. Fames volutpat tellus aliquam lobortis scelerisque
            vulputate et. Etiam laoreet neque, sed mauris imperdiet. Volutpat
            risus malesuada accumsan pretium lectus. Dui, amet, vitae ultricies
            accumsan lacus, volutpat mauris. Elementum luctus aliquam porttitor
            augue nulla. Pellentesque et libero phasellus euismod mollis
            ullamcorper. Purus, massa tristique consequat commodo, sit convallis
            odio nisi. Nunc nec pharetra massa nulla morbi non auctor neque.
          </p>
          <br />
          <h3>Job Title: Manager - Sales - Day Shift</h3>
          <h5>Location: Mumbai or Gurgaon, India</h5>
          <br />
          <p>
            <span className="span">About the role:</span> dolor sit amet,
            consectetur adipiscing elit. Tortor, risus, lacus vehicula orci id
            faucibus non tellus. A eget arcu nulla suspendisse. Purus purus
            tortor dolor diam enim nunc, amet tellus tempor. Mollis mauris, id
            ultrices id. In aliquet ac venenatis leo. Sit adipiscing quis
            vestibulum quis donec vel sed commodo lacinia.
          </p>
          <br />
          <p>
            <span className="span">Mandatory languages:</span> Fluency in
            English and Hindi
          </p>
          <br />
        </div>
        <div className="similar-job">
          <h3>SIMILAR JOBS</h3>
          <br />
          <h4 className="color">Senior Manager - Planning</h4>
          <p className="data">WeWork Chromium, Mumbai, Maharashtra, India</p>

          <h4 className="color">Manager- Social Media</h4>
          <p className="data">Multiple locations</p>

          <h4 className="color">Manager - Security Assurance</h4>
          <p className="data">WeWork Chromium, Mumbai, Maharashtra, India</p>

          <h4 className="color">Manager - CRM</h4>
          <p className="data">WeWork Chromium, Mumbai, Maharashtra, India</p>

          <h4 className="color">Sales Manager</h4>
          <p className="data">WeWork Chromium, Mumbai, Maharashtra, India</p>
        </div>
      </div>
    </div>
  );
}

export default App;
