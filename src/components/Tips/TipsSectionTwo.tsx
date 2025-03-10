"use client";
import Image from "next/image";

const TipsSectionTwo = () => {
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
                src="/images/tips/tips-image-2.svg"
                alt="tips image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/tips/tips-image-2-dark.svg"
                alt="tips image"
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
                Praktyczne porady na co dzień
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Dowiedz się, jak wygodnie i szybko podróżować po Polsce oraz jak sprawnie poruszać się komunikacją miejską, kolejową czy aplikacjami mobilnymi. Podpowiemy Ci również, gdzie najlepiej załatwić codzienne sprawy urzędowe.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Efektywne poszukiwanie pracy
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Poznaj sprawdzone platformy i serwisy, które ułatwią Ci znalezienie zatrudnienia. Dzięki naszym wskazówkom unikniesz typowych błędów, zaoszczędzisz czas, a proces szukania pracy stanie się znacznie łatwiejszy i skuteczniejszy.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Praktyczna komunikacja z urzędami
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Dowiedz się, jak krok po kroku przygotować się do wizyty w urzędzie, jakie dokumenty ze sobą zabrać oraz gdzie znaleźć szczegółowe informacje dotyczące legalizacji pobytu i zatrudnienia w Polsce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TipsSectionTwo;
