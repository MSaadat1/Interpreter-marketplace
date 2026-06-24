import "./styles.css";
import { testimonials } from "../staticData";
import type { TestimonialItem } from "../types";

export function Testimonial() {
  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        <h2 className="testimonial-header">What Our Clients Say</h2>
        <p className="testimonial-description">
          {" "}
          Hear directly from our satisfied clients about their experiences.
        </p>
        <div className="testimonial-gallery">
          {testimonials.map((item: TestimonialItem) => (
            <div className="testimonial-card" key={item.id}>
              <img
                src={item.image}
                alt="item-image"
                className="testimonial-image"
              />
              <h3 className="testimonial-name">{item.name}</h3>
              {item.role && <p className="testimonial-role">{item.role}</p>}
              <p className="testimonial-review">{item.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
