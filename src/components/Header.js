import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false,
    };
  }

  toggleSidebar = () => {
    this.setState({ showSidebar: !this.state.showSidebar });
  };

  render() {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "center" }}>
  <header className="h1">Hustlr.</header>
</div>

        <div id="dashboard-toggle" onClick={this.toggleSidebar}>☰</div>

        <div id="sidebar" className={this.state.showSidebar ? "show" : ""}>
          <button>Sign In</button>
          <button>Sign Up</button>
          <button onClick={() => (window.location.href = "#")}>Home</button>
          <button onClick={() => (window.location.href = "#about")}>About</button>
        </div>

        <div className="image-slider">
          <div className="slide-track">
            {/* Make sure you have these images in public/images/ */}
            <img src="/images/HeroJPG.jpg" alt="Image 1" />
            <img src="/images/HeroJPG2.jpg" alt="Image 2" />
            <img src="/images/HeroJPG3.jpg" alt="Image 3" />
            <img src="/images/HeroJPG4.jpg" alt="Image 4" />
            <img src="/images/HeroJPG.jpg" alt="Image 1 repeat" />
            <img src="/images/HeroJPG2.jpg" alt="Image 2 repeat" />
            <img src="/images/HeroJPG3.jpg" alt="Image 3 repeat" />
            <img src="/images/HeroJPG4.jpg" alt="Image 4 repeat" />
          </div>

          <div className="text-overlay">
            <h2>Empowering Freelancers & Clients</h2>
            <p>Seamlessly manage contracts, payments & Projects</p>

            <div className="search-box">
              <input type="text" placeholder="Search for any service..." />
              <button className="search-icon">🔍</button>
            </div>

            <div className="cta-buttons">
              <button className="cta">Find work</button>
              <button className="cta">Hire talent</button>
            </div>

            <div className="trusted-by">
              <span>Trusted by:</span>
              <img src="/images/meta-logo.png" alt="Meta" />
              <img src="/images/google-logo.png" alt="Google" />
              <img src="/images/netflix-logo.jpg" alt="Netflix" />
              <img src="/images/pg-logo.png" alt="P&G" />
              <img src="/images/paypal-logo.png" alt="PayPal" />
              <img src="/images/payoneer-logo.png" alt="Payoneer" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
