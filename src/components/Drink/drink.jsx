import { Layer } from '../Layer/layer';

export const Drink = ({ id, name, ordered, image, layers }) => {
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={image} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          {layers.map((elementLayer) => {
            return (
              <Layer color={elementLayer.color} label={elementLayer.label} />
            );
          })}

          <form className="drink__controls">
            <button className="order-btn">Objednat.</button>
            <input type="hidden" value={id} />
          </form>
        </div>
      </div>
    </div>
  );
};
