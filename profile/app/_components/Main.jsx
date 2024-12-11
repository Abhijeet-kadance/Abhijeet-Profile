'use client';
import Link from "next/link";
const Main = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-4 py-8 px-4">
        {/* Left Section: Introduction */}
        <div className="text-center lg:text-left">
          <p className="text-lg text-gray-800 leading-relaxed">
            Hi, I am <span className="font-semibold">Abhijeet Thorat</span>. I have done my BE in Information Technology 
            from Jawaharlal Nehru College of Engineering, Sambhajinagar (JNEC) and completed my PG-DAC from Sunbeam Pune.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mt-4">
            I am currently working at CDAC since October 28, 2024, till date. I am a passionate Full Stack Developer 
            who loves solving complex problems, creating application architectures, and designing scalable systems.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mt-4">
            My interests include playing CTF challenges, finding vulnerabilities, learning Linux, playing musical instruments, 
            and traveling.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mt-4">
            Please find my technical blogs in the  <Link href="/reading" className="text-blue-600 hover:underline"> Reading </Link> tab.
          </p>
          <div className="mt-4 text-blue-600">
            {/* <a href="#cv" className="hover:underline">CV</a> /  */}
            <a href="#resume" className="hover:underline ml-2">Resume</a> / 
            <a href="#email" className="hover:underline ml-2">Email</a>
          </div>
        </div>

        {/* Right Section: Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="/abhijeet.jpeg"
            alt="Abhijeet Thorat"
            className="rounded-full w-48 h-48 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
