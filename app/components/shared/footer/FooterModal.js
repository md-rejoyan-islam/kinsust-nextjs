"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function FooterModal() {
  // modal id
  const modalId = useRef(null);

  // modal closed
  useEffect(() => {
    document?.querySelector(".modal")?.addEventListener("click", () => {
      if (document?.querySelector(".modal")?.previousElementSibling.checked) {
        document.querySelector(".modal")?.previousElementSibling.click();
      }
    });
  }, []);
  return (
    <div>
      <input
        type="checkbox"
        id="modalId"
        ref={modalId}
        className="modal-toggle"
      />
      <div className="modal ">
        <div className="modal-box relative dark:text-white bg-white dark:bg-[#000000da]">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl   font-bold">Successfully subscribe.</h3>
          <p className="py-4 text-xl dark:text-[#cdd6e2]">
            For More Details. Please{" "}
            <Link
              className="font-bold text-[#fc535a] underline"
              href={"/register"}
            >
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
