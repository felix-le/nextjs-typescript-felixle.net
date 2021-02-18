import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Data = [
  {
    countNum: 3,
    countTitle: `
      Stared from 2018, I worked at three different companies, from start-up to one of the biggest company in Vietnam. I focus on JavaScript and its libraries. 
      Coming to Canada, I am looking for a Canada company that I can contribute all of my strength for its success.
    `
  },
  {
    countNum: 5,
    countTitle:
      ` Five is the number of projects that I completed. They used gulp, pug, sass, ReactJs, TypeScript, Php`
  },
  {
    countNum: 93,
    countTitle:
      'Become a Georgian student, I learned many things and finished the fall term 2020 with overall GPA at 93,5'
  }
];

const Counter: React.FunctionComponent = () => {
  const [didViewCountUp, setDidViewCountUp] = useState(false);

  function onVisibilityChange(isVisible: boolean) {
    if (isVisible) {
      setDidViewCountUp(true);
    }
  }

  return (
    <div className="row">
      {Data.map((value, index) => (
        <div
          className="counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12"
          key={index}
        >
          <h5 className="counter">
            <VisibilitySensor
              onChange={onVisibilityChange}
              offset={{ top: 10 }}
              delayedCall
            >
              <CountUp end={didViewCountUp ? value.countNum : 0} />
            </VisibilitySensor>
          </h5>
          <p className="description">{value.countTitle}</p>
        </div>
      ))}
    </div>
  );
};
export default Counter;
