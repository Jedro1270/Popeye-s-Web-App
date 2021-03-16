import { styled, Box, Typography, Card, CardActions, Button } from '@material-ui/core';

export default function MealContainer({ imagePath, imageAlt, title, description, price }) {
    return (
        <MealContainerBody>
            <ImageContainer>
                <img src={imagePath} alt={imageAlt} height='100%' />
                <ItemTitle>
                    {title}
                </ItemTitle>
                <PriceText>
                    {`Php ${price}.00`}
                </PriceText>
            </ImageContainer>

            <DescriptionText>
                {description}
            </DescriptionText>

            <CardActions>
                <AddToOrders variant='contained'>
                    Order
            </AddToOrders>
            </CardActions>
        </MealContainerBody>
    );
}

const MealContainerBody = styled(Card)({
    backgroundColor: 'rgb(230, 230, 230)',
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
    flex: '1',
    margin: '0px 0px 30px 0px'
});

const PriceText = styled(Typography)({
    fontWeight: 'bold',
    color: 'black'
});

const ItemTitle = styled(Typography)({
    color: 'red',
    fontSize: '20px',
    textAlign: 'center',
    fontWeight: 'bold'
});

const DescriptionText = styled(Typography)({
    color: 'black',
    flex: '3',
    '@media (max-width: 1024px)': {
        margin: '30px 0px 5px 0px'
    },
});

const AddToOrders = styled(Button)({
    backgroundColor: 'rgb(255, 26, 26)',
    color: 'white',
    '&:hover': {
        backgroundColor: 'rgb(255, 128, 128)'
    },
    '@media (max-width: 1024px)': {
        margin: 'auto'
    },
});