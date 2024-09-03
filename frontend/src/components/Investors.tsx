const Investors = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side - Hero Image or Graphic */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          <img
            src="/path-to-your-hero-image.jpg"
            alt="Investors"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Hero Content */}
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Invest in the Next Generation of Startups
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Join our platform and gain early access to groundbreaking startups
            that are shaping the future. As an investor, you'll benefit from
            exclusive opportunities to support and grow innovative companies
            from the ground up.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Early access to next-gen startups</li>
            <li>Direct communication with founders</li>
            <li>Insights into market trends and innovations</li>
            <li>Opportunities for mentorship and advisory roles</li>
          </ul>
          <a
            href="/learn-more"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Investors;
