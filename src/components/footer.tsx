import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { company, help, services } from "src/const";

const FooterSection = () => {
  return (
    <footer className="flex flex-col bg-neutral-900">
      <div className="flex flex-col lg:flex-row w-full md:p-4 mt-10 ">
        <div id="footer" className="flex flex-row justify-between lg:flex-2/3">
          <div className="flex flex-col pl-5 py-4">
            <h5 className="text-lg text-neutral-200 font-medium mb-2">
              Services
            </h5>
            {services.map((service, index) => (
              <Link className="">
                <div className="my-2">
                  <a className="text-md text-neutral-500 hover:text-amber-500">
                    {service.label}
                  </a>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex flex-col pl-5 py-4">
            <h5 className="text-lg text-neutral-200 font-medium mb-2">
              Company
            </h5>
            {company.map((company, index) => (
              <Link>
                <div className="my-2">
                  <a className="text-md text-neutral-500 hover:text-amber-500">
                    {company.label}
                  </a>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex flex-col pl-5 py-4">
            <h5 className="text-lg text-neutral-200 font-medium mb-2">Help</h5>
            {help.map((e, i) => (
              <Link>
                <div className="my-2">
                  <a className="text-md text-neutral-500 hover:text-amber-500">
                    {e.label}
                  </a>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <aside
          id="community"
          className="p-5 h-full flex flex-1/2 flex-col items-center justify-center flex-wrap"
        >
          <p className="text-lg text-neutral-200 font-medium">Community</p>
          <div className="flex flex-row flex-wra  gap-4 mt-6 lg:flex-col lg:gap-6">
            {services.map(() => (
              <FontAwesomeIcon icon={"fa-solid fa-circle-question "} />
            ))}
          </div>
        </aside>
      </div>
      <div className="flex items-center justify-center py-5 border-t-1 border-neutral-800">
        <p className="text-sm text-neutral-400">
          Trademark@ 2025 Cookie Preferences
        </p>
      </div>
    </footer>
  );
};
export default FooterSection;
