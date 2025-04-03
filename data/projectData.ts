export const projectData = {
  analytics: [
    {
      name: "Medical Admission Analytics",
      slug: "medical-admission-analytics",
      imgUrl: "/images/medical-dashboard.png",
      blog: true,
    },
    {
      name: "Fitness Tracker Dashboard",
      slug: "fitness-tracker-dashboard",
      imgUrl: "/images/fitness_tracker_dashboard.png",
      blog: true,
    },
    {
      name: "Telecommunication Customer Churn Analysis",
      slug: "telecommunication-customer-churn-analysis",
      imgUrl: "/images/churn.jpg",
      blog: true,
    },
    {
      name: "Sales Dashboard",
      slug: "sales-dashboard",
      imgUrl: "/images/sales-dashboard.png",
      blog: false,
      url: process.env.NEXT_PUBLIC_CUSTOMER_SALES_DASHBOARD,
    },
    {
      name: "EPL Data Prediction",
      slug: "epl-data-prediction",
      imgUrl: "/images/epl.jpg",
      blog: true,
    },
    // {
    //   name: "Streaming Services Analysis",
    //   slug: "streaming-services-analysis",
    //   imgUrl: "/images/streaming-services.jpg",
    // },
  ],
  web: [
    {
      name: "Rent Your Home",
      slug: "rent-your-home",
      imgUrl: "/images/airbnbClone.png",
      blog: false,
      url: process.env.NEXT_PUBLIC_RENTAPP_URL,
    },
    {
      name: "Gmail Organizer",
      slug: "gmail-organizer",
      imgUrl: "/images/gmailOrganizer_delete.png",
      blog: false,
      url: process.env.NEXT_PUBLIC_GMAIL_ORGANIZER_CODE,
    },
    {
      name: "Python 2D Game",
      slug: "python-2d-game",
      imgUrl: "/images/ball_destroy.png",
      blog: false,
      url: process.env.NEXT_PUBLIC_BALL_DESTROY_CODE,
    },
    {
      name: "Landing Page with Three.js",
      slug: "threejs-landing-page",
      imgUrl: "/images/threejs.png",
      blog: false,
      url: process.env.NEXT_PUBLIC_LANDINGPAGE_CODE,
    },
    {
      name: "Amazon Clone",
      slug: "amazon-clone-website",
      imgUrl: "/images/amazon_clone.png",
      blog: false,
      url: process.env.NEXT_PUBLIC_AMAZON_CLONE_CODE,
    },
  ],
};
