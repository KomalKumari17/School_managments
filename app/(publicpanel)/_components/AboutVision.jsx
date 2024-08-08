

const AboutVision = () => {
    return (
      <>
        <section className="bg-gray-100 text-gray-700 py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Us</h2>
              <p className="text-lg text-gray-700 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              
            </div>
            <img src="/about-image.jpg" alt="About Us" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
      <section className="bg-gray-200 text-gray-700 py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img src="/vision-image.jpg" alt="Vision" className="rounded-lg shadow-lg" />
            <div className="text-center md:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
             
            </div>
          </div>
        </div>
      </section>
      </>
    );
  };
  
  export default AboutVision;
  