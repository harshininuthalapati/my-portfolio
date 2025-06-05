import React from "react";
import myPhoto from "../assets/myphoto.jpeg"; // update path to your photo

const projects = [
  {
    title: "HelpDesk Website",
    description:
      "It is designed to improve communication between university students/faculty and the administration. This platform enabled users to raise and track issues, improving transparency and response efficiency. ",
    technologies: "HTML, CSS, JavaScript, React, SQL",
  },
  {
    title: "Medical Store Management",
    description:
      "Maintains customer, supplier, and medicine records for a medical store to increase operational efficiency and avoid errors.",
    technologies: "C++",
  },
];

const research = [
  {
    title: "A Comparative Study of Machine Learning and Deep Learning Approaches on Recommendation Systems",
    description:
      "It involved a rigorous analysis of multiple algorithms across various datasets to identify optimal strategies for recommendation-based systems. This research has been submitted for publication, with results anticipated by the end of July.",
  },
  {
    title: "Secret Communication through Image Steganography Using HSAJAYA and Modified Ballot Transform",
    description:
      "In the field of cyber security, research was conducted to increase the security and embedding capacity of image steganography. ",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "SQL",
  "UI/UX Design",
  "C++",
  "Python",
];

const internships = [
  {
    title: "Web Development Intern - Code Swap Solutions",
    description:
      "I played a key role in the development of a fully functional hotel booking website, gaining hands-on experience in user experience (UX) design, and front-end development.",
  },
  {
    title: "Artificial Intelligence Intern - Code Clause",
    description:
      "Worked on machine learning and deep learning projects under the guidance of senior data scientists. Gained hands-on experience in real-world AI applications, from data preprocessing to model development and evaluation.",
  },
];

const extracurricular = [
  "Participated in Global Immersion Programme Dubai by Ureka Education, visited companies, and completed a short project with teammates.",
  "TATA Crucible, The Campus Quiz 2023 - Participation Certificate",
  "Artificial Intelligence and Machine Learning Workshop - Learned Product Roadmap by AB Tech Ville",
  "Member of Entrepreneurship Cell - Group 'Saurvi' focusing on Women Empowerment; conducted workshops for rural women",
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-12 font-sans">
      {/* Intro */}
      <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center mb-20 gap-10">
        <div className="flex-shrink-0">
          <img
            src={myPhoto}
            alt="Harshini Nuthalapati"
            className="w-48 h-48 rounded-full border-8 border-white shadow-xl object-cover"
          />
        </div>
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
            Harshini Nuthalapati
          </h1>
          <p className="text-lg text-gray-700">
          I am a final-year B.Tech Computer Science and Engineering student with a CGPA of 9.22 and a strong passion for application development.
          I enjoy building user-friendly, efficient software solutions that solve real-world problems.
          I am also certified in Japanese NAT N4 level and actively preparing for N3.
          </p>
        </div>
      </section>

      {/* Internships */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-10">
          Internship Experiance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {internships.map((intern, i) => (
            <div
              key={i}
              tabIndex={0}
              className="group bg-white rounded-xl shadow-lg p-6 border-4 border-transparent hover:border-gradient-to-r hover:from-purple-600 hover:to-pink-600 cursor-pointer transform transition duration-500 hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-purple-700">
                {intern.title}
              </h3>
              <p className="text-gray-600">{intern.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-10">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <div
              key={i}
              tabIndex={0}
              className="group bg-white rounded-xl shadow-lg p-6 border-4 border-transparent hover:border-gradient-to-r hover:from-purple-600 hover:to-pink-600 cursor-pointer transform transition duration-500 hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-purple-700">
                {proj.title}
              </h3>
              <p className="text-gray-600 mb-3">{proj.description}</p>
              <p className="text-sm font-medium text-purple-700">
                Technologies: {proj.technologies}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Research */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-10">
          Research
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {research.map((res, i) => (
            <div
              key={i}
              tabIndex={0}
              className="group bg-white rounded-xl shadow-lg p-6 border-4 border-transparent hover:border-gradient-to-r hover:from-purple-600 hover:to-pink-600 cursor-pointer transform transition duration-500 hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-purple-700">
                {res.title}
              </h3>
              <p className="text-gray-600">{res.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-10">
          Skills
        </h2>
        <ul className="flex flex-wrap gap-6 justify-center md:justify-start">
          {skills.map((skill, i) => (
            <li
              key={i}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transform transition duration-300 cursor-default"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Extracurricular */}
      {/* Extracurricular */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-10">
          Extracurricular
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {extracurricular.map((item, i) => (
            <div
              key={i}
              tabIndex={0}
              className="group bg-white rounded-lg shadow-md p-6 flex items-start space-x-4 cursor-default
                        transform transition duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0 mt-1">
                <svg
                  className="w-8 h-8 text-purple-600 group-hover:text-pink-500 transition"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              {/* Text */}
              <p className="text-gray-700 text-lg leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-purple-600 text-white rounded-full p-4 shadow-lg hover:bg-pink-600 transition"
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
}
