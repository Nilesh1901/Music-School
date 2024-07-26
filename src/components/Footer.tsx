import React from "react";
import Link from "next/link";
import { link } from "fs";
const quickLinks = [
  {
    to: "/",
    name: "Home",
  },
  {
    to: "/about",
    name: "About",
  },
  {
    to: "/courses",
    name: "Courses",
  },
  {
    to: "/contact",
    name: "Contact",
  },
];
const followUs = ["X", "Facebook", "Instagram"];
function Footer() {
  return (
    <div className="bg-black  text-gray-400 py-12">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-3 ">
        <div className="flex flex-col items-center">
          <h5 className="text-lg mb-4 font-semibold text-white">About us</h5>
          <p className=" text-lg text-center">
            Music School is premier institution dedicated to learning the are
            and acience of music. We nuture talent from the ground up, fostering
            a vibrant community of musicians.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="text-lg mb-4 font-semibold text-white">Quict Links</h5>

          <ul>
            {quickLinks.map((link) => (
              <FooterLink key={link.name} to={link.to} name={link.name} />
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="text-lg font-semibold mb-5 text-white">Follow Us</h5>
          <ul>
            {followUs.map((link) => (
              <FooterLink key={link} to={link} name={link} />
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="text-lg font-semibold mb-4 text-white">Address</h5>
          <div className="">
            <p>Mankhurd, India</p>
            <p>Mumbai 400043</p>
            <p>Email: info@musicschool.com</p>
            <p>Phone: 9876543210</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const FooterLink = ({ to, name }: { to: string; name: string }) => {
  return (
    <li className="mt-1">
      <Link href={to} className="hover:text-gray-200 transition-all">
        {name}
      </Link>
    </li>
  );
};

export default Footer;
