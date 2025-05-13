import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { company, contacts, help, services } from "src/const";
import LanguageChangeBtn from "./buttons/languageBtn";
import { useTranslation } from "react-i18next";


const FooterSection = () => {
    const {t , i18n} = useTranslation()
  return (
    <footer className="flex flex-col bg-neutral-900">
      <div className="flex flex-col lg:flex-row-reverse w-full md:p-4 mt-10 ">
        <div id="footer" className="flex flex-row justify-between lg:flex-2/3">
          <div className="flex flex-col pl-5 py-4">
            <h5 className="text-lg text-neutral-200 font-medium mb-2">
              Services
            </h5>
            {services.map((service, index) => (
              <Link>
                <div className="my-2">
                  <a className="text-sm text-neutral-500 hover:text-amber-500 sm:text-md md:text-lg lg:text-xl">
                    {service.label}
                  </a>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex flex-col py-4">
            <h5 className="text-lg text-neutral-200 font-medium mb-2">
              Company
            </h5>
            {company.map((company, index) => (
              <Link>
                <div className="my-2">
                  <a className="text-sm text-neutral-500 hover:text-amber-500 sm:text-md md:text-lg lg:text-xl">
                    {company.label}
                  </a>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex flex-col pr-5 py-4">
            <h5 className="text-lg text-neutral-200 font-medium mb-2">Help</h5>
            {help.map((e, i) => (
              <Link>
                <div className="my-2">
                  <a className="text-sm text-neutral-500 hover:text-amber-500 sm:text-md md:text-lg lg:text-xl">
                    {e.label}
                  </a>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <aside
          id="community"
          className="p-5 flex flex-1 flex-col justify-center lg:mr-10"
        >
          <p className="text-lg text-neutral-200 font-medium">Community</p>
          <div className="flex flex-0.5 h-auto flex-row flex-wrap  gap-6 mt-6 lg:grid lg:grid-cols-3 lg:gap-8">
            {contacts.map((e) => (
              <button className="p-2">
                <img
                  src={e.icon}
                  width={25}
                  height={25}
                  className="lg:w-10 lg:h-10"
                />
              </button>
            ))}
          </div>
          <div className="flex w-full mt-5">
            <LanguageChangeBtn t={t} i18n={i18n} />
          </div>
        </aside>
      </div>
      <div className="mx-2 flex flex-col lg:flex-row gap-2 lg:gap-4 items-center justify-center py-5 border-t-1 border-neutral-800">
        <p className="text-sm text-neutral-400">Trademark@ 2025</p>
        <p className="text-sm text-neutral-400">Cookie Preferences</p>
      </div>
    </footer>
  );
};
export default FooterSection;
