import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className="relative bg-[#1A1A1A]">
      <div className="relative z-10 max-w-[1300px] mx-auto px-6">
        <div className="py-20">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Left Section */}
            <div>
              <div>
                <Image
                  src="/assets/icons/logo-full.svg"
                  alt="asva logo"
                  width={100}
                  height={100}
                />
              </div>

              <div className="flex flex-row gap-4 md:gap-10 pt-20 mb-4 md:mb-0 ">
                <Link href="home">
                  <span className="text-xl text-white font-['Work_Sans'] hover:text-white/80 transition-all">
                    Home
                  </span>
                </Link>
                <Link href="features">
                  <span className="text-xl text-white font-['Work_Sans'] hover:text-white/80 transition-all">
                    Features
                  </span>
                </Link>
                <Link
                  href="pricing"
                  target="_blank"
                >
                  <span className="text-xl text-white font-['Work_Sans'] hover:text-white/80 transition-all">
                    Pricing
                  </span>
                </Link>
                <Link href="faq">
                  <span className="text-xl text-white font-['Work_Sans'] hover:text-white/80 transition-all">
                    FAQs
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Section */}
            <div className="pr-8">
              <div>
                <p className="py-2 text-xl text-white">Contact Us</p>
                <Link href="mailto:contact@asvaventures.com">
                  <span className="text-xl text-white pb-4 md:pb-0 font-['Work_Sans'] hover:text-white/80 transition-all">
                    contact@airstore.com
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://www.auraui.com/images/footer-bg.svg"
          alt="bg"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
        />
      </div>
    </div>
  );
}

export default Footer;