import "./styles.css";
import { InterpretersProfile } from "./InterpretersProfile";
import { useRef } from "react";
import type { interpreterProfilesType } from "../types";

type CarouselProps = {
    interpreters: interpreterProfilesType[];
    onClick: (interpreter: interpreterProfilesType) => void;
}

export function Carousel({ interpreters, onClick }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -(276 + 16),
        behavior: "smooth",
      });
    }
  };
  const handleRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 276 + 16,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="meetInter">
        <div className="meetInter-title">
            <h2>Meet Our Expert Interpreters:</h2>
        </div>
      <div className="carousel-container" id="meet-interpreters">
        <button className="scroll-left" onClick={handleLeft}>
          ←
        </button>
        <div className="carousel-viewport" ref={carouselRef}>
          <div className="carousel-track">
            {interpreters?.map((interpreter) => (
              <InterpretersProfile
                key={interpreter.id}
                interpreter={interpreter}
                onClick={onClick}
              />
            ))}
          </div>
        </div>
        <button className="scroll-right" onClick={handleRight}>
          →
        </button>
      </div>
    </div>
  );
}
