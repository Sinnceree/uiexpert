import React from "react";
import { ReactComponent as TestimonialsPics } from "../../assets/images/testo-pics.svg";
import { ReactComponent as Avatar } from "../../assets/images/avatar.svg";
import { ReactComponent as WaveHand } from "../../assets/images/waving-hand.svg";

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h1 className="title">What they say about us!</h1>
      <p className="desc">Customer Review Sites for Collecting Business & Product Reviews</p>

      <div className="info">
        <Avatar className="avatar" />
        <p className="message">Loved the design specially the color combination. Look forward to <br />work more in future.</p>
        <h1 className="name">Cris Angela</h1>
        <h2 className="job">Head of CsWeb</h2>
      </div>

      <div className="learnmore">
        <div className="left">
          <p className="title">Learn More About My Workflow:</p>
          <h1 className="desc-memo">I'm always hungry for creativity.<br /> Available for hire</h1>
        </div>
        <div className="right">
          <button className="blue-btn"><WaveHand className="wave-icon" /> Wave Me</button>
        </div>
      </div>

      <TestimonialsPics className="testimonials-bg" />
    </section>
  )
}

export default Testimonials;