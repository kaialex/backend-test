import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RootPage } from "./pages/Root.js";
import { RestaurantDetailPage } from "./pages/RestaurantDetail.js";
import { RestaurantListPage } from "./pages/RestaurantList.js";

const Header = () => {
  return (
    <section className="hero is-warning">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            早稲田
            <br className="is-hidden-tablet" />
            ラーメンレビュー
          </h1>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <p className="has-text-centered">test</p>
      </div>
    </footer>
  );
};

export const App = () => {
  return (
    <Router>
      <Header />
      <section className="section has-background-warning-light">
        <div className="container">
          <div className="block has-text-right">
            <button className="button is-warning is-inverted is-outlined">
              ログイン
            </button>
          </div>
          <Routes>
            <Route exact path="/" element={<RootPage />} />
            <Route exact path="/restaurant" element={<RestaurantListPage />} />
            <Route
              exact
              path="/restaurants/:restaurantId"
              element={<RestaurantDetailPage />}
            />
          </Routes>
        </div>
      </section>
      <Footer />
    </Router>
  );
};
