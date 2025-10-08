import React from 'react';

const ProfileCard = ({
  name = "Mohamed Ghaith Hamzaoui",
  title = "Full Stack Developer",
  image = "/profile.png", 
  size = "w-40 h-40" 
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Circular Photo Container with White Stroke */}
      <div className={`${size} rounded-full border-8 border-white p-1 mb-4`}>
        <div className="w-full h-full rounded-full bg-transparent overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

    </div>
  );
};

export default ProfileCard;
