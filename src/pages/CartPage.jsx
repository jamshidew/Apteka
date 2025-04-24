function CartPage({ cartDatas, setCartPage }) {
  console.log(cartDatas);

  return (
    <div className="grid grid-cols-4 container">
      {cartDatas.map((cartData) => {
        return (
          <div key={cartData.id}>
            <img src={cartData.img} alt="" />
            <h1>{cartData.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default CartPage;
