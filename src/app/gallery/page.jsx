import Image from "next/image";
import { data } from "../constants";
import Link from "next/link";
import { redirect } from "next/navigation";

const Gallery = () => {
  let user={
    name:"muhammed",
    role:"admin",
  };

  //admin olmayan kullanıcıları anasayfaya yönlendirelim 
  //server component olduğundan dolayı redirect kullandık
if (user.role !=="admin" ) {
  redirect("/");
};


  return (
    <div className="container mx-auto p-5">
      <h1 className="text-center text-3xl font-bold my-10">
        Dünyanın 7 Harikası
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data.map((item) => (
          <Link href={`/gallery/${item.id}`}>
            <Image
              src={item.src}
              className="w-full object-cover aspect-square rounded-md"
              alt={item.name}
              quality={40}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
