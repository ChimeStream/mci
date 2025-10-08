'use client';

import React, { useState, useRef, HTMLAttributes, useEffect } from 'react';

const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

export interface TimelineItem {
  year: string;
  event: string;
}

interface CircularTimelineProps extends HTMLAttributes<HTMLDivElement> {
  items: TimelineItem[];
  radius?: number;
  rotation?: number;
  onRotationChange?: (rotation: number) => void;
}

const CircularTimeline = React.forwardRef<HTMLDivElement, CircularTimelineProps>(
  ({ items, className, radius = 600, rotation: externalRotation, onRotationChange, ...props }, ref) => {
    const [internalRotation, setInternalRotation] = useState(0);
    const rotation = externalRotation !== undefined ? externalRotation : internalRotation;
    const touchStartRef = useRef<{ x: number; rotation: number } | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const anglePerItem = 360 / items.length;

    const handleRotationChange = (newRotation: number) => {
      if (externalRotation === undefined) {
        setInternalRotation(newRotation);
      }
      onRotationChange?.(newRotation);
    };

    // Touch event handlers for mobile gestures
    const handleTouchStart = (e: React.TouchEvent) => {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        rotation: rotation,
      };
    };

    const handleTouchMove = (e: React.TouchEvent) => {
      if (!touchStartRef.current || !containerRef.current) return;

      const deltaX = e.touches[0].clientX - touchStartRef.current.x;
      const containerWidth = containerRef.current.offsetWidth;
      const rotationDelta = (deltaX / containerWidth) * 180;

      handleRotationChange(touchStartRef.current.rotation + rotationDelta);
    };

    const handleTouchEnd = () => {
      touchStartRef.current = null;
    };

    // Mouse drag handlers for desktop
    const [isDragging, setIsDragging] = useState(false);
    const mouseStartRef = useRef<{ x: number; rotation: number } | null>(null);

    const handleMouseDown = (e: React.MouseEvent) => {
      setIsDragging(true);
      mouseStartRef.current = {
        x: e.clientX,
        rotation: rotation,
      };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !mouseStartRef.current || !containerRef.current) return;

      const deltaX = e.clientX - mouseStartRef.current.x;
      const containerWidth = containerRef.current.offsetWidth;
      const rotationDelta = (deltaX / containerWidth) * 180;

      handleRotationChange(mouseStartRef.current.rotation + rotationDelta);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      mouseStartRef.current = null;
    };

    useEffect(() => {
      if (isDragging) {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('mouseup', handleMouseUp);
        };
      }
    }, [isDragging]);

    return (
      <div
        ref={containerRef}
        role="region"
        aria-label="Circular Timeline"
        className={cn("relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing", className)}
        style={{ perspective: '2000px' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        {...props}
      >
        <div
          className="relative w-full h-full"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: 'preserve-3d',
            transition: isDragging || touchStartRef.current ? 'none' : 'transform 0.5s ease-out',
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            const totalRotation = rotation % 360;
            const relativeAngle = (itemAngle + totalRotation + 360) % 360;
            const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);
            const opacity = Math.max(0.3, 1 - (normalizedAngle / 180));
            const scale = Math.max(0.7, 1 - (normalizedAngle / 360));

            return (
              <div
                key={`${item.year}-${i}`}
                role="group"
                aria-label={`Year ${item.year}`}
                className="absolute w-[220px] h-[320px] pointer-events-none"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px) scale(${scale})`,
                  left: '50%',
                  top: '50%',
                  marginLeft: '-110px',
                  marginTop: '-160px',
                  opacity: opacity,
                  transition: 'opacity 0.3s linear, transform 0.3s linear'
                }}
              >
                <div
                  className="relative w-full h-full overflow-hidden shadow-2xl"
                  style={{
                    backgroundColor: '#00162E',
                    borderRadius: '30px',
                  }}
                >
                  <div className="absolute bottom-6 left-6 right-6">
                    {/* Year */}
                    <div
                      className="font-bold leading-tight mb-4"
                      style={{
                        fontFamily: 'Lato, sans-serif',
                        fontSize: '36px',
                        color: 'white',
                      }}
                    >
                      {item.year}
                    </div>

                    {/* Event */}
                    <p
                      className="font-normal leading-snug pr-2"
                      style={{
                        fontFamily: 'Lato, sans-serif',
                        fontSize: '14px',
                        color: 'white',
                      }}
                    >
                      {item.event}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

CircularTimeline.displayName = 'CircularTimeline';

export { CircularTimeline };
