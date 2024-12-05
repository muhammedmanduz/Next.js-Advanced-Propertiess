
import Label from "../components/label";
import Input from "../components/input";

const Iletisim = () => {
  console.log("iletişim render edildi");
  return (
    <div className="text-4xl text-center my-10">
      <h1>İletisim Sayfası</h1>

      <span className="bg-blue-500 px-3 rounded-md text-base font-semibold">
        server components
      </span>

      <div className="mt-10 flex flex-col gap-5">
        <Label />
        <Input />
      </div>
    </div>
  );
};

export default Iletisim;
