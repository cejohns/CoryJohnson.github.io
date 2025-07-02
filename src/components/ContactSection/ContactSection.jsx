import React from 'react';
import Button from '../ui/Button';

const ContactSection = () => {
  return (
    <section className="px-6 py-12 bg-gray-900 text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg mb-6">
        You can reach me via email or connect through social media.
      </p>

      <p className="text-xl mb-8">
        📧 Email:{' '}
        <a
          href="mailto:cejohns3@gmail.com"
          className="text-blue-400 underline hover:text-blue-600"
        >
          cejohns3@gmail.com
        </a>
      </p>

      <div className="flex justify-center space-x-4 text-2xl mb-8">
        <a
          href="https://github.com/cejohns"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/cejohnson54/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          LinkedIn
        </a>
      </div>

      <div className="mt-8">
        <Button
          variant="primary"
          onClick={() => window.location.href = 'mailto:cejohns3@gmail.com'}
        >
          Send Email
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
