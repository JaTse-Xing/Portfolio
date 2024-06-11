import React from 'react';

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            <a href="mailto:777singhjaspreet777@gmail.com" className="underline text-blue">
              JASPREET SINGH: 777singhjaspreet777@gmail.com
            </a>
          </p>
          <p className="font-semibold text-gray text-xs">
            <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="underline text-blue">
              GitHub
            </a>
          </p>
          <p className="font-semibold text-gray text-xs">
            <a href="https://twitter.com/your-twitter-username" target="_blank" rel="noopener noreferrer" className="underline text-blue">
              Twitter
            </a>
          </p>
          <p className="font-semibold text-gray text-xs">
            <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer" className="underline text-blue">
              LinkedIn
            </a>
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Copyright @ J@&preET$ingh</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
