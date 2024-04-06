// import React from "react";

function Products() {
  const data = [
    {
      id: 1,
      title: "Breed Dry Dog Food",
      img: "https://i.postimg.cc/vmJHp8Kq/img-1.png",
      price: "100$",
    },
    {
      id: 2,
      title: "CANON EOS DSLR Camera",
      img: "https://i.postimg.cc/ZKwYJxgy/img-2.png",
      price: "360$",
    },
    {
      id: 3,
      title: "ASUS FHD Gaming Laptop",
      img: "https://i.postimg.cc/JhkRcVhb/img-3.png",
      price: "700$",
    },
    {
      id: 4,
      title: "Curology Product Set ",
      img: "https://i.postimg.cc/XqXHd3jW/img-4.png",
      price: "500$",
    },
    {
      id: 5,
      title: "Kids Electric Car",
      img: "https://i.postimg.cc/kMhh9Vsg/img-5.png",
      price: "960$",
    },
    {
      id: 6,
      title: "Jr. Zoom Soccer Cleats",
      img: "https://i.postimg.cc/15kCnLLx/img-6.png",
      price: "1150$",
    },
    {
      id: 7,
      title: "GP11 Shooter USB Gamepad",
      img: "https://i.postimg.cc/YCQX1dHv/img-7.png",
      price: "660$",
    },
    {
      id: 8,
      title: "Quilted Satin Jacket",
      img: "https://i.postimg.cc/fbZ85YzB/img-8.png",
      price: "660$",
    },
  ];
  let products = data?.map((el) => (
    <div className="products__card" key={el.id}>
      <div className="img">
        <img src={el.img} alt="img" />
      </div>
      <h4>{el.title}</h4>
      <p>{el.price}</p>
    </div>
  ));
  return (
    <section className="products-section">
      <div className="container">
        <div className="products__cards">{products}</div>
      </div>
    </section>
  );
}

export default Products;
