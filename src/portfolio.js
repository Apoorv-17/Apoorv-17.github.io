/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Apoorv",
  logo_name: "apoorv.ydv()",
  nickname: "Apoorv-17 / MauT",
  full_name: "Apoorv Yadav",
  subTitle:
    "Full Stack Developer, Machine Learning Enthusiast. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1JcOkXp1TocHEh8TlOAb9ujfq17BjwOvs/view?usp=sharing",
  mail: "mailto:apoorv.ydv17@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Apoorv-17",
  linkedin: "https://www.linkedin.com/in/apoorv-yadav-1a54571b7/",
  gmail: "apoorv.ydv17@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "",
  instagram: "",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using React Native",
        "⚡ Creating application backend in NodeJs, PHP",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "logos:c",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "logos:c-plusplus",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Android App Development",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Certifications by deeplearning.ai and Stanford Online",
        "⚡ Experience with 10+ Projects",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#702963",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "logos:numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:streamlit",
          style: {
            color: "#D22B2B",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Vellore Institute of Technology",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "vit.png",
      alt_name: "VIT",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Operating System, etc.",
        "⚡ I have also completed various online courses for ML/DL, Web Development, Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've learnt under my Computer Engineering course. ",
      ],
      website_link: "https://chennai.vit.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "deeplearning.ai",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/G723QC6EGE4D",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning Specialization",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/G723QC6EGE4D",
      alt_name: "deeplearning.ai",
      color_code: "#47A048",
    },
    {
      title: "Sequence Models",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/3THJZESJA7C7",
      alt_name: "deeplearning.ai",
      color_code: "#F6B808",
    },
    {
      title: "Convolutional Neural Networks",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/DG8Z3PKFU6PL",
      alt_name: "deeplearning.ai",
      color_code: "#2AAFED",
    },
    {
      title: "Structuring Machine Learning Projects",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/ZPC5YBT2N9WS",
      alt_name: "deeplearning.ai",
      color_code: "#E2405F",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/TLK2TRH4A2T7",
      alt_name: "Google",
      color_code: "#7A7A7A",
    },
    {
      title:
        "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/LWEXV55BQMWA",
      alt_name: "deeplearning.ai",
      color_code: "#7CFC00",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed two internships. I've mostly done projects on my own and I am actively looking for internships.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Samsung PRISM Research Intern",
          company: "Samsung R&D Institute India",
          company_url: "https://www.samsungprism.com/",
          logo_path: "prism_logo.png",
          duration: "May 2019 - Aug 2019",
          location: "Work From Home",
          description:
            "I worked on building a Gesture Detection system using Deep learning which detects various hand gestures using UWB sensor",
          color: "#ee3c26",
        },
        {
          title: "Data Science and Business Analytics Intern",
          company: "The Sparks Foundation",
          company_url: "https://www.thesparksfoundationsingapore.org/",
          logo_path: "sparks_logo.png",
          duration: "August 2021 – September 2021",
          location: "Work From Home",
          description:
            "Internship task was to perform Exploratory Data Analysis on IPL since 2007.",
          color: "#0071C5",
        },
        {
          title: "Full Stack Developer",
          company: "BusMaps",
          company_url: "",
          logo_path: "busbee.webp",
          duration: "January 2021 - July 2021",
          location: "Work From Home",
          description: "BusMaps is a IoT based live bus tracking company.",
          color: "#2962FF",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "GWOC Contributor",
          company: "GirlScript Winter of Contributing",
          company_url: "https://gwoc.girlscript.tech/",
          logo_path: "gwoc.jpg",
          duration: "1st September 2021 - 30th November 2021",
          location: " ",
          description:
            "Open-Source Top Contributor in DSA domain at Girlscript Winter of Contributing 2021",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "apoorv2.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Medium.",
  //   link: "https://medium.com/@hrishipatel99",
  //   avatar_image_path: "blogs_image.svg",
  // },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Brain Tumor Detection",
      url: "https://share.streamlit.io/apoorv-17/brain-tumor/app.py",
      description:
        "Developed a Machine Learning model to help diagnose a person has Brain Tumor using his Brain MRI scan with a reasonable accuracy of over 97%.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "Streamlit",
          iconifyClass: "simple-icons:streamlit",
        },
        {
          name: "Streamlit",
          iconifyClass: "simple-icons:keras",
        },
      ],
    },
    {
      id: "1",
      name: "Crown Clothing",
      url: "https://github.com/Apoorv-17/crwn-clothing",
      description:
        " A clothing website built on where one can order and pay online after selecting their items.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-java",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Redux",
          iconifyClass: "logos:redux",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "2",
      name: "MealsToGo",
      url: "https://github.com/Apoorv-17/MealsToGo",
      description:
        " A Food Delivery Android/IOS app where one can order and pay online for food by selecting a restaurant.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-java",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "Expo",
          iconifyClass: "vscode-icons:file-type-expo",
        },
      ],
    },
    {
      id: "3",
      name: "Nano Slayer",
      url: "https://shush25.github.io/graphics-project/",
      description:
        "A 2D game which is similar to Mario but with GUNS WEAPONS and SUPERPOWERS!!!",
      languages: [
        {
          name: "Unity",
          iconifyClass: "cib:unity",
        },
        {
          name: "C#",
          iconifyClass: "logos:c-sharp",
        },
        {
          name: "PhotoShop",
          iconifyClass: "vscode-icons:file-type-photoshop",
        },
      ],
    },
    {
      id: "3",
      name: "COVID-19 Impact on Digital Learning",
      url: "https://apoorv-17.github.io/DA_website/",
      description:
        "Exploratory Data Analysis of the impact of Covid 19 in USA on the Digital Learning platforms.",
      languages: [
        {
          name: "R",
          iconifyClass: "emojione:letter-r",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
