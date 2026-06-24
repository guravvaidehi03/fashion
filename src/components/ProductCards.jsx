import { supabase } from "../supabase";

const products = [
  {
    name: "Denim Jacket",
    description: "Premium blue denim jacket for everyday fashion.",
    price: "₹1999",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
  },
  {
    name: "Casual Shirt",
    description: "Comfortable cotton shirt with modern styling.",
    price: "₹999",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    name: "Sneakers",
    description: "Stylish sneakers suitable for daily wear.",
    price: "₹2499",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  }
];

const addToSupabase = async (item) => {
  const { error } = await supabase
    .from("product description")
    .insert([
      {
        title: item.name,
        description: item.description,
        price: Number(item.price.replace("₹", ""))
      }
    ]);

  if (error) {
    alert("Error");
    console.log(error);
  } else {
    alert("Product Added");
  }
};

function ProductCards() {
  return (
    <section className="products">
      <h2>Featured Products</h2>

      <div className="product-container">
        {products.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>

            <button onClick={() => addToSupabase(item)}>
              Add
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductCards;

