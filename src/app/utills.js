//api isteğini atan fonk u burada tanımlarız

export const getRecipes = async () => {
  const res = await fetch("https://dummyjson.com/recipes", {
    //cache özl tamamen devre dışı bırakır
    //cache:"no-store"

    // tarifler sayfası static bir sayfa bundan dolayı build anında oluşturuldu api istğini build anında atar ve kullanıcı her sayfaya giridğinde buil anında oluşturulan htmli görür ama sayfaya bağlı olarak belirli aralıkları sayfanın güncel kalmasını sağlamak için revalidate özelliğini kullanırızı burada verdiğimiz süre sonunda bu sayfaya girlidğinde build anında oluşturulan içerği görüntülemek yerine tekrardan sayfa oluşturulur tekrardan api isteği atılır.

    next: {
      revalidate: 3600,
    },
  });

  return res.json();
};
