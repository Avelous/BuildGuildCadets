/* eslint-disable */
import React from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;

// displays a page header

export default function Header({ link, title, subTitle1, subTitle2, ...props }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "1.2rem" }}>
      <div style={{ display: "flex", flexDirection: "column", flex: 1, alignItems: "start" }}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Title level={4} style={{ margin: "0 0.5rem 0 0" }}>
            {title}
          </Title>
        </a>
        <Text type="secondary" style={{ textAlign: "left" }}>
          {subTitle1}
        </Text>
        <Text type="secondary" style={{ textAlign: "left" }}>
          {subTitle2}
        </Text>
      </div>
      {props.children}
    </div>
  );
}

Header.defaultProps = {
  link: "https://github.com/Avelous/SpeedBuilds",
  title: "🕍 Speed Builds",
  subTitle1: "Speed Builds react to live changes in ETH price fed from chainlink oracles!.",
  subTitle2: "How do they react? 🤔 Mint and find out",
};
