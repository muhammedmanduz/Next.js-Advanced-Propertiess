//api isteğini atan fonk u burada tanımlarız

 export const getRecipes = async () => {
    const res = await fetch("https://dummyjson.com/recipes",{
        //cache özl tamamen devre dışı bırakır
        //cache:"no-store"

        next:{
            revalidate:3600,
        },
    });
  
    return res.json();
  }