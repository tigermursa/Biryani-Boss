const Menu = () => {
  const data = [
    {
      id: "001",
      name: "Special polished rice",
      price: 190,
      quantity: "4 persons",
      imageUrl:
        "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg",
    },
    {
      id: "002",
      name: "Organic brown rice",
      price: 250,
      quantity: "3 persons",
      imageUrl:
        "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg",
    },
    {
      id: "002",
      name: "Organic brown rice",
      price: 250,
      quantity: "3 persons",
      imageUrl:
        "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg",
    },
    {
      id: "002",
      name: "Organic brown rice",
      price: 250,
      quantity: "3 persons",
      imageUrl:
        "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg",
    },
    // Other items
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
      <h1 className="text-5xl item-card-font mb-20 text-center mt-10">
        Our <span className="text-primary">Special</span> Menu
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center mt-5 mb-3">
              <h2 className="text-xl  item-card-font mb-2">{item.name}</h2>
              <div className=" flex  justify-center gap-2 font-semibold mt-8">
                <p className="mb-2 bg-primary text-white p-2 rounded-lg text-sm">
                  Price: ${item.price}
                </p>
                <p className="mb-2 bg-primary text-white p-2 rounded-lg text-sm">
                  Serving: {item.quantity}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
