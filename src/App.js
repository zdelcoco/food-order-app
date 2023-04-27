import React from 'react';

import Header from './components/UI/Header';
import Image from './components/UI/Image';
import Card from './components/UI/Card';

function App() {
  return (
    <React.Fragment>
      <Header title="ReactMeals" /> 
      <Image source="meals.jpg" alt="meals" />
      <Card>
        <h2>Delicious Food, Delivered To You</h2>
        <p>Choose your favorite meal from our borad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
        <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
      </Card>
    </React.Fragment>
  );
}

export default App;
