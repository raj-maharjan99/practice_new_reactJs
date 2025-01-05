import React, { useState } from "react";

const CopyExample = () => {
  const [text, setText] = useState("This is the text to copy!");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 300); // Reset message after 2 seconds
      });
    } catch (error) {
      console.error("Failed to Copy", error);
    }
  };

  return (
    <div className="p-4">
      <p className="mb-2">{text}</p>
      <button
        className={`${
          copied ? "bg-orange-700" : "bg-blue-500"
        }  text-white py-2 px-4 rounded `}
        onClick={handleCopy}
      >
        {copied ? <p>Copied</p> : <p>Copy </p>}
      </button>
    </div>
  );
};

export default CopyExample;
