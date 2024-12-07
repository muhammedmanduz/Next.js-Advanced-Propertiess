import { data } from "@/app/constants";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

const Page = async ({ params }) => {
  //url deki parametreye eriş
  const { id } = await params;

  //url deki parametreye karşılık  gelen dizi elemanın al
  const item = data.find((i) => i.id === id);

  //elemanı bulunmazsa  404 sayfasına yönlendir
  if(!item) notFound();

  return (
    <div className="container mx-auto my-20 text-3xl">
      <div className="w-3/4 lg:w-1/2 mx-auto">
        <Link href="." className="text-lg border p-2 px-4 rounded-md ">
          Geri
        </Link>

        <h1 className="text-center text-5xl font-bold my-4 mt-10">
          {item.name}
        </h1>

        <Image
          src={item.src}
          alt={item.name}
          className="w-full object-cover aspect-square rounded-md"
        />

        <div className="my-5">
          <h3 className="text-lg">Fotoğrafçı</h3>
          <p>{item.photographer}</p>
        </div>

        <div className="my-5">
          <h3 className="text-lg">Lokasyon</h3>
          <p>{item.location}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
