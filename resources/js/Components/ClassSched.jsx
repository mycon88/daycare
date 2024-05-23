import React, { useState } from 'react';
import './ClassSched.css';

export const ClassSched = () => {
  const morningSchedule = [
    { time: '9:00 AM - 9:30 AM', activity: 'Circle Time' },
    { time: '9:30 AM - 10:00 AM', activity: 'Structured Learning Activities' },
    { time: '10:00 AM - 10:30 AM', activity: 'Snack Time' },
    { time: '10:30 AM - 11:00 AM', activity: 'Outdoor Play' },
    { time: '11:00 AM - 12:00 PM', activity: 'Themed Activities and Arts & Crafts' },
  ];

  const afternoonSchedule = [
    { time: '2:00 PM - 2:30 PM', activity: 'Music and Movement' },
    { time: '2:30 PM - 3:00 PM', activity: 'Snack Time' },
    { time: '3:00 PM - 3:30 PM', activity: 'Indoor Play and Learning Centers' },
    { time: '3:30 PM - 4:00 PM', activity: 'Storytime and Wind Down' },
    { time: '4:00 PM - 5:00 PM', activity: 'Outdoor Play' },
  ];

  const [selectedSchedule, setSelectedSchedule] = useState('morning');

  return (
    <div className="container text-center p-4">
      <h2 className='text-2xl'>Daycare Class Schedule</h2>
      <div className="button-group">
        <button onClick={() => setSelectedSchedule('morning')}>Morning Schedule</button>
        <button onClick={() => setSelectedSchedule('afternoon')}>Afternoon Schedule</button>
      </div>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
          {(selectedSchedule === 'morning' ? morningSchedule : afternoonSchedule).map((item, index) => (
            <tr key={index}>
              <td><strong>{item.time}</strong></td>
              <td>{item.activity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassSched;
