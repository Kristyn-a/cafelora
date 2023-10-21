export const Drink = ({ id, name, ordered, image, layers }) => {
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={image} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          <div className="layer">
            <div
              className="layer__color"
              style={{ backgroundColor: '#613916' }}
            ></div>
            <div className="layer__label">espresso</div>
          </div>
          <form className="drink__controls">
            <button className="order-btn">Objednat</button>
            <input type="hidden" value={id} />
          </form>
        </div>
      </div>
    </div>
  );
};
