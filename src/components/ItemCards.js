const ItemCards = (props) => {
  const{ itemData }= props;
  return (
    <ul>
      {itemData.map((item) => (
        <li key={item?.card?.info?.id}>
          {item?.card?.info?.name} -{" "}
          {"Rs. " +
            (item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100)}
        </li>
      ))}
    </ul>
  );
};
export default ItemCards;
