// StatsCards.js
import React from 'react';
import styles from "./StatsCards.module.css";
import StatsInfoCard from './StatsInfoCard/StatsInfoCard';

const statsData = [
    {"name": "Total Solsticker Balance", "value": "$1,163.66"},
    {"name": "Solsticker Users Online", "value": 200000},
    {"name": "Daily Users", "value": 600000},
    {"name": "Total Players", "value": 25000000}
];

const StatsCards = () => {
  return (
    <div className="container">
      <div className="flex flex-row justify-center items-center">
      <div className='columns-4 flex justify-center items-center text-white'>

        {statsData.map((item, key) => (
          <StatsInfoCard data={item} key={key} />
        ))}
        </div>
        </div>
    </div>
  );
};

export default StatsCards;
