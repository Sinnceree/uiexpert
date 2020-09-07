import React from "react";
import { ReactComponent as DeisgnBlock } from "../../assets/images/design.svg";
import { ReactComponent as SketchBlock } from "../../assets/images/sketch.svg";
import { ReactComponent as TestBlock } from "../../assets/images/testing.svg";

const Phases = () => {
  return (
    <section className="phases-sections">
      <DeisgnBlock className="phase-block" />
      <SketchBlock className="phase-block" />
      <TestBlock className="phase-block" />
    </section>
  )
}

export default Phases;