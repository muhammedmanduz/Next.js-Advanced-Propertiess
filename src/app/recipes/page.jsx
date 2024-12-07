import { getRecipes } from "../utills";

// tarifler sayfası static bir sayfa olduğunda dolayı build anında olulturulur api isteğini build anında atar ve kullanıcı her sayfaya girdiğinde build anında oluşturulan htmli görür ama sayfaya bağlı olarak belirli aralıklara sayfanın güncel kalmasını sağlamak için revalidate özelliğini kullanırız burada verdiğimiz süre sonunda bu sayfaya girildiğinde build anında oluşturulan içeriği görüntülemek yerine tekrardan sayfa oluşturulur tekrardan api isteği atılır

export const revalidate = 3600;


//API isteğini atacağımız bileşen async olmalı
const Recipes = async () => {

  //api isteği at
  const data = await getRecipes();

  console.log(data);

  return (
    <div className="px-10 py-10 text-xl">
      <h1>Anasafya</h1>

      {data.recipes.map((item) => (
        <div className="border p-2 rounded-md my-5">
          <h1 className="font-bold">{item.name}</h1>
          <h1>{item.cuisine}</h1>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
