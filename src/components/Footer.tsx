const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12 mb-6">
      <div className="text-xl font-bold text-indigo-800">Muhtasim Fuad Nafiz - 2021</div>
      <div className="flex space-x-20 font-medium font-body">
        <a className="hover:text-indigo-800 hover:font-bold" href="http://https://www.linkedin.com/in/fuadnafiz98">
          LinkedIn
        </a>
        <a className="hover:text-indigo-800 hover:font-bold" href="http://github.com/fuadnafiz98">
          GitHub
        </a>
        <a className="hover:text-indigo-800 hover:font-bold" href="http://twitter.com/fuadnafiz98">
          Twitter
        </a>
      </div>
    </div>
  );
};

export default Footer;
