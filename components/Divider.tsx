import Link from "next/link";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const Divider = () => {
  return (
    <div className="layout">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center secondary-bg w-full py-16 lg:py-20 lg:px-16">
        <div className="text-white text-2xl lg:text-3xl font-semibold">
          Explore my experience and skills
        </div>
        <Button className="bg-transparent cursor-pointer border-2 mt-4 lg:mt-0">
          <Link href='/jungsu-lee_resume.docx' target="_blank" download={true} className="flex gap-1 justify-center items-center font-semibold">
            <Download />Download Resume
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Divider;
