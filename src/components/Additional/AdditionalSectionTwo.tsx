"use client";
import Image from "next/image";

const AdditionalSectionTwo = () => {
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
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
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
                Pomoc w uzyskaniu karty pobytu
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Karta pobytu to kluczowy dokument pozwalający cudzoziemcom na legalny, długoterminowy pobyt w Polsce oraz swobodne przekraczanie granicy bez konieczności posiadania wizy. Fundacja zapewnia kompleksowe wsparcie na każdym etapie tego procesu: pomożemy przygotować wymagane dokumenty, wskażemy odpowiedni urząd oraz wyjaśnimy, jak skutecznie przejść przez całą procedurę.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Wsparcie w uzyskaniu zezwolenia na pracę
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Oferujemy profesjonalne doradztwo w uzyskaniu zezwolenia na pracę, dzięki któremu cudzoziemcy mogą legalnie podjąć zatrudnienie w Polsce. Doradzamy zarówno pracownikom, jak i pracodawcom, pomagając w prawidłowym dopełnieniu formalności oraz zapewniając szczegółowe informacje dotyczące różnych typów zezwoleń zgodnych ze specyfiką danego zatrudnienia.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Pomoc w kontaktach z urzędami
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Nasi specjaliści zapewniają wsparcie w komunikacji i kontakcie z urzędami. Pomagamy naszym podopiecznym w sprawnym uzyskaniu numeru PESEL, w załatwieniu wszelkich formalności administracyjnych, a także podpowiadamy, jak najlepiej przygotować się do wizyt w instytucjach publicznych, minimalizując stres oraz potencjalne trudności językowe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalSectionTwo;
