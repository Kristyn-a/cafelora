import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/header';
import { Footer } from '../components/Footer/footer';
import { Banner } from '../components/Banner/banner';
import { Menu } from '../components/Menu/menu';
import { Gallery } from '../components/Gallery/galery';
import { Contact } from '../components/Contact/contact';

const response = await fetch('http://localhost:4000/api/drinks');
const data = await response.json();
const drink = data.result;
console.log(drink);

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={drink} />
      <Gallery />
      <Contact />
    </main>
    <Footer />,
  </div>,
);

//Zobrazování a skrývání navigačního menu uděláme tak, že budeme prvku .rollout-nav přidávat nebo odebírat třídu nav-closed. V hlavním index.jsx vyberte ikonku .nav-btn a připojte k ní posluchač události click. Tento posluchač bude přepínat třídu nav-closed na prvku .rollout-nav. Klikáním na ikonku tak můžeme zobrazovat nebo skrývat navigaci.
const prepinaniMenu = () => {
  document.querySelector('.rollout-nav').classList.toggle('nav-closed');
};
document.querySelector('.nav-btn').addEventListener('click', prepinaniMenu);

//Navigaci budeme chtít schovat i po kliknutí na odkaz na nějakou sekci. Připojte tedy další posluchač události přímo na prvek .rollout-nav. V posluchači události zařiďte, aby se navigace při kliknutí na libovolnou její položku schovala (tj. prvku .rollout-nav přidáte třídu nav-closed, obdobně, jako v předchozím kroku při přepínání).

const zmizeniMenu = () => {
  document.querySelector('.rollout-nav').classList.add('nav-closed');
};

document.querySelector('.rollout-nav').addEventListener('click', zmizeniMenu);
