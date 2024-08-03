import { cn, pathImage } from "@/lib/utils";
import { $apiBack } from "@/shared/api/api";
import { updateUser } from "@/shared/context/user";
import useImagePreloader from "@/shared/hooks/useImagePreloader.hooks";
import Image from "next/image";
import { useRef } from "react";

const Avatar = ({ avatar, id }: { avatar: string | null; id: string }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { handleLoadingImageComplete, imgSpinner } = useImagePreloader();

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const { data } = await $apiBack.post("/files", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        await updateUser({
          userData: {
            id: id,
            avatar: data.data.id,
          },
        });
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  return (
    <div className="flex w-full items-center justify-center">
      <div onClick={handleClick} className="cursor-pointer">
        <Image
          alt="avatar"
          src={avatar ? pathImage(avatar) : "/no-avatar.png"}
          width={60}
          height={60}
          className={cn("size-[60px] rounded-full object-cover", {
            skeleton: imgSpinner,
          })}
          onLoad={handleLoadingImageComplete}
        />
      </div>

      <input type="file" hidden ref={inputRef} onChange={handleChange} />
    </div>
  );
};

export { Avatar };
