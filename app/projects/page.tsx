import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProjectsPage = () => {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] min-h-screen flex flex-col  pb-20 sm:px-10">
      <Navbar />
      <div className="min-h-[70vh]">
        <p className="text-2xl font-bold text-center">Projects</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="bg-background p-4 rounded-lg shadow-md">
            <p className="font-bold">Project 1</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lacinia, purus nec ultrices volutpat, libero odio scelerisque
              turpis, nec tempus odio nunc non libero. Donec auctor, magna nec
              varius ultricies, nunc sapien sollicitudin purus, nec ultricies
              justo nunc a nisl.
            </p>
          </div>
          <div className="bg-background p-4 rounded-lg shadow-md">
            <p className="font-bold">Project 2</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lacinia, purus nec ultrices volutpat, libero odio scelerisque
              turpis, nec tempus odio nunc non libero. Donec auctor, magna nec
              varius ultricies, nunc sapien sollicitudin purus, nec ultricies
              justo nunc a nisl.
            </p>
          </div>
          <div className="bg-background p-4 rounded-lg shadow-md">
            <p className="font-bold">Project 3</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lacinia, purus nec ultrices volutpat, libero odio scelerisque
              turpis, nec tempus odio nunc non libero. Donec auctor, magna nec
              varius ultricies, nunc sapien sollicitudin purus, nec ultricies
              justo nunc a nisl.
            </p>
          </div>
          <div className="bg-background p-4 rounded-lg shadow-md">
            <p className="font-bold">Project 4</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lacinia, purus nec ultrices volutpat, libero odio scelerisque
              turpis, nec tempus odio nunc non libero. Donec auctor, magna nec
              varius ultricies, nunc sapien sollicitudin purus, nec ultricies
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <div className="flex justify-center">
        &quot;If&quot;— by Rudyard Kipling
      </div>
    </div>
  );
};

export default ProjectsPage;
