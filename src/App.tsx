import { motion } from "framer-motion";
import { useTheme } from "./hooks/useTheme";
import { EXPERIENCE, PROJECTS, SKILLS, SITE } from "./data/resume";
import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";
import { TbExternalLink } from "react-icons/tb";
import { CiDark, CiSun } from "react-icons/ci";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "./hooks/ToastProvider";

function App() {
  const { theme, toggleTheme } = useTheme();
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [msg,setMsg] = useState('')
  const { addToast } = useToast()
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if(!name || !email || !msg){
      addToast('Please fill all fields','error')
      return
    }

    emailjs.send("service_liiol7v","template_9ih1aob",{
      title: "Contact from Portfolio Website",
      name,
      message: msg,
      email,
    }, "f7XEJwkmGfMHRrUHL")
    .then(
      () => {
        addToast("Message sent successfully!", "success");
      },
      (error) => {
        addToast(`${error.text} Message failed to send. Please try again.`, "error");
      }
    );
  }

  return (
    <div className="overflow-x-hidden bg-white text-gray-800 dark:bg-[#0f0f1a] dark:text-gray-200 transition-colors duration-300">
      {/* NAVBAR */}
      <header className="flex justify-between items-center px-10 py-6 fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-[#0f0f1a]/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <h1 className="font-heading text-2xl font-bold">rickymurdana.dev</h1>
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
          <li><a href="#experience" className="hover:text-blue-500">Experience</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-110 transition"
        >
          {theme === "dark" ? <CiSun size={20} /> : <CiDark size={20} />}
        </button>
      </header>

      {/* HERO */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-10 py-24 mt-16">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30"></div>

        <div className="z-10 md:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-heading font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          >
            Hi, I am Muhammad Ricky Murdana
          </motion.h1>
          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition">
              <a href="#projects">🚀 View Projects</a>
            </button>
            <button className="px-6 py-3 rounded-full border border-gray-400 dark:border-gray-600 font-semibold hover:bg-gray-800 transition">
              <a href="#contact">📩 Contact</a>
            </button>
          </div>
        </div>

        <div className="relative mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <div className="absolute inset-0 w-56 h-56 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-40"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-10 py-20">
        <h2 className="text-4xl font-heading font-bold text-center mb-12">
          About
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300 text-justify">
            I'm a Software Engineer with strong expertise in Front-End and Full-Stack development, specializing in modern frameworks such as Angular, React, Ionic, Next.js, Node.js, and NestJS. I have built and enhanced both web and mobile applications across different industries, balancing corporate roles and freelance projects.

            My work highlights ability to:

            Design and implement intuitive user interfaces.

            Integrate APIs and develop core features.

            Collaborate with designers and engineers to deliver impactful solutions.

            Continuously learn and adapt to new technologies.

            I am passionate about collaboration, continuous improvement, and delivering value-driven software solutions.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-10 py-20">
        <h2 className="text-4xl font-heading font-bold text-center mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {SKILLS.map((skill, i) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={i}
              className="grid grid-cols-6 gap-x-8 gap-y-2 sm:grid-cols-8 md:grid-cols-10 sm:gap-x-12 md:gap-x-10 lg:grid-cols-11 xl:gap-10 p-6 rounded-2xl bg-gray-100/70 dark:bg-white/10 backdrop-blur-md shadow-lg skill-set text-center items-center"
            >
              <skill.icon />
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-10 py-20 bg-gray-50 dark:bg-[#131324]">
        <h2 className="text-4xl font-heading font-bold text-center mb-12">
          Experience
        </h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="relative pl-6 border-l-2 border-purple-400">
              <h3 className="text-xl font-semibold">
                {exp.role} @ {exp.company}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {exp.status}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {exp.from} - {exp.to}
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {exp.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-10 py-20">
        <h2 className="text-4xl font-heading font-bold text-center mb-12">
          Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="relative group rounded-2xl overflow-hidden shadow-lg bg-gray-100 dark:bg-white/10"
            >
              <img
                src={item.image}
                alt={`Project ${item.project}`}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
                <h3 className="text-xl font-bold text-white">{item.project}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
                <div className="flex gap-3 mt-3">
                  <a href={item.link} className="text-white hover:text-purple-400">
                    <TbExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-10 py-20 bg-gray-50 dark:bg-[#131324] text-center">
        <h2 className="text-4xl font-heading font-bold mb-12">Contact</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 rounded-2xl bg-gray-100 dark:bg-white/10 backdrop-blur-md shadow-lg space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-white border border-gray-300 dark:bg-white/5 dark:border-gray-700 dark:text-gray-200"
            value={name} 
            onChange={e=>setName(e.target.value)}
            name="name"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-white border border-gray-300 dark:bg-white/5 dark:border-gray-700 dark:text-gray-200"
            value={email} 
            onChange={e=>setEmail(e.target.value)}
            name="email"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded-lg bg-white border border-gray-300 dark:bg-white/5 dark:border-gray-700 dark:text-gray-200"
            value={msg} 
            onChange={e=>setMsg(e.target.value)}
            name="message"
            required
          ></textarea>
          <button className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition">
            Send Message
          </button>
        </form>
        <div className="mt-8 flex justify-center gap-6">
          <a
            href={SITE.linkedin}
            className="p-3 rounded-full bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 transition"
          >
            <SiLinkedin />
          </a>
          <a
            href={SITE.github}
            className="p-3 rounded-full bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 transition"
          >
            <SiGithub />
          </a>
          <a
            href="mailto:rickymurdana@gmail.com"
            className="p-3 rounded-full bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 transition"
          >
            <SiGmail />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
        © Muhammad Ricky Murdana. All rights
        reserved.
      </footer>
    </div>
  );
}

export default App;



