import Image from 'next/image';

const skillIcons = [
  {
    name: "Data Preparation & Cleaning",
    url: "/data-preparation.svg",
    summary:
      "Ensuring data quality by handling missing values, removing inconsistencies, and transforming raw data into a structured format using Python (Pandas, NumPy), SQL and Excel.",
  },
  {
    name: "Machine Learning & Modeling",
    url: "/machine-learning.svg",
    summary:
      "Building and optimizing machine learning models to uncover patterns and make data-driven predictions using Scikit-Learn and statistical techniques.",
  },
  {
    name: "Data Visualization",
    url: "/data-visualization.svg",
    summary:
      "Turning complex datasets into clear, insightful visualizations using tools like Matplotlib, Seaborn, and Tableau to support data-driven decision-making.",
  },
  {
    name: "Web Development",
    url: "/web-development.svg",
    summary:
      "Developing responsive and dynamic web applications using JavaScript (Vue.js, React), HTML/CSS, and backend technologies (Next.js, C# .NET) to create seamless digital experiences.",
  },
];

const About = () => {
  return (
    <div id='about' className="layout py-24 lg:py-32">
      <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:px-16">
        <div className="relative w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] lg:flex-1/3">
          <Image
            src="/images/profile-pic.png"
            alt="profile-picture"
            fill
            className="object-contain"
          />
        </div>
        <div className="text-center px-8 pt-4 lg:flex-2/3">
          I’m Jungsu Lee, a former web developer with over two years of
          experience, now expanding my expertise in data analytics as a graduate
          student. My passion lies in transforming raw data into actionable
          insights while building seamless digital experiences. Explore my
          portfolio to see how I combine technology and data to solve real-world
          problems
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-center items-center mt-20 lg:mt-36 px-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {skillIcons.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col justify-center items-center gap-4"
            >
              <Image
                src={skill.url}
                alt={skill.name}
                width={100}
                height={100}
              />

              <div className="text-center lg:text-left">
                <div className="text-xl font-medium mb-2">{skill.name}</div>
                <div className="text-gray-500">{skill.summary}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About