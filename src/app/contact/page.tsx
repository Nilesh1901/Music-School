import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";
import { Button } from "@/components/ui/moving-border";
import MovingBorderBtn from "@/components/MovingBorderBtn";

function page() {
  return (
    <div className="min-h-[100dvh] w-full rounded-md bg-zinc-950 relative flex flex-col items-center justify-center antialiased">
      <div className=" relative z-10 flex flex-col justify-center items-center mt-32 md:mt-24 mx-auto max-w-4xl p-4 md:p-0">
        <h1 className="font-extrabold text-4xl md:text-7xl text-center">
          Contact Us
        </h1>
        <p className="text-base md:text-lg text-neutral-300 text-center my-10">
          We are here to help with any question about our courses, programms, or
          events. Reach out and let us know how we can assist you in your
          musical journey.
        </p>
        <div className="flex flex-col gap-8 w-full">
          <input
            type="text"
            placeholder="Your Email address"
            className="rounded-lg border p-3 border-neutral-700 focus:ring-2 focus:ring-teal-500  w-full  bg-neutral-900 placeholder:text-neutral-700"
          />
          <textarea
            rows={8}
            name=""
            id=""
            className="rounded-lg border p-3 border-neutral-700 focus:ring-2 focus:ring-teal-500 w-full mt-4  bg-neutral-900 placeholder:text-neutral-700"
            placeholder="Your message"
          ></textarea>
          <div>
            <MovingBorderBtn text={"Submit"} />
          </div>
        </div>
      </div>

      <BackgroundBeams />
    </div>
  );
}

export default page;
