const Cart = () => {
  const CartItem = [
    {
      id: 1,
      discount: 50,
      cover: "./flash/flash-1.png",
      name: "Shoes",
      price: 100,
      qty: 1,
    },
    {
      id: 2,
      discount: 40,
      cover: "./flash/flash-2.png",
      name: "Watch",
      price: 20,
      qty: 2,
    },
  ];

  // Stpe: 7   calucate total of items
  const totalPrice = CartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  // prodcut qty total
  return (
    <>
      <section className="cart-items bg-background h-auto py-[50px]">
        <div className="container d_flex flex justify-between max-w-[90%] m-auto flex-col lg:flex-row gap-3">
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className="cart-details   w-full lg:w-[70%]">
            {CartItem.length === 0 && (
              <h1 className="no-items product">No Items are add in Cart</h1>
            )}

            {/* yasma hami le cart item lai display garaaxa */}
            {CartItem.map((item) => {
              const productQty = item.price * item.qty;

              return (
                <div
                  className="cart-list product d_flex bg-white p-5 relative rounded-[8px] shadow-[rgb(3_0_71/9%)_0px_1px_3px] m-[10] flex justify-between"
                  key={item.id}
                >
                  <div className="img w-[150px] h-[150px]">
                    <img
                      src={item.cover}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="cart-details w-[70%]">
                    <h3 className="text-xl font-medium mt-5">{item.name}</h3>
                    <h4 className="text-sm font-normal mt-[50px] text-gray-500">
                      ₹{item.price}.00 * {item.qty}
                      <span className="text-secondary ml-5 font-medium">
                        ₹{productQty}.00
                      </span>
                    </h4>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart bg-none text-2xl text-right mr-[10px]">
                      <button className="removeCart removeCart bg-none text-2xl text-right mr-[10px]">
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                    {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
                    <div className="cartControl d_flex mt-[50px] flex justify-between">
                      <button
                        className="incCart w-10 h-10 m-[10px] rounded-md text-xl bg-none border border-[rgb(3_0_71/9%)] text-secondary"
                        // onClick={() => addToCart(item)}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                      <button
                        className="desCart w-10 h-10 m-[10px] rounded-md text-xl bg-background"
                        // onClick={() => decreaseQty(item)}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-price"></div>
                </div>
              );
            })}
          </div>

          <div className="cart-total product bg-[#fff] p-5 relative rounded-lg shadow-[rgb(3_0_71/9%)_0px_1px_3px] w-full lg:w-[30%] h-fit">
            <h2 className="text-lg mb-5 border-b border-[rgb(3_0_71/9%)] pb-[10px] text-secondary font-semibold">
              Cart Summary
            </h2>
            <div className=" d_flex flex justify-between">
              <h4 className="text-base font-normal">Total Price :</h4>
              <h3 className="text-xl font-medium text-secondary">
                ₹{totalPrice}.00
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
