import { getRecipes } from "../utills";



//API isteğini atacağımız bileşen async olmalı
const Home = async () => {

  //api isteği at
  const data = await getRecipes();

  console.log(data);

  return (
    <div>
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

export default Home;
