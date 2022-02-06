import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRestaurants } from "../api.js";
import { Loading, Restaurant } from "../components";

export const RootPage = () => {
  const [restaurants, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurants({ limit: 3 }).then((data) => {
      setRestaurant(data);
    });
  }, []);

  console.log(restaurants);

  return (
    <>
      <h2 className="title is-a">人気のラーメン店</h2>
      <div className="block">
        {restaurants === null ? (
          <Loading />
        ) : (
          restaurants.rows.map((restaurants) => {
            return <Restaurant key={restaurants.id} restaurant={restaurants} />;
          })
        )}
      </div>
      <div className="has-text-right">
        <Link class="button is-warning" to="/restaurant">
          全てのラーメン店を見る
        </Link>
      </div>
    </>
  );
};
