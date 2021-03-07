import { styled, Paper, Box, Typography } from '@material-ui/core';
import { Description } from '@material-ui/icons';

export default function MealContainer({ imagePath, description, price }) {
  return (
    <MealContainerBody>
        <ImageContainer>
            <img src={imagePath} alt={description} height='100%'/>
            <PriceText>
                {`Php ${price}.00`}
            </PriceText>
        </ImageContainer>

        <DescriptionText>
            {description}
        </DescriptionText>
    </MealContainerBody>
  );
}

const MealContainerBody = styled(Paper)({
    elevation: '3',
    width: '50%',
    margin: '10px auto',
    display: 'flex',
    flexDirection: 'row',
    '@media (max-width: 1024px)': {
        flexDirection: 'column',
        padding: '10px'
    },
    padding: '30px'
});

const ImageContainer = styled(Box)({
    height: '100px',
    '@media (max-width: 1024px)': {
        height: '70px',
    },
    flex: '1'
});

const PriceText = styled(Typography)({
    fontWeight: 'bold',
    color: 'black'
});

const DescriptionText = styled(Typography)({
    color: 'black',
    flex: '3',
    '@media (max-width: 1024px)': {
        margin: '30px 0px 5px 0px'
    },
});