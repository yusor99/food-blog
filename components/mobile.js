import React, { useState } from "react";
import { AlignLeftOutlined, AlignRightOutlined } from "@ant-design/icons";
const Mobile = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState(false);
  const toggle = () => {
    setCollapsed(!isCollapsed);
    setActive(!active);
  };
  return (
    <>
      <div className="container">
        <div className="mobile-nav">
          <ul className={`active${active}`}>
            <li>Tips</li>
            <li>Lifestyle</li>
            <li>Recipes </li>
            <li>About</li>
          </ul>
          <div className="trigger-div">
            <div className="logo">
              <h4>Simple Food</h4>
            </div>
            {React.createElement(
              isCollapsed ? AlignRightOutlined : AlignLeftOutlined,
              {
                className: "trigger",
                onClick: toggle,
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Mobile;
