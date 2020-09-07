import React from "react";
import WorkflowIll from "../../assets/images/workflow-ill.svg";

const Workflow = () => {
  return (
    <section className="workflow">
      <div className="left">
        <img src={WorkflowIll} alt="workflowimg" className="workflow-image" />
      </div>

      <div className="right">
        <h1 className="title">Our Workflow:</h1>
        <p className="desc">I always follow professional Workflow and provide you best<br /> service with resealable costs.</p>

        <div className="workflow-list">
          <div className="column">
            <WorkflowItem number="01" title="Your brief" desc="I always  professional Workflow and provide" color="#3D37F1" />
            <WorkflowItem number="03" title="Concept Design" desc="I always  professional Workflow and provide" color="#FFBA3F" />
            <WorkflowItem number="05" title="Review #01" desc="I always  professional Workflow and provide" color="#66659F" />
            <WorkflowItem number="07" title="Review #02" desc="I always  professional Workflow and provide" color="#37F1BE" />
            <WorkflowItem number="09" title="Final Design" desc="I always  professional Workflow and provide" color="#F13D37" />
          </div>
          <div className="column">
            <WorkflowItem number="02" title="Research" desc="I always  professional Workflow and provide" color="#9997DF" />
            <WorkflowItem number="04" title="Revision #01" desc="I always  professional Workflow and provide" color="#E66E6E" />
            <WorkflowItem number="06" title="Revision #02" desc="I always  professional Workflow and provide" color="#F17637" />
            <WorkflowItem number="08" title="Revision #03" desc="I always  professional Workflow and provide" color="#F137E5" />
          </div>
        </div>

      </div>

    </section>
  )
}

export const WorkflowItem = (props: { number: string; title: string; desc: string; color: string }) => {
  return (
    <div className="item">
      <div className="number" style={{ background: props.color }}>{props.number}</div>
      <div className="info">
        <h1 className="item-title">{props.title}</h1>
        <p className="item-desc">{props.desc}</p>
      </div>
    </div>
  )
}

export default Workflow;