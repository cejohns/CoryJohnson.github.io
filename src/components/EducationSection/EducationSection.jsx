import React from 'react';
import Button from '../ui/Button';

const EducationSection = () => {
  return (
    <section className="px-6 py-12 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-4">Education</h2>
      <p className="text-lg text-gray-300 mb-6">
        Information about my educational background and certifications.
      </p>
      <Button
        variant="secondary"
        onClick={() => window.location.href = '/resume'}
      >
        View Resume
      </Button>
    </section>
  );
};

export default EducationSection;
