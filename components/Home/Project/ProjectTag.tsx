import React from "react";

type ProjectTagProps = {
  name: string;
  onClick: (tag: string) => void;
  isSelected: boolean;
};

const ProjectTag = ({ name, onClick, isSelected }: ProjectTagProps) => {
  const buttonStyles = isSelected
    ? "border-purple-700"
    : "border-slate-600 hover:border-purple-600 dark:hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
