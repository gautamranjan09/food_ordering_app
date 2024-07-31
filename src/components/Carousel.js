const Carousel = (props) => {
    const{ itemData }= props;
    return (
    <div>
      <ul>
      {itemData.map((item) => (
        <li key={item?.dish?.info?.id}>
          {item?.dish?.info?.name} -{" "}
          {"Rs. " +
            (item?.dish?.info?.price / 100 ||
              item?.dish?.info?.defaultPrice / 100)}
        </li>
      ))}
      </ul>
    </div>
  );
};

export default Carousel;
