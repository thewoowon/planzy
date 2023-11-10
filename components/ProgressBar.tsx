import React, { useEffect, useRef } from "react";

const ProgressBar = ({
  duration,
  isActive,
}: {
  duration: number;
  isActive: boolean;
}) => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (barRef.current) {
      if (isActive) {
        barRef.current.style.animation = `progress ${duration}ms linear`;
      } else {
        barRef.current.style.animation = "none";
      }
    }
  }, [isActive, duration]);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" ref={barRef}></div>
    </div>
  );
};

export default ProgressBar;
