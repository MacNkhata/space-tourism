import Nav from '@/components/Nav';

const Home = () => {
  return (
    <div className="main bg-home-mobile bg-no-repeat bg-cover flex flex-col lg:bg-home-desktop md:bg-home-tablet">
      <Nav />
      <div className="h-screen p-8 flex flex-col items-center justify-center">
        <div>
          <p className="text-secondary text-lg tracking-wider uppercase font-sans text-center mb-4">
            so, you want to travel to
          </p>
          <h4 className="text-secondary font-serif uppercase text-8xl text-center mb-4">
            Space
          </h4>
          <p className="text-secondary font-sans text-center text-base tracking-wider">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="bg-secondary w-36 h-36 rounded-full flex items-center justify-center mt-20">
          <p className="text-primary font-serif text-lg uppercase text-center">
            Explore
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
