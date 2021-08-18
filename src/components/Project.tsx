import React from "react";

interface Props {}

const Project: React.FC<Props> = () => {
  return (
    <div className="flex flex-col py-4 lg:flex-row-reverse">
      <div className="w-full h-48 bg-gray-500 xl:h-72 lg:w-1/4 sm:h-64">{/*  */}</div>
      <div className="space-y-2 lg:w-3/4 lg:mx-8">
        <h1 className="text-xl font-bold lg:text-2xl xl:text-3xl">01/ Banglafire Office Management</h1>
        <p className="h-24 overflow-hidden text-sm text-justify lg:text-base xl:text-xl">
          This project is the intern project at Banglafire. This project is about managing employee attendence system
          and employee leave and multiple leave policy management. Office admins can edit and update leave policies.
          Office employes attendence is taken based on their connectiviy in the office wifi.
        </p>
        <div className="flex items-center justify-between my-2 space-x-4 md:my-0">
          <h3 className="font-semibold underline text-md xl:text-lg">Techstack Used</h3>
          <h4 className="font-semibold text-right xl:text-lg">Vue.js, Laravel, MySQL, Python</h4>
        </div>
        <ul className="flex bg-[#dfdfdf] py-2 items-center justify-evenly text-lg">
          <li className="text-lg hover:underline hover:font-semibold">
            <a href="#" className="flex items-center font-medium">
              <svg className="w-6 h-6" width="22" height="24" fill="none" xmlns="http:/www.w3.org/2000/svg">
                <path
                  d="M15 22.027v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77S17.73.677 15 2.507a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 004 4.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v3.87m0-3c-5 1.5-5-2.5-7-3l7 3z"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              github
            </a>
          </li>
          <li className="text-lg hover:underline hover:font-semibold">
            <a href="#" className="flex items-center font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              video
            </a>
          </li>
          <li className="text-lg hover:underline hover:font-semibold">
            <a href="#" className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              live
            </a>
          </li>
        </ul>
        <div className="flex items-start mt-4">
          <a
            className="flex items-center justify-center w-full mt-4 font-medium text-center xl:text-xl text-md hover:font-bold"
            href="#"
          >
            Find more details of this project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 ml-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
