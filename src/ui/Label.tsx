import React from "react";

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children, required = false, className = "" }) => {
  return (
    <label htmlFor={htmlFor} className={`block text-sm font-medium text-gray-700 ${className}`}>
      {children}
      {required && <span className="text-red-500"> *</span>}
    </label>
  );
};

export default Label;
