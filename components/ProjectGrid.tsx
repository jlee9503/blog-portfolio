"use client";

import Image from "next/image";
import { useState } from "react";

interface projectInfo {
  name: string;
  imgUrl: string;
}

const ProjectGrid = ({ name, imgUrl }: projectInfo) => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <div
      className="cursor-pointer relative group overflow-hidden rounded-lg transition-transform duration-300 shadow-2xl"
      onClick={() => setActiveProject(activeProject === name ? null : name)}
    >
      <div className="w-[200px] h-[200px] xl:w-[250px] xl:h-[250px]">
        <Image src={imgUrl} alt={name} fill className="object-cover" />
      </div>

      <div
        className={`absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white text-center transition-opacity duration-300 p-4 ${
          activeProject === name
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm">description</p>
      </div>
    </div>
  );
};

export default ProjectGrid;
