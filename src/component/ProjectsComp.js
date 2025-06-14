import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import styles from "../styles/project.module.css";
import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa6";
import { useContext } from "react";
import { AppContext } from "@/pages/_app";
import Image from "next/image";
const obj = [
  {
    projectName: "MEDICARE",
    description: "A platform for predicting multiple diseases using AI",
    language: "Python, Streamlit",
    linkRedirect: "",
    githubprojectLink: "https://github.com/HarshitSaini777/MDP",
    githubLink: "https://github.com/HarshitSaini777",
    photo: "/photo4.png.jpg"
  },
  {
    projectName: "Portfolio",
    description: "A portfolio website to showcase my work and skills.",
    language: "React.js, React Router, CSS",
    linkRedirect: "https://port-folio-harshit-git-main-harshit-sainis-projects-e5f9f208.vercel.app",
    githubprojectLink: "https://github.com/HarshitSaini777/PortFolioHarshit",
    githubLink: "https://github.com/HarshitSaini777",
    photo: "/photo5.png"
  },
  /*{
    projectName: "Save Book Marks",
    description: "A platform where we can save our bookmarks.",
    language: "Nextjs,expressjs",
    linkRedirect: "#",
    githubprojectLink: "https://github.com",
    githubLink: "https://github.com",
    photo: "/bookmarkImage.jpg"
  },
  {
    projectName: "Chatting App using Database",
    description: "Chat securely with people.",
    language: "JavaScript, Express.js",
    linkRedirect: "https://chatapp-s9gx.onrender.com/",
    githubprojectLink: "https://github.com",
    githubLink: "https://github.com",
    photo: "/chat.png"
  },
  {
    projectName: "Real-Time ChatApp",
    description: "Real-time chat application for instant messaging.",
    language: "JavaScript, PHP, SQL",
    linkRedirect: "https://chatapp-s9gx.onrender.com/",
    githubprojectLink: "https://chatapp-s9gx.onrender.com/",
    githubLink: "https://github.com",
    photo: "/chatRealTime.png"
  },
  {
    projectName: "News App",
    description: "A simple news application.",
    language: "React JS",
    linkRedirect: "nitinnewsapp.vercel.app",
    githubprojectLink: "https://github.com",
    githubLink: "https://github.com",
    photo: "/news.png"
  },*/
];

function ProjectComp() {
  const context = useContext(AppContext);
  const projectRefs = useRef([]);
  const [activeProject, setActiveProject] = useState(obj[0]);
  useEffect(() => {
    if (projectRefs.current.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            const index = projectRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setActiveProject(obj[index]);
            }
          }
        });
      },
      { threshold: [0.4] }
    );
    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <>
      <motion.div
        className={styles.project}
        style={{
          display: context.isMobile ? "flex" : "1fr 3fr",
          overflowX: context.isMobile ? "scroll" : "hidden",
          gridTemplateColumns: context.isMobile ? "1fr" : "1fr 3fr",
          width: "100%",
          height: context.isMobile ? "auto" : "100vh",
          marginTop: "50px",
        }}
      >
        <motion.div
          style={{
            position: "sticky",
            top: "60px",
            left: "0",
            zIndex: 10,
            color: "white",
            width: "50%",
            height: "70vh",
            display: context.isMobile ? "none" : "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            zIndex: "10",
          }}
          initial={{ x: "-500px", opacity: 0, scale: 1.6 }}
          animate={{ x: "20px", opacity: 1, scale: 1.2 }}
          transition={{ duration: 2, ease: "backInOut" }}
        >
          <h1
            style={{
              margin: "0",
              color: "skyblue",
              fontSize: "1.4rem",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            PROJECT'S
          </h1>
          <motion.div
            style={{
              width: "50%",
              textAlign: "center",
              paddingTop: "5px",
              textAlign: "center",
            }}
          >
            {activeProject.projectName}
          </motion.div>
          <motion.div
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              position: "relative",
              top: "30%",
              left: "55%",
              transform: "translate(-50%,-50%)",
              width: "100%",
              textAlign: "center",
            }}
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "backInOut" }}
            >
              {activeProject.description}
            </motion.h1>
            <span
              style={{
                display: "flex",
                justifyContent: "space-around",
                paddingTop: "50px",
              }}
            >
              <a
                target="_blank"
                href={activeProject.linkRedirect}
                style={{ fontSize: "1.7rem" }}
              >
                <LuExternalLink />
              </a>
              <a
                target="_blank"
                href={activeProject.githubLink}
                style={{ fontSize: "1.3rem" }}
              >
                <FaCodeBranch />
              </a>
            </span>
          </motion.div>
        </motion.div>

        <div
          style={{
            overflowY: context.isMobile ? "hidden" : "scroll",
            height: context.isMobile ? "" : "100vh",
            display: context.isMobile ? "flex" : "",
            width: "100%",
            maxHeight: context.isMobile ? "fit-content" : "",
            margin: "auto",
            scrollBehavior: "unset",
          }}
        >
          {!context.isMobile ? (
            <>
              {obj.map((v, i) => (
                <motion.div
                  key={i}
                  ref={(el) => (projectRefs.current[i] = el)}
                  className={styles.box}
                  style={{
                    // height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1rem",
                    color: "white",
                    scrollSnapAlign: "start",
                  }}
                  initial={{ opacity: 0, scale: 1.1 }}
                  whileInView={{ opacity: 0.7, scale: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <motion.div
                    className={styles.projectBox}
                    whileInView={{
                      opacity: 1,
                      scale: 1.2,
                      boxShadow: "1px 2px 1px green",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "95%",
                        paddingTop: "10px",
                      }}
                    >
                      <p style={{ fontSize: "1.7rem" }}>My Projects</p>
                      <a
                        target="_blank"
                        href={v.linkRedirect}
                        style={{ fontSize: "1.2rem" }}
                      >
                        <LuExternalLink />
                      </a>
                    </div>
                    <h2
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: "700",
                        paddingTop: "34px",
                        paddingBottom: "20px",
                        color: "lightyellow",
                      }}
                    >
                      {v.projectName}
                    </h2>
                    <div className="imgBox">
                      <Image
                        src={v.photo}
                        style={{
                          // marginTop:"10px",
                          marginBottom: "10px",
                          scale: "1",
                          // paddingBottom: "20px",
                          // paddingTop: "20px",
                        }}
                        alt="image"
                        width={100}
                        height={100}
                      />
                    </div>
                    <p
                      style={{
                        textAlign: "center",
                        textTransform: "capitalize",
                        wordWrap: "break-word",
                        fontSize: "1.2rem",
                        padding: "2px",
                        paddingBottom: "20px",
                      }}
                    >
                      {v.description}
                    </p>
                    <span
                      style={{
                        textAlign: "center",
                        textTransform: "capitalize",
                        wordWrap: "break-word",
                        padding: "4px",
                        paddingBottom: "20px",
                      }}
                    >
                      {v.language}
                    </span>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        width: "100%",
                        paddingBottom: "30px",
                      }}
                    >
                      <a
                        target="_blank"
                        href={v.githubprojectLink}
                        style={{ fontSize: "1.3rem" }}
                      >
                        <FaGithub />
                      </a>
                      <a
                        target="_blank"
                        href={v.githubLink}
                        style={{ fontSize: "1.3rem" }}
                      >
                        <FaCodeBranch />
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </>
          ) : (
            <motion.div
              style={{
                width: "100%",
                height: "700px",
                maxHeight: "auto",
                overflowX: "auto",
                overflowY: "hidden",
                display: "flex",
                scrollSnapType: "x mandatory",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                cursor: "grab",
              }}
              dragConstraints={{ left: -((obj.length - 1) * window.innerWidth) }}
              dragElastic={0.3}
            >
              {obj.map((v, i) => (
                <motion.div
                  key={i}
                  style={{
                    width: "100%",
                    margin: "0",
                    flexShrink: 0,
                    scrollSnapAlign: "start",
                    textAlign: "center",
                    padding: "20px",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 1, scale: 1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <motion.div
                    ref={(el) => (projectRefs.current[i] = el)}
                    className={styles.projectBoxMobile}
                    whileInView={{
                      opacity: 1,
                      scale: 1.2,
                      boxShadow: "1px 2px 1px green",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "95%",
                        paddingTop: "10px",
                      }}
                    >
                      <p style={{ fontSize: "1.5rem" }}>My Project</p>
                      <a
                        target="_blank"
                        href={v.linkRedirect}
                        style={{ fontSize: "1.7rem" }}
                      >
                        <LuExternalLink />
                      </a>
                    </div>
                    <h2
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "700",
                        paddingTop: "30px",
                        // paddingBottom: "20px",
                        color: "lightyellow",
                      }}
                    >
                      {v.projectName}
                    </h2>
                    <div className="imgBox">
                      <Image
                        src={v.photo}
                        style={{
                          marginTop: "10px",
                          marginBottom: "30px",
                          scale: "1.3",
                          paddingBottom: "10px",
                          paddingTop: "20px",
                        }}
                        alt="image"
                        width={100}
                        height={100}
                      />
                    </div>
                    <p
                      style={{
                        textAlign: "center",
                        textTransform: "capitalize",
                        wordWrap: "break-word",
                        fontSize: "1.2rem",
                        padding: "2px",
                        paddingBottom: "20px",
                      }}
                    >
                      {v.description}
                    </p>
                    <span
                      style={{
                        textAlign: "center",
                        textTransform: "capitalize",
                        wordWrap: "break-word",
                        padding: "4px",
                        paddingBottom: "20px",
                      }}
                    >
                      {v.language}
                    </span>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        width: "100%",
                        paddingBottom: "30px",
                      }}
                    >
                      <a
                        target="_blank"
                        href={v.githubprojectLink}
                        style={{ fontSize: "1.3rem" }}
                      >
                        <FaGithub />
                      </a>
                      <a
                        target="_blank"
                        href={v.githubLink}
                        style={{ fontSize: "1.3rem" }}
                      >
                        <FaCodeBranch />
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default ProjectComp;
