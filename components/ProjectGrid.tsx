"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface projectInfo {
  name: string;
  slug: string;
  imgUrl: string;
}

const ProjectGrid = ({ name, slug, imgUrl }: projectInfo) => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <div
      className="relative group overflow-hidden rounded-lg transition-transform duration-300 shadow-2xl"
      onClick={() => setActiveProject(activeProject === name ? null : name)}
    >
      <div className="w-[200px] h-[200px] xl:w-[250px] xl:h-[250px] group-hover:scale-105 transform transition-transform duration-300">
        <Image src={imgUrl} alt={name} fill className="object-cover" />
      </div>

      <div
        className={`absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center transition-opacity duration-300 p-4 ${
          activeProject === name
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <h3 className="text-lg font-bold">{name}</h3>
        {/* <p className="text-sm">description</p> */}
        <Link href={`/projects/${slug}`}>
          <Button className="cursor-pointer bg-[#cf404d] hover:bg-[#af4173] mt-4">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectGrid;
