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
            Turning Raw Data into Scalable Solutions and Strategic Insights
          </h1>
          <div className="px-10 text-center text-xl lg:text-2xl">
            Explore my work in data engineering and analytics — where I build
            pipelines, transform data, and deliver decision-ready dashboards
            using Python, SQL, and BI tools
          </div>
        </div>
      </div>

      <About />
      <Divider />
      <Projects />
    </div>
  );
}
