import Header from '../../components/header';
import Product from '../../components/products/card';

import './styles.css';

const Petshop = () => {
  return (
    <div className="h-100">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-2">
            { /* eslint-disable-next-line jsx-a11y/alt-text */ }
            <img src="https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png" className="img-fluid petshop-image" />
            <b>Petlove</b>
            <div className="petshop-infos">
              <span className="mdi mdi-star"></span>
              <text>
                <b>4,5</b>
              </text>
              <span className="mdi mdi-cash-usd-outline"></span>
              <text>$$$</text>
              <span className="mdi mdi-crosshairs-gps"></span>
              <text>2,9km</text>
            </div>
            <label className="badge badge-primary">Frete Grátis</label>
          </div>
          <div className="col-10">
            <h5>Produtos</h5>
            <br />
            <div className="row">
              {[1,2,3,4,5,6,7,8,9,10,11,12].map((p) => (
                <Product />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Petshop;
