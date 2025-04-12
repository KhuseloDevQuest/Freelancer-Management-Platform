import React from "react";

class Land extends React.Component {
  render() {
    return (
      <section className="categories">
        <h2>Explore Categories</h2>
        <div className="category-grid">
          <div className="category-card">
            <img src="/images/jobJPG.jpg" alt="Job Icon" />
            <p>Post and Apply for Jobs</p>
          </div>
          <div className="category-card">
            <img src="/images/taskJp.jpg" alt="Tasks Icon" />
            <p>Manage Tasks & Milestones</p>
          </div>
          <div className="category-card">
            <img src="/images/payment.jpg" alt="Payment Icon" />
            <p>Secure Milestone-Based Payment</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Land;
