import React from "react";
import ButtonLinkAndPorfolio from "./ButtonLinkAndPorfolio";

const Presentation = () => {
  return (
    <div
      id="textblock"
      className="max-w-screen-xl flex flex-col items-center justify-between mx-auto p-4"
    >
      <div className="p-6">
        <h1 className="text-7xl font-semibold tracking-wide text-center text-white">
          Hi, I'm Daniela
        </h1>
        <p className="tracking-wide text-center text-white text-xl">
          Yes, super disney fan.
          <br />
          Welcome to my personal site! Here, you will find information about my
          skills, motivation, and who I am as a person. I am excited to share my
          work and experience with you, and hope that my personal site will give
          you a better understanding of what I am capable of and what drives me.
          I hope you enjoy exploring my site and learning more about me. <br />
          <br />
          Thank you for visiting!
        </p>
      </div>
      <ButtonLinkAndPorfolio />
      <div className="my-8">
        <p className="tracking-wide text-center text-white text-xl">
          Hi there! <br /><br />I'm excited to introduce myself as a Frontend Developer
          candidate for your team.
          <br /> With a solid background in Quality Assurance spanning over 10
          years and recent training as a frontend developer, my tech passion and
          skills are ready to shine with you.
          <br />
          <br /> Let me kick things off with a question: Are you ready to
          elevate your frontend development game with a seasoned QA professional
          turned frontend enthusiast? <br />
          <br />
          My frontend development training is already yielding real results.
          I've completed three exciting projects, including a personal website
          made with HTML, CSS, and SASS, a task management app with JavaScript,
          and an incredible e-commerce website developed using React JS.
          <br />
          You can check out these projects here: Personal Website:
          <br />
        </p>
        <br />
        <p className="tracking-wide text-left text-white text-xl pl-6">
          Link to Personal Website: https://daniela-santucho-cv.netlify.app/
          <br /> 
          Task Management App: https://couplescoop-js.netlify.app/
          <br />
          E-commerce Website: https://e-commerce-santucho.netlify.app/
        </p>
        <br />
        <p className="tracking-wide text-center text-white text-xl">
          I also maintain an active Github profile, where I frequently publish
          code. You can explore my work at:
          <br /> 
          My Github Profile: https://github.com/dsantucho
          <br />
            I'm continually adding exciting new applications to my portfolio,
          leveraging the power of Tailwind CSS.<br /> My background in Quality
          Assurance, combined with my recent frontend training, has equipped me
          with outstanding problem-solving skills, a keen eye for detail, and an
          unwavering "never-give-up" attitude. I'm eagerly embracing challenges
          and am committed to learning and growing in the industry.<br /> I'm thrilled
          to discuss my skills and experience to explore how I can collaborate
          with your team. <br /><br />So, please don't hesitate to reach out to me! <br /><br />Cheers,
        </p>
      </div>
      <ButtonLinkAndPorfolio />
    </div>
  );
};

export default Presentation;
