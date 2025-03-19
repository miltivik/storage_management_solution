import React from "react";
import Image from "next/image";
import { FaTasks, FaCloud,  FaFingerprint, FaBolt, FaMoon, FaShieldAlt  } from "react-icons/fa";


const commonStyles = {
  section: "py-12 bg-gray-50 sm:py-16 lg:py-20",
  container: "px-4 py-12 pb-24 mx-auto max-w-7xl sm:px-6 lg:px-8",
  headingContainer: "max-w-xl mx-auto text-center xl:max-w-3xl",
  heading: "text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj",
  description:
    "max-w-xl mx-auto mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj",
  relativeWrapper: "relative mt-8 sm:mt-16 md:max-w-md md:mx-auto",
  overlay:
    "absolute inset-0 w-full h-full max-w-lg rotate-180 opacity-30 blur-lg filter",
  textContainer:
    "flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-16",
  textBox: "flex items-center",
  textMain: "text-4xl font-medium text-gray-900 font-pj",
  textSub: "ml-5 text-sm text-gray-900 font-pj",
  imageContainer: "max-w-4xl mx-auto mt-10 sm:mt-16",
  image: "w-full rounded-sm",
};


type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features: FeatureProps[] = [
  {
    icon: <FaFingerprint className="text-blue-600 w-7 h-7" />,
    title: "Reliable Transfers",
    description:
      "Enjoy seamless and secure money transfers with our state-of-the-art technology ensuring your transactions are always safe and efficient.",
  },
  {
    icon: <FaBolt className="text-orange-600 w-8 h-8" />,
    title: "Instant Notifications",
    description:
      "Stay informed with instant notifications on your account activity, ensuring you are always aware of your financial transactions.",
  },
  {
    icon: <FaMoon className="text-green-600 w-8 h-8" />,
    title: "User-Friendly Interface",
    description:
      "Experience our intuitive and easy-to-use interface designed to provide a smooth and enjoyable user experience for all your payment needs.",
  },
  {
    icon: <FaMoon className="text-purple-600 w-8 h-8" />,
    title: "24/7 Support",
    description:
      "Get assistance anytime with our dedicated 24/7 support team, always ready to help you with any issues or inquiries you may have.",
  },
  {
    icon: (
      <svg
        className="text-gray-600 w-9 h-9"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15 10l4.553-2.276A2 2 0 0122 9.618v4.764a2 2 0 01-2.447 1.894L15 14m0-4v8m0-8L9.447 7.724A2 2 0 008 9.618v4.764a2 2 0 001.553 1.894L15 14m0-4H9m6 0v8m0-8L9 14"
        />
      </svg>
    ),
    title: "Customizable Plans",
    description:
      "Choose from a variety of plans and customize them to suit your specific business needs, ensuring you only pay for what you use.",
  },
  {
    icon: <FaShieldAlt className="text-yellow-600 w-8 h-8" />,
    title: "Advanced Security",
    description:
      "Protect your transactions with our advanced security protocols and encryption, ensuring your data is always secure.",
  },
];

const commonStyle = "relative flex items-center justify-center mx-auto";


const Hero: React.FC = () => {
  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.container}>
        <div className={commonStyles.headingContainer}>
          <h2 className={commonStyles.heading}>
            Build your solid team with the perfect time management
          </h2>
          <p className={commonStyles.description}>
            Auraui enhances your team&apos;s productivity with effortless task
            management and robust cloud storage solutions. Keep your team
            organized and your projects on track.
          </p>
        </div>

        <div className={commonStyles.relativeWrapper}>
          <div
            className={commonStyles.overlay}
            style={{
              background:
                "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
            }}
          ></div>

          <div className={commonStyles.textContainer}>
            <div className={commonStyles.textBox}>
              <FaTasks className={commonStyles.textMain} />
              <div className={commonStyles.textSub}>
                <p>Unlimited</p>
                <p>Task Creation</p>
              </div>
            </div>

            <div className={`${commonStyles.textBox} mt-6 sm:mt-0`}>
              <FaCloud className={commonStyles.textMain} />
              <div className={commonStyles.textSub}>
                <p>100GB+</p>
                <p>Cloud Storage</p>
              </div>
            </div>
          </div>
        </div>

        <div className={commonStyles.imageContainer}>
          <Image
            className={commonStyles.image}
            src="https://www.auraui.com/images/team.jpg"
            alt="Feature illustration"
            width={1200}
            height={800}
          />
        </div>
      </div>

      <div className="px-4 py-20  mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
          {features.map((feature, index) => (
            <div key={index}>
              <div className={commonStyle}>
                <div className="bg-gray-100 w-16 h-16 flex items-center justify-center rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                {feature.title}
              </h3>
              <p className="mt-4 text-base text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
