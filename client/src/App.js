import './App.css';
import { AppBar, Toolbar, styled, Typography, Box, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useState } from 'react';
import MealContainer from './components/mealContatiner';

function App() {
  const [meals, setMeals] = useState([
    {
      imagePath: '/testing/sample-food-1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 100
    },
    {
      imagePath: '/testing/sample-food-2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem dui. ',
      price: 150
    },
    {
      imagePath: '/testing/sample-food-3.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem dui. Ut bibendum, eros sit amet consequat tincidunt, eros nunc tempor eros, vitae dignissim ligula elit id lectus. ',
      price: 200
    },
    {
      imagePath: '/testing/sample-food-1.jpg',
      description: 'Lorem ipsum dolor sit amet, ',
      price: 150
    },
    {
      imagePath: '/testing/sample-food-2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      price: 180
    },
    {
      imagePath: '/testing/sample-food-3.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem dui. ',
      price: 118
    },
    {
      imagePath: '/testing/sample-food-1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem dui. Ut bibendum, eros sit amet consequat tincidunt, ',
      price: 199
    },
    {
      imagePath: '/testing/sample-food-2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem dui. Ut bibendum, eros sit amet consequat tincidunt, eros nunc tempor eros, vitae dignissim ligula elit id lectus. Cras luctus id nulla tempus efficitur. ',
      price: 299
    },
    {
      imagePath: '/testing/sample-food-3.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem dui. Ut bibendum, eros sit amet consequat tincidunt, eros nunc tempor eros, vitae dignissim ligula elit id lectus. Cras luctus id nulla tempus efficitur. ',
      price: 215
    },
    {
      imagePath: '/testing/sample-food-1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem dui. Ut bibendum, eros sit amet consequat tincidunt, ',
      price: 100
    },
  ]); // For testing, set to [] for production

  function displayMeals() {
    return meals.map((meal) => {
      return (
        <MealContainer
          imagePath={meal.imagePath}
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

          <IconButton>
            <MenuIcon />
          </IconButton>

          <Logo>
            <HeaderTitle>
              Popeye Resto
            </HeaderTitle>
            <img src="popeye-logo.png" alt="Popeye Logo" height="100%" />
          </Logo>

          <Box />

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
  },
});

const MenuIcon = styled(Menu)({
  fontSize: '50px',
  color: 'white'
});

export default App;
