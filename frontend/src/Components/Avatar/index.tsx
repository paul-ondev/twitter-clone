import React from "react";

import "./Avatar.scss";

interface AvatarProps {
  url: string;
}

function Avatar({ url }: AvatarProps) {
  return (
    <div className="avatar">
      <img src={url} alt="Avatar" />
    </div>
  );
}

export default Avatar;
