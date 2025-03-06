import React from "react";

const Authority = ({
  name,
  title,
  educational_qualification,
  brief_description,
}) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg shadow-2xl transition-all duration-300">
      <img src="./image/avater.png" alt={`${name}'s avatar`} className="w-24 h-24 rounded-full mb-4 object-cover" />
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <h5 className="text-md text-gray-600">{title}</h5>
      <h6 className="text-sm text-gray-500">{educational_qualification}</h6>
      <p className="text-sm text-gray-700 mt-2">{brief_description}</p>
    </div>
  );
};

export default Authority;
