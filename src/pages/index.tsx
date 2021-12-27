import fs from "fs";
import path from "path";

import Meta from "../components/Meta";
import Image from "next/image";
import profilePicture from "../../public/images/profile.jpg";

export async function getStaticProps() {
  const ymlFile = fs.readFileSync(path.resolve(process.cwd() + "/public/code/one.yml"));
  const jsonFile = fs.readFileSync(path.resolve(process.cwd() + "/public/code/two.json"));
  const yml = ymlFile.toString();
  const json = jsonFile.toString();
  return {
    props: {
      yml,
      json,
    },
  };
}

export default function Home({ yml, json }: { yml: string; json: string }) {
  return (
    <Meta
      title="fuadnafiz98 ⦁ Md. Muhtasim Fuad | Javascript Developer"
      description="Md.Muhtasim Fuad's personal portfolio website. Muhtasim Fuad is a Full Stack Engineer working on Typescript, Docker, PostgreSQL, Node.js, React.js."
      date="01-08-2021"
      image="/images/banner.jpg"
      keywords="Md.Muhtasim Fuad, MIST, fuad, nafiz, fuadnafiz98@gmail.com, Full Stack Developer, fuadnafiz98"
    >
      <div className="relative">
        <div className="absolute hidden mt-0 sm:block left-12">
          <code>
            <pre className="font-sans font-light text-gray-200">{yml}</pre>
          </code>
        </div>
        <div className="absolute hidden sm:block right-[512px] mt-80">
          <code>
            <pre className="font-sans font-light text-gray-200">{json}</pre>
          </code>
        </div>
        <div className="absolute z-50 -mt-24 md:bottom-0">
          <div>
            <h1 className="text-lg font-medium md:text-2xl">$whoami</h1>
            <h2 className="text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl">Minimalist,</h2>
            <h3 className="text-3xl font-black md:text-4xl lg:text-6xl">Backend Developer.</h3>
          </div>
        </div>
        <div className="flex justify-between md:justify-start mt-28 md:flex-row-reverse">
          <div className="w-11/12 md:w-1/3 lg:w-1/4">
            <Image
              layout="responsive"
              src={profilePicture}
              alt="Md.Muhtasim Fuad's profile picture"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col items-center justify-between md:mb-2 md:mr-3">
            <div className="w-1 h-32 bg-black" />
            <div>
              <ul className="space-y-4">
                <li className="hover:bg-[#bfbfbf] text-black hover:text-[#859900]">
                  <a href="https://www.linkedin.com/in/fudanafiz98">
                    <span className="sr-only">Linkedin link</span>
                    <svg width="22" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 7a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7H9v-7a6 6 0 016-6v0zM5 8H1v12h4V8zM3 5a2 2 0 100-4 2 2 0 000 4z"
                        stroke="#000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
                <li className="hover:bg-[#bfbfbf] text-black hover:text-[#859900]">
                  <a href="https://github.com/fuadnafiz98">
                    <span className="sr-only">Linkedin link</span>
                    <svg width="22" height="24" fill="none" xmlns="http:/www.w3.org/2000/svg">
                      <path
                        d="M15 22.027v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77S17.73.677 15 2.507a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 004 4.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v3.87m0-3c-5 1.5-5-2.5-7-3l7 3z"
                        stroke="#000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
                <li className="hover:bg-[#bfbfbf] text-black hover:text-[#859900]">
                  <a href="https://twitter.com/fuadnafiz98">
                    <span className="sr-only">twitter link</span>
                    <svg width="24" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M23 1.01a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83A7.72 7.72 0 0023 1.01v0z"
                        stroke="#000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
                <li className="hover:bg-[#bfbfbf] text-black hover:text-[#859900]">
                  <a href="https://codesandbox.io/u/fuadnafiz98">
                    <span className="sr-only">codesandbox link</span>
                    <svg width="20" height="23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19 14.998v-8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4a2 2 0 00-1 1.73v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4a2 2 0 001-1.73z"
                        stroke="#000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.5 3.208l4.5 2.6 4.5-2.6M5.5 18.788v-5.19l-4.5-2.6M19 10.998l-4.5 2.6v5.19M1.27 5.958l8.73 5.05 8.73-5.05M10 21.078v-10.08"
                        stroke="#000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Meta>
  );
}
