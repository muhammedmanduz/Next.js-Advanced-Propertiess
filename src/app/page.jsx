import Image from "next/image";
import manzara from "./assets/manzara.jpg";

const Home = () => {
  const url =
    "https://images.pexels.com/photos/29480808/pexels-photo-29480808/free-photo-of-huzurlu-bir-sehir-golunde-kurek-sorfu.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div className="flex flex-col text-2xl font-semibold p-10 gap-10 ">
      <h1 className="">Anasayfa</h1>

      <div>
        <h1>Local Resim</h1>
        <Image
          src={manzara}
          alt="manzara"
          quality={10}
          priority
          unoptimized
          placeholder="blur"
        />
      </div>

      <div>
        <h1>Remote Resim</h1>
        <Image src={url} alt="yol" width={400} height={200} />
      </div>

      <div>
        <h1>Remote Resim (full genişlik)</h1>
        <div className="relative h-[300px]">
          <Image src={url} alt="yol" fill />
        </div>
      </div>
    </div>
  );
};

export default Home;
