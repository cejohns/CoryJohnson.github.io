import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center md:justify-start space-y-8 md:space-y-0 md:space-x-10">
        {/* Profile Picture */}
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500">
          <img
            src={`${process.env.PUBLIC_URL}/images/Cory.webp`}
            alt="Cory Johns"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name and Title */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold mb-2">Cory Johns</h1>
          <p className="text-xl text-gray-400 mb-6">
            Web Developer • Game Developer • Automation Enthusiast • Software Developer
          </p>
          <Button
            variant="primary"
            onClick={() => window.location.href = '#contact'}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
