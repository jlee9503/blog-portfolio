import About from "@/components/About";
import Divider from "@/components/Divider";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div id="main">
      <div className="relative h-screen w-full bg-[url('/images/analytics-3.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="layout text-white gap-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-white text-center px-10">
            Data-driven decisions and seamless web experiences—that’s what I
            create.
          </h1>
          <div className="px-10 text-center text-xl lg:text-2xl">
            Welcome to my portfolio! Explore my projects in data analytics and
            web development, where I turn data into insights and ideas into
            functional web solutions.
          </div>
        </div>
      </div>

      <About />
      <Divider />
      <Projects />
    </div>
  );
}
