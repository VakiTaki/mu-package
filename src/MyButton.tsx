import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

const MyButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      {label}
    </button>
  );
};

export default MyButton;
