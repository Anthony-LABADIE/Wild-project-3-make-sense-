import React from "react";

export default function CustomButton({ onPress }) {
  return (
    <button type="button" onClick={onPress}>
      Click on me
    </button>
  );
}


