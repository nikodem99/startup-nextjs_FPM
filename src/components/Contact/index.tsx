import NewsLatterBox from "./NewsLatterBox";
import SectionTitle from "../Common/SectionTitle";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Główna kolumna – wyśrodkowana dzięki mx-auto */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12 mx-auto">
            {/* Element z opiniami uczestników / nagłówkiem kontaktowym */}
            <div className="container1 mb-8">
              <SectionTitle
                title="Kontakt"
                paragraph=""
                center
              />
            </div>
            {/* Formularz kontaktowy */}
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Formularz zgłoszeniowy
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
               Wypełnij formularz, a nasi specjaliście skontaktują się z Tobą!
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Imię
                      </label>
                      <input
                        type="text"
                        placeholder="Wpisz swoje imię"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        E-mail
                      </label>
                      <input
                        type="email"
                        placeholder="Wpisz swój email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                       Napisz swoją wiadomość
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Wpisz treść wiadomości"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Wyślij wiadomość
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* Jeśli newsletter został usunięty, ta kolumna może zostać usunięta */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
