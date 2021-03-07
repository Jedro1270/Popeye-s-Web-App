import './App.css';
import { AppBar, Toolbar, styled, Typography, Box, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

function App() {
  return (
    <div className="App">
      <HeaderBody position="static">
        <HeaderContents> 

          <IconButton>
            <MenuIcon/>
          </IconButton>

          <Logo>
            <HeaderTitle>
              Popeye Resto
            </HeaderTitle>
            <img src="popeye-logo.png" alt="Popeye Logo" height="100%"/>
          </Logo>

          <Box/>

        </HeaderContents>

      </HeaderBody>
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
