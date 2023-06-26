const Footer = () => {
  return (
    <footer className="bg-black/80 text-gray-300 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved</p>
            <p className="text-sm">City Hiker project group</p>
          </div>
          <div className="mb-4 md:mb-0">
            <p className="text-sm">Contact: Fish Creek Group - MMDA 300 Production Company II | Spring 2023</p>
            <p className="text-sm">Email: 71597f17.sait.ca@ca.teams.ms</p>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-sm text-justify">
            Welcome to the Fish Creek hiking trail interactive map. If you have a love for the outdoors and are seeking an escape from the everyday busyness of the city, you have come to the right place! Fish Creek provides a remarkable landscape with many trails to choose from. Your visit to Fish Creek is guaranteed to be unique as the trails wind through beautiful forests, offering great views of the landscape and wildlife. Whether you are an expert hiker or a beginner looking to start your hiking journey, Fish Creek has something for everyone. This provincial park is right in the heart of Calgary and not only offers serene, but also exhilarating trails depending on your skill level. Join us as we explore the vast and picturesque trails of Fish Creek!
          </p>
          <h3 className="pt-4">Technology reference</h3>
          <p className="text-sm"><a href="https://nextjs.org/">Next JS framework</a></p>
          <p className="text-sm"><a href="https://github.com/DevPanther/better-react-carousel">better-react-carousel</a></p>
          <p className="text-sm"><a href="https://github.com/JustFly1984/react-google-maps-api">react-google-maps</a></p>
          <p className="text-sm"><a href="https://github.com/tailwindlabs">Tailwind</a></p>
          <p className="text-sm"><a href="https://github.com/framer/motion">Framer motion</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
