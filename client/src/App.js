import './App.css';
import { AppBar, Toolbar, styled, Typography, Box, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useState } from 'react';
import MealContainer from './components/mealContatiner';

function App() {
  const [meals, setMeals] = useState([
    {
      imagePath: '/testing/sample-food-1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem dui. Ut bibendum, eros sit amet consequat tincidunt, eros nunc tempor eros, vitae dignissim ligula elit id lectus. Cras luctus id nulla tempus efficitur. In bibendum diam quis dolor aliquam euismod. Donec ac commodo nisl. Donec convallis tellus vitae erat consequat, id posuere ante pellentesque. Aliquam fermentum, neque at auctor molestie, elit lorem posuere tellus, non euismod leo dolor vel felis. Aenean venenatis pharetra ante, a efficitur est mattis eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla condimentum id diam vel lacinia. Mauris a leo tincidunt, placerat quam sit amet, commodo lectus. Fusce consequat dui mauris, eu ultricies felis ultrices ornare. Phasellus posuere justo eget enim aliquam viverra. Curabitur vehicula facilisis vulputate.',
      price: 100
    },
    {
      imagePath: '/testing/sample-food-2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem dui. Ut bibendum, eros sit amet consequat tincidunt, eros nunc tempor eros, vitae dignissim ligula elit id lectus. Cras luctus id nulla tempus efficitur. In bibendum diam quis dolor aliquam euismod. Donec ac commodo nisl. Donec convallis tellus vitae erat consequat, id posuere ante pellentesque. Aliquam fermentum, neque at auctor molestie, elit lorem posuere tellus, non euismod leo dolor vel felis. Aenean venenatis pharetra ante, a efficitur est mattis eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla condimentum id diam vel lacinia. Mauris a leo tincidunt, placerat quam sit amet, commodo lectus. Fusce consequat dui mauris, eu ultricies felis ultrices ornare. Phasellus posuere justo eget enim aliquam viverra. Curabitur vehicula facilisis vulputate.',
      price: 150
    },
    {
      imagePath: '/testing/sample-food-3.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem dui. Ut bibendum, eros sit amet consequat tincidunt, eros nunc tempor eros, vitae dignissim ligula elit id lectus. Cras luctus id nulla tempus efficitur. In bibendum diam quis dolor aliquam euismod. Donec ac commodo nisl. Donec convallis tellus vitae erat consequat, id posuere ante pellentesque. Aliquam fermentum, neque at auctor molestie, elit lorem posuere tellus, non euismod leo dolor vel felis. Aenean venenatis pharetra ante, a efficitur est mattis eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla condimentum id diam vel lacinia. Mauris a leo tincidunt, placerat quam sit amet, commodo lectus. Fusce consequat dui mauris, eu ultricies felis ultrices ornare. Phasellus posuere justo eget enim aliquam viverra. Curabitur vehicula facilisis vulputate.',
      price: 200
    },
    {
      imagePath: '/testing/sample-food-1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem dui. Ut bibendum, eros sit amet consequat tincidunt, eros nunc tempor eros, vitae dignissim ligula elit id lectus. Cras luctus id nulla tempus efficitur. In bibendum diam quis dolor aliquam euismod. Donec ac commodo nisl. Donec convallis tellus vitae erat consequat, id posuere ante pellentesque. Aliquam fermentum, neque at auctor molestie, elit lorem posuere tellus, non euismod leo dolor vel felis. Aenean venenatis pharetra ante, a efficitur est mattis eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla condimentum id diam vel lacinia. Mauris a leo tincidunt, placerat quam sit amet, commodo lectus. Fusce consequat dui mauris, eu ultricies felis ultrices ornare. Phasellus posuere justo eget enim aliquam viverra. Curabitur vehicula facilisis vulputate.',
      price: 150
    },
    {
      imagePath: '/testing/sample-food-2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem dui. Ut bibendum, eros sit amet consequat tincidunt, eros nunc tempor eros, vitae dignissim ligula elit id lectus. Cras luctus id nulla tempus efficitur. In bibendum diam quis dolor aliquam euismod. Donec ac commodo nisl. Donec convallis tellus vitae erat consequat, id posuere ante pellentesque. Aliquam fermentum, neque at auctor molestie, elit lorem posuere tellus, non euismod leo dolor vel felis. Aenean venenatis pharetra ante, a efficitur est mattis eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla condimentum id diam vel lacinia. Mauris a leo tincidunt, placerat quam sit amet, commodo lectus. Fusce consequat dui mauris, eu ultricies felis ultrices ornare. Phasellus posuere justo eget enim aliquam viverra. Curabitur vehicula facilisis vulputate.',
      price: 180
    },
    {
      imagePath: '/testing/sample-food-3.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem dui. Ut bibendum, eros sit amet consequat tincidunt, eros nunc tempor eros, vitae dignissim ligula elit id lectus. Cras luctus id nulla tempus efficitur. In bibendum diam quis dolor aliquam euismod. Donec ac commodo nisl. Donec convallis tellus vitae erat consequat, id posuere ante pellentesque. Aliquam fermentum, neque at auctor molestie, elit lorem posuere tellus, non euismod leo dolor vel felis. Aenean venenatis pharetra ante, a efficitur est mattis eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla condimentum id diam vel lacinia. Mauris a leo tincidunt, placerat quam sit amet, commodo lectus. Fusce consequat dui mauris, eu ultricies felis ultrices ornare. Phasellus posuere justo eget enim aliquam viverra. Curabitur vehicula facilisis vulputate.',
      price: 118
    },
    {
      imagePath: '/testing/sample-food-1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem dui. Ut bibendum, eros sit amet consequat tincidunt, eros nunc tempor eros, vitae dignissim ligula elit id lectus. Cras luctus id nulla tempus efficitur. In bibendum diam quis dolor aliquam euismod. Donec ac commodo nisl. Donec convallis tellus vitae erat consequat, id posuere ante pellentesque. Aliquam fermentum, neque at auctor molestie, elit lorem posuere tellus, non euismod leo dolor vel felis. Aenean venenatis pharetra ante, a efficitur est mattis eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla condimentum id diam vel lacinia. Mauris a leo tincidunt, placerat quam sit amet, commodo lectus. Fusce consequat dui mauris, eu ultricies felis ultrices ornare. Phasellus posuere justo eget enim aliquam viverra. Curabitur vehicula facilisis vulputate.',
      price: 199
    },
    {
      imagePath: '/testing/sample-food-2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem dui. Ut bibendum, eros sit amet consequat tincidunt, eros nunc tempor eros, vitae dignissim ligula elit id lectus. Cras luctus id nulla tempus efficitur. In bibendum diam quis dolor aliquam euismod. Donec ac commodo nisl. Donec convallis tellus vitae erat consequat, id posuere ante pellentesque. Aliquam fermentum, neque at auctor molestie, elit lorem posuere tellus, non euismod leo dolor vel felis. Aenean venenatis pharetra ante, a efficitur est mattis eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla condimentum id diam vel lacinia. Mauris a leo tincidunt, placerat quam sit amet, commodo lectus. Fusce consequat dui mauris, eu ultricies felis ultrices ornare. Phasellus posuere justo eget enim aliquam viverra. Curabitur vehicula facilisis vulputate.',
      price: 299
    },
    {
      imagePath: '/testing/sample-food-3.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem dui. Ut bibendum, eros sit amet consequat tincidunt, eros nunc tempor eros, vitae dignissim ligula elit id lectus. Cras luctus id nulla tempus efficitur. In bibendum diam quis dolor aliquam euismod. Donec ac commodo nisl. Donec convallis tellus vitae erat consequat, id posuere ante pellentesque. Aliquam fermentum, neque at auctor molestie, elit lorem posuere tellus, non euismod leo dolor vel felis. Aenean venenatis pharetra ante, a efficitur est mattis eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla condimentum id diam vel lacinia. Mauris a leo tincidunt, placerat quam sit amet, commodo lectus. Fusce consequat dui mauris, eu ultricies felis ultrices ornare. Phasellus posuere justo eget enim aliquam viverra. Curabitur vehicula facilisis vulputate.',
      price: 215
    },
    {
      imagePath: '/testing/sample-food-1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem dui. Ut bibendum, eros sit amet consequat tincidunt, eros nunc tempor eros, vitae dignissim ligula elit id lectus. Cras luctus id nulla tempus efficitur. In bibendum diam quis dolor aliquam euismod. Donec ac commodo nisl. Donec convallis tellus vitae erat consequat, id posuere ante pellentesque. Aliquam fermentum, neque at auctor molestie, elit lorem posuere tellus, non euismod leo dolor vel felis. Aenean venenatis pharetra ante, a efficitur est mattis eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla condimentum id diam vel lacinia. Mauris a leo tincidunt, placerat quam sit amet, commodo lectus. Fusce consequat dui mauris, eu ultricies felis ultrices ornare. Phasellus posuere justo eget enim aliquam viverra. Curabitur vehicula facilisis vulputate.',
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
  textAlign: 'center'
});

const Logo = styled(Box)({
  height: '100px',
  margin: '10px',
  display: 'flex',
  flexDirection: 'row'
});

const MenuIcon = styled(Menu)({
  fontSize: '50px',
  color: 'white'
});

export default App;
