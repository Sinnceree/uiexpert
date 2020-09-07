import React from "react";
import { ReactComponent as NextArrow } from "../../assets/images/arrow.svg";
import { ReactComponent as LogitechLogo } from "../../assets/images/logitech-log.svg";
import { ReactComponent as TPLinkLogo } from "../../assets/images/tp-link.svg";
import { ReactComponent as HikVisonLogo } from "../../assets/images/hikvison.svg";
import { ReactComponent as DigitalXLogo } from "../../assets/images/digital-x-logo.svg";
import { ReactComponent as ExcelLogo } from "../../assets/images/excel-logo.svg";

const Blog = () => {
  return (
    <section className="blog-section">
      <h1 className="title">Our Blog</h1>
      <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur<br /> dapibus vehicula elit vel egestas.</p>

      <div className="blog-posts">
        <BlogItem
          title="Cutting-edge products launched through Logitech-Excel"
          desc="The Managing Director & Cluster Head India & South-West Asia at Logitech Sumanta Datta."
          thumb={require("../../assets/images/blog1.png")} />
        <BlogItem
          title="Cutting-edge products launched through Logitech-Excel"
          desc="The Managing Director & Cluster Head India & South-West Asia at Logitech Sumanta Datta."
          thumb={require("../../assets/images/blog2.png")} />
        <BlogItem
          title="Cutting-edge products launched through Logitech-Excel"
          desc="The Managing Director & Cluster Head India & South-West Asia at Logitech Sumanta Datta."
          thumb={require("../../assets/images/blog3.png")} />
      </div>

      <div className="partners">
        <TPLinkLogo className="logo" />
        <DigitalXLogo className="logo" />
        <ExcelLogo className="logo" />
        <LogitechLogo className="logo" />
        <HikVisonLogo className="logo" />
      </div>

    </section>
  )
}

export const BlogItem = (props: { title: string; desc: string; thumb: string }) => {
  return (
    <div className="blog-item">
      <img src={props.thumb} className="blog-thumb" alt="blog-img" />

      <div className="blog-content">
        <h1 className="title">{props.title}</h1>
        <p className="desc">{props.desc}</p>
        <NextArrow className="icon" />
      </div>
    </div>
  )
}


export default Blog;