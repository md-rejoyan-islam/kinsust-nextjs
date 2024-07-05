import PhotoPreview from "@/components/PhotoPreview";
import Image from "next/image";

export default function Blood() {
  return (
    <article className=" theme-dark    md:text-[20px] text-[18px] bg-[#fff] text-black  px-5 m-auto text-justify   py-5  ">
      <section className="xl:w-[1200px] mx-auto ">
        <h1 className=" px-4 font-bold text-2xl md:text-4xl mt-2 mb-4 dark:text-white text-center ">
          Blood Donation
        </h1>
        <section className="my-5">
          <p className="">
            The Blood Sector is one of the five wings of{" "}
            <span className="kin">KIN</span>. As the first word of the slogan of{" "}
            <span className=" kin">KIN</span> says,{" "}
            <span className="font-bold">Respond. </span>
            The Blood Sector makes this slogan meaningful by working with
            jurisdictions to determine the clinical requirements for blood. We
            negotiate and manage contacts with donors, aiming to manage blood as
            soon as possible after receiving a call from the recipient. At that
            point, we contact various donors and attempt to help them comprehend
            the situation, persuading them to donate blood.
          </p>
        </section>
        <section>
          <PhotoPreview src="/images/wings/blood.jpg">
            <Image
              src="/images/wings/blood.jpg"
              width={1000}
              height={500}
              alt="KIN blood donation"
              placeholder="blur"
              blurDataURL="/images/blur/blur.webp"
              loading="lazy"
              className="mx-auto rounded-lg border-8  border-[#e2e2ec] dark:border-[#32265a6f] w-full cursor-pointer"
            />
          </PhotoPreview>
        </section>
        <section className="my-10">
          <p>
            Once someone agrees to donate blood, we then connect them with the
            recipient. We strive to promote safe, high-quality management and
            use of blood. We meet patient needs by ensuring a safe, secure,
            adequate, and affordable supply of blood. To improve the blood
            supply, we also organize programs such as{" "}
            <span className="font-semibold">Blood Donation Camp </span>
            and <span className="font-semibold">Blood Donor{"'"}s Hunt</span>,
            which help develop and facilitate strategies. Our goal is to enhance
            the sustainability and affordability of the blood supply.{" "}
            <span className=" kin">KIN</span> has been recognized as the{" "}
            <span className="font-semibold">
              Highest Blood Donating Organization
            </span>{" "}
            for <span className="font-semibold">9 times</span> in the Sylhet
            Division by <span className="font-semibold">SANDHANI </span>
            <span className="font-semibold">(SOMC Unit)</span>.
          </p>
        </section>
      </section>
    </article>
  );
}
