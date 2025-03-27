import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectGrid from "./ProjectGrid";
import { projectData } from "@/data/projectData";

const Projects = () => {
  return (
    <div id="projects" className="layout py-16 lg:py-32 xl:min-h-[924px]">
      <div className="flex flex-col justify-center items-center xl:min-h-[668px]">
        <div className="text-3xl lg:text-4xl font-bold mb-2">Portfolio</div>
        <div>
          <Tabs
            defaultValue="all"
            className="w-full gap-5 flex flex-col justify-center items-center"
          >
            <TabsList className="lg:my-4">
              <TabsTrigger value="all" className="cursor-pointer">
                Overview
              </TabsTrigger>
              <TabsTrigger value="analytics" className="cursor-pointer">
                Analytics
              </TabsTrigger>
              <TabsTrigger value="web" className="cursor-pointer">
                Web Development
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="project-grid">
                {projectData.analytics.map((project) => (
                  <ProjectGrid
                    key={project.slug}
                    name={project.name}
                    slug={project.slug}
                    imgUrl={project.imgUrl}
                  />
                ))}
                {projectData.web.slice(0,2).map((project) => (
                  <ProjectGrid
                    key={project.slug}
                    name={project.name}
                    slug={project.slug}
                    imgUrl={project.imgUrl}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="analytics">
              <div className="project-grid">
                {projectData.analytics.map((project) => (
                  <ProjectGrid
                    key={project.slug}
                    name={project.name}
                    slug={project.slug}
                    imgUrl={project.imgUrl}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="web">
              <div className="project-grid">
                {projectData.web.map((project) => (
                  <ProjectGrid
                    key={project.slug}
                    name={project.name}
                    slug={project.slug}
                    imgUrl={project.imgUrl}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Projects;
