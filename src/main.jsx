/* eslint-disable react/jsx-key */
import { createRoot } from 'react-dom/client';
import { restaurants } from './constants/mock';
import { Restaurant } from './components/restaurant/component';
import { Header } from "./components/header/component";
import { Footer } from "./components/footer/component";

const root = createRoot(document.getElementById('root'));

root.render(
  <div>
    <Header />
    {restaurants.map((restaurant) => (
      <Restaurant restaurant={restaurant} />
    ))}
    <Footer />
  </div>
);

