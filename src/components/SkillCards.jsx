import React from 'react';

const SkillCards = ({ Icon, name, className }) => {
    return (
    <div className="group relative p-1 bg-[#1F1F1F] text-white rounded-lg flex items-center space-x-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
        <Icon className={`w-10 h-6 ${className} group-hover:text-blue-500 transition-all duration-300`} />
        <h3 className="text-lg font-family">{name}</h3>
    </div>
    );
};

export default SkillCards;


