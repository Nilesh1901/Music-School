import Link from "next/link";
import React from "react";

function ViewCoursesButton() {
  return (
    <Link
      href={"/courses"}
      className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
    >
      View All courses
    </Link>
  );
}

export default ViewCoursesButton;
