"use client";
import Image from "next/image";

const CourseSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Lewa kolumna – obrazek */}
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/courses/course-image.svg"
                alt="course image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/courses/course-image-dark.svg"
                alt="course image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          {/* Prawa kolumna – tekst */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Budowanie wizerunku zawodowego
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Szkolenie obejmuje praktyczne wskazówki dotyczące autoprezentacji, kreowania profesjonalnego profilu oraz umiejętności skutecznego przedstawiania swoich kompetencji zawodowych.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Komunikacja międzykulturowa
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Szkolenie ułatwia poznanie kulturowych aspektów komunikacji w Polsce, dzięki czemu szybciej i łatwiej nawiążesz pozytywne relacje zawodowe oraz osobiste w nowym środowisku.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Organizacja pracy i zarządzanie czasem
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Na kursie nauczysz się skutecznie planować swoją pracę oraz efektywnie zarządzać czasem, co pozwoli Ci zwiększyć swoją produktywność oraz komfort pracy w Polsce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSectionTwo;
