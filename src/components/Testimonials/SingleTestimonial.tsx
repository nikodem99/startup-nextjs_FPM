import { Testimonial } from "@/types/testimonial";
// Usuwamy import Image (i cały kod z obrazkiem)
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  // Zostały tylko star, name, content (bez image, bez designation)
  const { star, name, content } = testimonial;

  // Generowanie gwiazdek (rating)
  const ratingIcons = [];
  for (let i = 0; i < star; i++) {
    ratingIcons.push(
      <span key={i} className="text-yellow">
        {starIcon}
      </span>
    );
  }

  return (
    <div className="w-full">
      <div className="rounded-sm bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8">
        
        {/* Pasek gwiazdek (jeśli chcesz je zostawić) */}
        <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
        
        {/* Tekst opinii */}
        <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
          “{content}
        </p>

        {/* Imię autora */}
        <div>
          <h3 className="text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
