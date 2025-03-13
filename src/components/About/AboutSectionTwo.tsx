import Image from "next/image";

const AboutSectionTwo = () => {
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
                src="/images/course/course2.svg"
                alt="Course illustration"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              {/* Jeśli masz alternatywny obraz dla trybu ciemnego, możesz go dodać poniżej */}
              <Image
                src="/images/course/course2.svg"
                alt="Course illustration dark"
                fill
                className="hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          {/* Prawa kolumna – tekst */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Pomoc w znalezieniu zakwaterowania
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Fundacja współpracuje z przedsiębiorcami na terenie całego kraju, którzy posiadają liczne miejsca do zamieszkania. Pomożemy w znalezieniu odpowiedniego miejsca zamieszkania oraz zorganizujemy bezpieczny transport.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Wsparcie i opieka w życiu codziennym
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Fundacja jest otwarta na pytania ze strony potrzebujących oraz pomaga w rozwiązaniu bieżących problemów. Wystarczy skontaktować się z opiekunem, a z pewnością doradzi, co robić w nowych sytuacjach.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Szkolenia zawodowe
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Fundacja zapewnia kompleksowe szkolenia, które pomogą w płynnym zaadoptowaniu się w Polsce. Prowadzimy szkolenia m.in. z zakresu skutecznego znalezienia i podjęcia pracy oraz wielu innych.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
