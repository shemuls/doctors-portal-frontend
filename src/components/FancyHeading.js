import React from "react";

export default function FancyHeading({ title, subTitle }) {
  return (
    <div className="text-center">
      <h4 className="text-uppercase s-text-primary">{title}</h4>
      <h2 className="s-text-secondary display-6">{subTitle}</h2>
    </div>
  );
}
