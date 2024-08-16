import { useEffect } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import {
  useLoggedInUserQuery,
  useUpdateUserPasswordMutation,
  useUpdateUserPhotoMutation,
} from "@/lib/feature/auth/authApi";

const ApiURL = process.env.SERVER_URL;

const PhotoChange = () => {
  const [updatePhoto] = useUpdateUserPhotoMutation();
  const { data: { data: user = {} } = {} } = useLoggedInUserQuery();

  const { isError, error } = {};

  // photo change
  const handlePhotoChange = (e) => {
    const photo = e.target.files[0];
    const photoSize = photo.size / 1000;
    if (photoSize > 400) {
      return Swal.fire({
        title: "Error!",
        text: "File size must not exceed 400 KB",
        icon: "warning",
        confirmButtonText: "Cool",
      });
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You want to change your profile picture!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result?.isConfirmed) {
        const formData = new FormData();
        formData.append("user_photo", photo);
        formData.append("userId", user.id);

        updatePhoto(formData);

        Swal.fire({
          title: `Your profile has been change`,
          icon: "success",
        });
      }
    });
  };

  useEffect(() => {
    isError && toast.error("e");
  }, [isError, error]);

  return (
    <>
      {/* photo change */}
      <span className=" relative cursor-auto sm:w-fit w-full">
        <div className="text-center">
          <figure className=" relative mb-2">
            <span className="relative inline-block cursor-pointer">
              <PhotoProvider>
                <PhotoView
                  src={`${ApiURL}/public/images/users/${user?.user_photo}`}
                >
                  <Image
                    src={`${ApiURL}/public/images/users/${user?.user_photo}`}
                    width={300}
                    height={300}
                    alt={user?.name || "Rejoyan Islam"}
                    placeholder="blur"
                    blurDataURL="/images/blur/blur.webp"
                    loading="lazy"
                    className="mx-auto rounded-full w-[200px] h-[200px] border-2 dark:border-slate-800"
                  />
                </PhotoView>
              </PhotoProvider>
            </span>
          </figure>

          <label className=" text-[14px]  bg-violet-600 text-white px-2 py-1 rounded-sm cursor-pointer">
            <input
              type="file"
              onChange={handlePhotoChange}
              className="hidden"
            />{" "}
            Upload photo
          </label>
        </div>
      </span>
    </>
  );
};

export default PhotoChange;
