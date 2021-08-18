import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import profilePicture from "../../public/images/profile.jpg";
/*

          <div className="relative">
            <div className="absolute">
              <div className="w-11/12 md:w-1/3 lg:w-1/4">
                <Image
                  layout="fixed"
                  src={profilePicture}
                  alt="Md.Muhtasim Fuad's profile picture"
                  placeholder="blur"
                />
              </div>
            </div>
          </div
*/

export default function Contact() {
  return (
    <div>
      <div className="flex flex-col mt-12 sm:flex-row">
        <div className="flex flex-col w-full">
          <div className="text-5xl font-bold font-body">
            <h1>Hi I am Muhtasim</h1>
            <h1>Fuad Nafiz</h1>
          </div>
          <div className="mt-12 text-xl font-medium text-justify text-gray-700 lg:text-2xl lg:w-2/3 xl:w-1/2 font-body overflow-ellipsis">
            <p>My work is mainy in backend. I excelled in Node.js, Express.js and in frontend I worked in React.js.</p>
            <p>
              I learned backend web development mainly in nodejs and can develop MERN(MongoDB, Express, React, Nodejs)
              based applications. I also have experience in Competitive Programming and solved more than 500 problems in
              various coding platforms.
            </p>
          </div>
        </div>
        <Image src={profilePicture} alt="Md.Muhtasim Fuad's profile picture" placeholder="blur" />
      </div>

      <div className="w-full mt-12 space-y-10">
        <div className="flex justify-between font-body">
          <div className="text-xl font-bold ">Main Technologies</div>
          <div className="ml-2 text-xl font-medium text-right text-gray-700">
            Docker, Node.js, React.js, MySQL, MongoDB
          </div>
        </div>
        <div className="flex justify-between font-body">
          <div className="text-xl font-bold ">Main Skills</div>
          <div className="text-xl font-medium text-right text-gray-700">
            Problem solving, Shell Scripting, Linux, Googling
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className="w-full h-1 my-8 bg-gray-500" />
        <div className="flex justify-between">
          <div className="space-y-1 text-xs font-medium text-gray-900 lg:text-xl font-body">
            <h3>I am thrilled to work on</h3>
            <div className="flex space-x-4">
              <h3>your next project</h3>
            </div>
          </div>
          <div className="space-y-4 font-medium text-gray-900 font-body">
            <div className="text-sm font-bold lg:text-xl">fuadnafiz98@gmail.com</div>
            <div className="px-4 py-2 text-sm text-gray-600 lg:text-xl hover:text-indigo-800 hover:bg-indigo-100">
              <Link href="/resume">View Resume</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
