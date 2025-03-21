import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

const MyButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 30px",
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "red",
        color: "white",
      }}
    >
      {label}
    </button>
  );
};

export default MyButton;
