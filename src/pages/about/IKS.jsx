import React from 'react';
import { BookOpen, Lightbulb, GraduationCap } from 'lucide-react';

const IKS = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-secondary mb-4">Indian Knowledge System (IKS)</h1>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <BookOpen className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold text-secondary">Promoting Traditional Knowledge</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                PCTE is committed to integrating Indian Knowledge System (IKS) into our curriculum, promoting traditional knowledge alongside modern education.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe in preserving and promoting India's rich heritage of knowledge systems while preparing students for contemporary challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-primary rounded-lg p-6">
                <Lightbulb className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-secondary mb-2">Traditional Wisdom</h3>
                <p className="text-gray-600">Integrating ancient Indian knowledge systems with modern academic frameworks.</p>
              </div>
              <div className="bg-white border-2 border-primary rounded-lg p-6">
                <GraduationCap className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-secondary mb-2">Holistic Education</h3>
                <p className="text-gray-600">Providing a balanced education that honors both traditional and contemporary knowledge.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IKS;

