import React from "react";
import { FaFingerprint} from "react-icons/fa6";
import { FaRegShareSquare } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { RxLightningBolt } from "react-icons/rx";

const Feature = () => {
  const containerStyles = "py-10 bg-white sm:py-16 lg:py-24";
  const innerContainerStyles = "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8";
  const gridStyles =
    "grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12";
  const itemStyles = "flex flex-col items-center";

  return (
    <section className={containerStyles}>
      <div className={innerContainerStyles}>
      <div className={itemStyles}>
            <h1 className="text-3xl font-semibold tracking-tight pb-12 text-gray-900 sm:text-4xl lg:text-5xl">
              Why Choose StoreIt?
            </h1>
        </div>
        <div className={gridStyles}>
          <div className={itemStyles}>
            <div className="h-20 w-20 bg-blue-100 flex items-center justify-center rounded-full">
              <FaFingerprint className="flex items-center justify-center w-8 h-8 mx-auto text-blue-600" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Secured Payments
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              AirStore ensures all transactions are secure and encrypted for your
              safety.
            </p>
          </div>
          <div className={itemStyles}>
            <div className="h-20 w-20 bg-orange-100 flex items-center justify-center rounded-full">
              {" "}
              <RxLightningBolt className="flex items-center justify-center w-8 h-8 mx-auto text-orange-600" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Fast & Easy to Load
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Experience lightning-fast load times with AirStore.
            </p>
          </div>
          <div className={itemStyles}>
            <div className="h-20 w-20 bg-green-100 flex items-center justify-center rounded-full">
              <FaRegShareSquare className="flex items-center justify-center w-8 h-8 mx-auto text-green-600" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Share your files with the world
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Share your files with anyone in the world with StoreIt.
            </p>
          </div>

          <div className={itemStyles}>
            <div className="h-20 w-20 bg-red-100 flex items-center justify-center rounded-full">
              <FiHome className="flex items-center justify-center w-8 h-8 mx-auto text-red-600" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Easy to Use
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              AirStore is designed to be easy to use for all users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;