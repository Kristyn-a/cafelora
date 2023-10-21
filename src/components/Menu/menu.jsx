import './menu.css';
import { Drink } from '../Drink/drink';
import { Layer } from '../Layer/layer';

export const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div className="drinks-list"></div>
        <Drink
          id={0}
          name="Espresso"
          ordered={false}
          image="https://localhost:4000/assets/cups/espresso.png"
          layers={[<Layer color="#feeeca" label="mléčná pěna" />]}
        />

        {/* <div className="drink">
          <div className="drink__product">
            <div className="drink__cup">
              <img src="/cups/doppio.png" />
            </div>
            <div className="drink__info">
              <h3>Doppio</h3>
              <div className="layer">
                <div
                  className="layer__color"
                  style={{ backgroundColor: '#613916' }}
                />
                <div className="layer__label">espresso</div>
              </div>
            </div>
          </div>
          <form className="drink__controls">
            <input type="hidden" className="order-id" value="1" />
            <button className="order-btn">Objednat</button>
          </form>
        </div>

        <div className="drink">
          <div className="drink__product">
            <div className="drink__cup">
              <img src="/cups/lungo.png" />
            </div>
            <div className="drink__info">
              <h3>Lungo</h3>
              <div className="layer">
                <div
                  className="layer__color"
                  style={{ backgroundColor: '#b0dee1' }}
                />
                <div className="layer__label">voda</div>
              </div>
              <div className="layer">
                <div
                  className="layer__color"
                  style={{ backgroundColor: '#613916' }}
                />
                <div className="layer__label">espresso</div>
              </div>
            </div>
          </div>
          <form className="drink__controls">
            <input type="hidden" className="order-id" value="2" />
            <button className="order-btn">Objednat</button>
          </form>
        </div> */}
      </div>

      <div className="order-detail">
        <a href="/objednavka">Detail objednávky</a>
      </div>
    </section>
  );
};
