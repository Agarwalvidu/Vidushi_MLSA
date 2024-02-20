import React from "react";
//import image from "../images/design-desk.jpeg";

//const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "NewsCart – a Website to read news articles of different domains",
    description:
      "<ul><li>Fetched a Live API to get news from different domains</li><li>Added next and previous button functionalities for better experience</li><li  style='font-weight: 600'>Tech Stack: ReactJS, API </li></ul>",
    url: "https://github.com/Agarwalvidu/NewsCart_Internship",
  },
  {
    title: "MonuARch - a prototype for AR/VR based tourism and heritage for SIH",
    description:
      "<ul><li>Setup a feature MonuLingo to convert a language to other language</li><li>Created a scene to showcase the heritage inside the monument with MonuScan</li><li style='font-weight: 600'>Tech Skill: Figma, Animaker</li></ul>",
    url: "https://www.figma.com/file/PVK9zzjPeAW9eiuqa6QuI2/MonuARch?type=design&node-id=0%3A1&mode=design&t=uRLWw7XivrpBGany-1",
  },
  {
    title: "Campus Connect – an application to know a country’s University data",
    description:
      "<ul><li>Created user friendly UI with green theme for attraction</li><li>Fetched an API to get all the data of an University</li><li style='font-weight: 600'>Tech Stack: Flutter, Dart </li></ul>",
    url: "https://github.com/Agarwalvidu/Campus_Connect",
  },
  {
    title: "IRCTC Website Clone ",
    description:
      "<ul><li>Cloned the whole website with some extra user attracting UI features</li><li>Used bootstrap and tailwind css for extra effectiveness</li><li style='font-weight: 600'>Tech Stack: Html, CSS, JavaScript, Bootstrap </li></ul>",
    url: "https://agarwalvidu.github.io/IRCTC_WebsiteClone/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "cloumn", paddingTop: "3rem" }}>
        {/* <div className="image-container" style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div> */}
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px", fontWeight: "700" }}>{project.title}</h3>
              </a>
              <div
                className="small"
                style={{ textAlign: "left" }}
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
