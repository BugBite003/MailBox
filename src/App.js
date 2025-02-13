const React = require("react");
const { useState } = require("react");
require("./style.css");

const EmailApp = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`app-container ${sidebarOpen ? "shifted" : ""}`}>
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="profile">
          <img src="download.jpg" className="circular-img" alt="Profile" />
          <p className="email">avishkartech8@gmail.com</p>
        </div>
        <ul>
          <li><a href="#">Inbox</a></li>
          <li><a href="#">Sent</a></li>
          <li><a href="#">Drafts</a></li>
          <li><a href="#">Trash</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>

      {/* Navbar */}
      <div className="navbar-container">
        <nav className={`navbar ${sidebarOpen ? "shifted" : ""}`}>
          <div className="left-section">
            <button className="toggle-btn" onClick={toggleSidebar}>☰</button>
            <h1>Inbox</h1>
          </div>
          <ul class="menu">
                <li class="search-icon" id="searchIcon"></li>
          </ul>
        </nav>
      </div>

      {/* Email Content */}
      <div className={`content-container ${sidebarOpen ? "shifted" : ""}`}>
        <div className="email-list">
          <div className="email-item">
            <img src="mail-inbox-app (1).png" alt="Profile" className="email-img" />
            <div className="email-content">
              <p className="email-subject">Opening for Sales Manager</p>
              <p className="email-preview">Hello,</p>
            </div>
            <span className="star">☆</span>
          </div>
          
          <div className="email-item">
            <img src="mail-inbox-app (1).png" alt="Profile" className="email-img" />
            <div className="email-content">
              <p className="email-subject">Business dinner invitation</p>
              <p className="email-preview">Hello,</p>
            </div>
            <span className="star">☆</span>
          </div>
          
          <div className="email-item">
            <img src="mail-inbox-app (1).png" alt="Profile" className="email-img" />
            <div className="email-content">
              <p className="email-subject">Application for Job Title</p>
              <p className="email-preview">Hello,</p>
            </div>
            <span className="star">☆</span>
          </div>
          
          <div className="email-item">
            <img src="mail-inbox-app (1).png" alt="Profile" className="email-img" />
            <div className="email-content">
              <strong>Sarah Williams</strong>
              <p className="email-subject">Project Update</p>
              <p className="email-preview">Latest report attached...</p>
            </div>
            <span className="star">☆</span>
          </div>
          
          <div className="email-item">
            <img src="mail-inbox-app (1).png" alt="Profile" className="email-img" />
            <div className="email-content">
              <strong>James Brown</strong>
              <p className="email-subject">Client Meeting</p>
              <p className="email-preview">Scheduled for Monday...</p>
            </div>
            <span className="star">☆</span>
          </div>

          <div className="email-item">
            <img src="mail-inbox-app (1).png" alt="Profile" className="email-img" />
            <div className="email-content">
              <strong>Tony Stark</strong>
              <p className="email-subject">Mark 1</p>
              <p className="email-preview">Ready</p>
            </div>
            <span className="star">☆</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailApp;
