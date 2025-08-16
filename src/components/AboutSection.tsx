import { Users, Anchor, Calendar } from 'lucide-react';

export const AboutSection = () => (
  <section id="about" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">About Sea Scout Ship 4</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the adventure of Sea Scouting with Ship 4, where young mariners learn seamanship, 
          leadership, and character while exploring the waters of Central Texas.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="text-blue-800" size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Leadership</h3>
          <p className="text-gray-600">Develop leadership skills through hands-on maritime experiences and team-building activities.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Anchor className="text-blue-800" size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Seamanship</h3>
          <p className="text-gray-600">Learn essential boating skills, navigation, and water safety in a supportive environment.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="text-blue-800" size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Adventure</h3>
          <p className="text-gray-600">Experience exciting adventures on the water and participate in regional Sea Scout events.</p>
        </div>
      </div>
    </div>
  </section>
);