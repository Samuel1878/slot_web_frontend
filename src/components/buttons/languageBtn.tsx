import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { languageData } from "src/const";

const LanguageChangeBtn = ( { t, i18n }) => {
    return (
      <div className="flex flex-row items-center justify-between pl-15 pr-5">
        <p className="text-gray-300 text-md">
          {/* <span className="mr-4">
            <FontAwesomeIcon icon="fa-solid fa-globe" color="#a3a3a3"/>
          </span> */}
          {t("language")}
        </p>
        <div className="flex flex-row p-1 bg-neutral-950 justify-around items-center border-1 rounded-lg overflow-hidden border-neutral-600">
          {languageData.map((e) => (
            <button
              className={`z-50 h-10 px-2 text-md ${
                e.value === "en"
                  ? "bg-neutral-800 text-amber-700 rounded-l-sm"
                  : ""
              } text-gray-300`}
              onClick={() => i18n.changeLanguage(e.value)}
            >
              {e.label}
            </button>
          ))}
        </div>
      </div>
    );
}
export default LanguageChangeBtn;