import { useEffect, useState } from "react";
import axios from "axios";

export default function Job() {
  const url = "https://jobifybackend.onrender.com/api/v1/jobs";
  const [jobs, setJobs] = useState();

  const getJobs = async () => {
    const { data } = await axios.get(url);
    setJobs(data.jobs);
  };
  useEffect(() => {
    getJobs();
  }, []);

  const [buttonClassName, setButtonClassName] = useState(
    "fa-regular fa-bookmark"
  );

  const handleButtonClass = () => {
    if (buttonClassName === "fa-regular fa-bookmark") {
      setButtonClassName("fa-solid fa-bookmark");
    } else {
      setButtonClassName("fa-regular fa-bookmark");
    }
  };
  const randomColorChooser = () => {
    const colorArray = [
      "bg-blue-50",
      "bg-red-50",
      "bg-purple-50",
      "bg-green-50",

      "bg-yellow-50",
    ];
    const randomNumber = Math.floor(Math.random() * 5);
    return colorArray[randomNumber];
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Jobs</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {jobs?.map((job) => (
            <div key={job?.id} className="group border-2 p-2 rounded-2xl ">
              <div
                className={`${randomColorChooser()} h-80 aspect-w-1 w-full overflow-x-hidden rounded-lg  xl:aspect-h-6  xl:aspect-w-7 2xl:aspect-h-5 `}
              >
                <div className="banner p-5">
                  <div className="flex justify-between mb-5">
                    <div className="font-semibold border-2 inline px-2 py-1 text-sm bg-white rounded-3xl border-white">
                      {job?.formattedCreatedDate}
                    </div>
                    <button
                      className="border-2 inline px-2 py-1 bg-white rounded-3xl border-white"
                      onClick={handleButtonClass}
                    >
                      <i className={buttonClassName}></i>
                    </button>
                  </div>

                  <p className="text-gray-700 font-bold text-sm">
                    {job?.company.name}
                  </p>
                  <div className="flex justify-between pb-2">
                    <h2 className="text-black font-semibold text-2xl inline">
                      {job?.name}
                    </h2>
                    <img
                      src={job?.company.logo}
                      width="35px"
                      height="2px"
                      alt="hello"
                      className="rounded-2xl inline h-9"
                    />
                  </div>

                  <div className="mt-4 overflow-y-visible ">
                    {job?.tags.map((tag) => (
                      <p className="border-2 inline-block mb-2 px-2 py-1 bg-white rounded-3xl border-white text-xs font-semibold mr-2">
                        {tag}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <div className="px-4 pb-3 inline-block">
                  <p className="mt-4 text-base font-bold  text-gray-900">
                    ${job?.pay}/hr
                  </p>
                  <h3 className=" text-sm text-gray-500 font-semibold">
                    California, CA
                  </h3>
                </div>
                <button className="relative inline-block text-sm group pr-3">
                  <span className="relative z-10 block px-4 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-gray-900 rounded-3xl group-hover:text-gray-800">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-2xl bg-gray-900"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12   bg-gray-50 group-hover:-rotate-180 ease"></span>
                    <span className="relative">Details</span>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
