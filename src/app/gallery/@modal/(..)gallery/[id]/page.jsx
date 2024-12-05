"use client";
import { data } from "@/app/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LuExpand } from "react-icons/lu";

const DetailPreview = ({ params }) => {
  const { id } = params;

  const item = data.find((i) => i.id === id);

  //next.js de fonks içi yönlendirme amacıyla kullanırız
  const router = useRouter();

  const close = () => {
    //1 sayfa geriye yönlendirir
    router.back();
    //1 sayfa ileriye yönlendirir.
    //router.forward();
    //belirli bir sayfaya yönlendirir
    //router.push("/ürünler");
    //sayfayı yeniler
    // router.refresh();
  };

  const refresh = () => {
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 bg-black/60  backdrop-blur grid place-items-center pb-5">
      <div className=" pb-10 px-10 bg-white rounded-md text-black text-5xl flex flex-col gap-5 pt-">
        <div className="text-lg flex justify-between my-5 gap-5 mb-0">
          <button
            onClick={close}
            className="size-8 border border-black rounded-md transition hover:bg-black/40 rounded-md"
          >
            X
          </button>

          <button
            onClick={refresh}
            className="size-8 border border-black rounded-md transition hover:bg-black/40 place-items-center "
          >
            <LuExpand />
          </button>
        </div>
        <Image
          src={item.src}
          alt={item.name}
          className="w-full max-h-[400px] object-cover aspect-aquare rounded-md"
        />

        <div className="">
          <h2 className="">{item.name}</h2>
        </div>

        <div className="flex flex-col text-xl">
          <span>Fotoğrafçı</span>
          <span className="font-semibold">{item.photographer}</span>
        </div>

        <div className="flex flex-col text-xl ">
          <span>Lokasyon</span>
          <span className="font-semibold">{item.location}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailPreview;
