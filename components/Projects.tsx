import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectGrid from "./ProjectGrid";

const Projects = () => {
  return (
    <div id="projects" className="layout py-16 lg:py-32">
      <div className="flex flex-col justify-center items-center">
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
                <ProjectGrid
                  name="Medical Admission Analytics"
                  imgUrl="/images/medical-dashboard.png"
                />
                <ProjectGrid
                  name="Fitness Tracker Dashboard"
                  imgUrl="/images/fitness_tracker_dashboard.png"
                />
                <ProjectGrid
                  name="Telecommunication Customer Churn Analysis"
                  imgUrl="/images/churn.jpg"
                />
                <ProjectGrid
                  name="Fitness Tracker Dashboard"
                  imgUrl="/images/fitness_tracker_dashboard.png"
                />
                <ProjectGrid
                  name="Fitness Tracker Dashboard"
                  imgUrl="/images/fitness_tracker_dashboard.png"
                />
                <ProjectGrid
                  name="Fitness Tracker Dashboard"
                  imgUrl="/images/fitness_tracker_dashboard.png"
                />
                <ProjectGrid
                  name="Fitness Tracker Dashboard"
                  imgUrl="/images/fitness_tracker_dashboard.png"
                />
                <ProjectGrid
                  name="Fitness Tracker Dashboard"
                  imgUrl="/images/fitness_tracker_dashboard.png"
                />
              </div>
            </TabsContent>
            <TabsContent value="analytics">
              <div className="project-grid">
                <ProjectGrid
                  name="Fitness Tracker Dashboard"
                  imgUrl="/images/fitness_tracker_dashboard.png"
                />
                <ProjectGrid
                  name="Fitness Tracker Dashboard"
                  imgUrl="/images/fitness_tracker_dashboard.png"
                />
                <ProjectGrid
                  name="Fitness Tracker Dashboard"
                  imgUrl="/images/fitness_tracker_dashboard.png"
                />
                <ProjectGrid
                  name="Fitness Tracker Dashboard"
                  imgUrl="/images/fitness_tracker_dashboard.png"
                />
                <ProjectGrid
                  name="Fitness Tracker Dashboard"
                  imgUrl="/images/fitness_tracker_dashboard.png"
                />
                <ProjectGrid
                  name="Fitness Tracker Dashboard"
                  imgUrl="/images/fitness_tracker_dashboard.png"
                />
              </div>
            </TabsContent>
            <TabsContent value="web">
              <div className="project-grid">
                <ProjectGrid
                  name="Fitness Tracker Dashboard"
                  imgUrl="/images/fitness_tracker_dashboard.png"
                />
                <ProjectGrid
                  name="Fitness Tracker Dashboard"
                  imgUrl="/images/fitness_tracker_dashboard.png"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Projects;
