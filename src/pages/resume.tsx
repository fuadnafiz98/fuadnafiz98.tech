import Image from "next/image";
import resume from "/public/images/resume.jpg";

export default function Resume() {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-black">RESUME</h1>
        <a href="/images/resume.jpg" className="hover:underline hover:font-bold">
          <p className="text-xl">DOWNLOAD</p>
        </a>
      </div>
      <div className="flex items-center justify-center mt-8">
        <div className="w-full md:w-3/4 lg:2/3">
          <Image src={resume} alt="resume" placeholder="blur" />
        </div>
      </div>
    </div>
  );
}
