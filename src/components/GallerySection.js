import React from 'react';

// Camera icon for gallery placeholders
const Camera = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586l-.707-.707A1 1 0 0013 4H7a1 1 0 00-.707.293L5.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
  </svg>
);

export default GallerySection;
