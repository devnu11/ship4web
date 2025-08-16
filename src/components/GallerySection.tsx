import { Camera } from './ui/Camera';
import type { ImagePlaceholder } from '../types';

export const GallerySection = () => {
  // Image suggestions for scout management
  const imagePlaceholders: ImagePlaceholder[] = [
    { id: 1, title: "Sailing Training", description: "Replace with: Scouts learning to sail on Lake Travis" },
    { id: 2, title: "Knot Tying Workshop", description: "Replace with: Youth practicing seamanship skills" },
    { id: 3, title: "Seabase Adventure", description: "Replace with: High adventure photos from Florida Sea Base" },
    { id: 4, title: "Leadership Training", description: "Replace with: Ship officers in leadership roles" },
    { id: 5, title: "Community Service", description: "Replace with: Scouts participating in water conservation projects" },
    { id: 6, title: "Awards Ceremony", description: "Replace with: Advancement and recognition events" }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
          <p className="text-xl text-gray-600">Memories from our maritime adventures</p>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
          {imagePlaceholders.map(placeholder => (
            <div key={placeholder.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center">
                <div className="text-center text-blue-800">
                  <Camera size={48} className="mx-auto mb-2" />
                  <p className="font-semibold">{placeholder.title}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">{placeholder.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600 bg-yellow-100 border border-yellow-300 rounded-lg p-4 max-w-2xl mx-auto">
            <strong>For Scout Leaders:</strong> Replace these placeholders with actual photos from Seabase adventures, 
            training sessions, and Ship 4 activities. Recommended image size: 400x300px minimum.
          </p>
        </div>
      </div>
    </section>
  );
};