"use client";
import Image from "next/image";
import NewsletterForm from "./footer/NewsLetter";
import Socials from "./footer/Socials";
import ContactUs from "./footer/ContactUs";

export default function Footer() {
  return (
    <footer className="relative isolate font-poppins text-white mt-8">
      {/* bg image */}
      <div
        className="relative isolate -z-10 h-auto p-12 "
        style={{
          backgroundImage: "url(/footer/bg-footer.jpg)",
        }}>
        {/* dark overlay for contrast */}
        <div
          className="absolute inset-0 bg-cover -z-10 bg-black/70"
          aria-hidden
        />

        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 mx-auto max-w-7xl px-4 items-start">
          {/* Brand + blurb */}
          <div className="max-w-xl col-span-2">
            <Image
              src="/footer/logo-white.svg"
              alt="Tinytales"
              width={50}
              height={50}
              priority
            />
            <p className="mt-4 text-xs leading-6 text-grey-50 z-20">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy dolor sit amet, consectetuer adipiscing elit, sed
              diam nonummy
            </p>
          </div>

          {/* Contact Us */}
          <ContactUs />

          {/* Let Us Help */}
          <div className="flex flex-col justify-center">
            <h4 className="text-lg font-semibold">Let Us Help</h4>
            <ul className="mt-4 space-y-3 text-grey-50 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact & Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  All Products
                </a>
              </li>
            </ul>
          </div>

          {/* Policies (desktop only) */}
          <div className="hidden md:block">
            <h4 className="text-lg font-semibold">Policies</h4>
            <ul className="mt-4 space-y-3 text-grey-50 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Send Email (visible on md+, but we also show a compact version on mobile below) */}
          <div className="hidden lg:block col-span-2">
            <h4 className="text-lg font-semibold">Send Email</h4>
            <NewsletterForm />
            <h4 className="text-md font-bold my-6">Follow Us</h4>
            <Socials />
          </div>
        </div>

        {/* Mobile: email + socials stacked and full width */}
        <div className="mt-8 lg:hidden px-4">
          <h4 className="text-lg font-semibold">Send Email</h4>
          <NewsletterForm />
          <div className="mt-6">
            <div className="text-sm text-white/85">Follow Us</div>
            <Socials className="mt-3" />
          </div>
        </div>
        {/* </div> */}
      </div>
    </footer>
  );
}
