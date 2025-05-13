import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router";
import { topGainers } from "src/const";

export default function TopGainerMini () {
    const [isDaily ,setIsDaily] = useState(true);
    return (
        <section className="w-full px-5 md:bg-neutral-800 flex flex-col gap-6 md:rounded-2xl md:px-8 md:pt-4 md:pb-2 lg:w-2/5">
          <div className="flex gap-5 items-center justify-center md:justify-between">
            <div className="flex gap-4">
              <button
                onClick={() => setIsDaily(true)}
                className={`text-sm text-neutral-100 leading-10 cursor-pointer ${
                  isDaily ? "border-b-2 border-amber-300" : ""
                }`}
              >
                Today Winners
              </button>
              <button
                onClick={() => setIsDaily(false)}
                className={`text-sm text-neutral-100 leading-10 cursor-pointer ${
                  isDaily ? "" : "border-b-2 border-amber-300"
                }`}
              >
                Top Winners
              </button>
            </div>
            <Link className="hidden items-center justify-center cursor-pointer md:flex">
              <a className="text-sm underline font-light text-neutral-500 hover:text-amber-50 transition-colors z-40">
                View All Gainers {">"}
              </a>
            </Link>
          </div>
          <div className="flex flex-col justify-between">
            {topGainers.map((e, i) => (
              <div
                key={e.id}
                className=" w-full py-3 flex justify-between items-center "
              >
                <p className="w-1/4">{i + 1}</p>
                <div className="text-sm text-neutral-400 font-mono flex flex-1 gap-2">
                  <FontAwesomeIcon icon="fa-solid fa-user"/>
                  {e.id}
                </div>
                <p className="text-sm text-amber-300 font-mono">
                  <span className="text-neutral-300">+{e.amount}</span> MMK
                </p>
              </div>
            ))}
          </div>
          <Link className="w-full flex items-center justify-center mb-5 cursor-pointer md:hidden">
            <a className="text-sm underline font-light text-neutral-500 hover:text-amber-50 transition-colors z-0">
              View All Gainers {">"}
            </a>
          </Link>
        </section>
    );
}