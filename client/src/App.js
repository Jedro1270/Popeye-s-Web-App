import './App.css';
import { AppBar, Toolbar, styled, Typography, Box, IconButton, Badge } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useState } from 'react';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';

import MealContainer from './components/mealContainer';

function App() {
  const [meals, setMeals] = useState([
    {
      imagePath: '/testing/sample-food-1.jpg',
      title: 'Food 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 100
    },
    {
      imagePath: '/testing/sample-food-2.jpg',
      title: 'Food 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem dui. ',
      price: 150
    },
    {
      imagePath: '/testing/sample-food-3.jpg',
      title: 'Food 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem dui. Ut bibendum, eros sit amet consequat tincidunt, eros nunc tempor eros, vitae dignissim ligula elit id lectus. ',
      price: 200
    },
    {
      imagePath: '/testing/sample-food-1.jpg',
      title: 'Food 4',
      description: 'Lorem ipsum dolor sit amet, ',
      price: 150
    },
    {
      imagePath: '/testing/sample-food-2.jpg',
      title: 'Food 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      price: 180
    },
    {
      imagePath: '/testing/sample-food-3.jpg',
      title: 'Food 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem dui. ',
      price: 118
    },
    {
      imagePath: '/testing/sample-food-1.jpg',
      title: 'Food 7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem dui. Ut bibendum, eros sit amet consequat tincidunt, ',
      price: 199
    },
    {
      imagePath: '/testing/sample-food-2.jpg',
      title: 'Food 8',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem dui. Ut bibendum, eros sit amet consequat tincidunt, eros nunc tempor eros, vitae dignissim ligula elit id lectus. Cras luctus id nulla tempus efficitur. ',
      price: 299
    },
    {
      imagePath: '/testing/sample-food-3.jpg',
      title: 'Food 9',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem dui. Ut bibendum, eros sit amet consequat tincidunt, eros nunc tempor eros, vitae dignissim ligula elit id lectus. Cras luctus id nulla tempus efficitur. ',
      price: 215
    },
    {
      imagePath: '/testing/sample-food-1.jpg',
      title: 'Food 10',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem dui. Ut bibendum, eros sit amet consequat tincidunt, ',
      price: 100
    },
  ]); // For testing, set to [] for production

  function displayMeals() {
    return meals.map((meal) => {
      return (
        <MealContainer
          imagePath={meal.imagePath}
          title={meal.title}
          description={meal.description}
          price={meal.price}
        />
      );
    });
  }

  return (
    <div className="App">
      <HeaderBody position="static">
        <HeaderContents>

          <Box />

          <Logo>
            <HeaderTitle>
              Popeye Resto
            </HeaderTitle>
            <img src="popeye-logo.png" alt="Popeye Logo" height="100%" />
          </Logo>

          <ItemsOrdered
            onClick={() => {

            }}
          >
            <Badge badgeContent={0} color='primary' showZero size>
              <MenuIcon />
            </Badge>

            <ItemsOrderedText>
              My Orders
            </ItemsOrderedText>

          </ItemsOrdered>

        </HeaderContents>

      </HeaderBody>

      {displayMeals()}
    </div>
  );
}

const HeaderBody = styled(AppBar)({
  backgroundColor: 'red'
});

const HeaderContents = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
});

const HeaderTitle = styled(Typography)({
  fontSize: '40px',
  fontWeight: 'bold',
  textAlign: 'center',
  '@media (max-width: 1024px)': {
    fontSize: '30px'
  }
});

const Logo = styled(Box)({
  height: '100px',
  margin: '10px',
  display: 'flex',
  flexDirection: 'row',
  '@media (max-width: 1024px)': {
    height: '75px'
  }
});

const MenuIcon = styled(RestaurantMenuIcon)({
  fontSize: '50px',
  color: 'white'
});

const ItemsOrdered = styled(IconButton)({
  display: 'flex',
  flexDirection: 'row'
});

const ItemsOrderedText = styled(Typography)({
  color: 'white',
  fontSize: '20px',
  fontWeight: 'bold',
  '@media (max-width: 1024px)': {
    fontSize: '0px'
  }
});

export default App;
