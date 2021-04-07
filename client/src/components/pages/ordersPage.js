import { AppBar, IconButton, styled, Toolbar } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from "react-router";

function OrdersPage() {
    const history = useHistory();

    return (
        <div className="App">
            <HeaderBody position="static">
                <HeaderContents>
                    <IconButton onClick={() => {
                        history.goBack();
                    }}>
                        <BackButton />
                    </IconButton>
                </HeaderContents>
            </HeaderBody>
        </div>
    );
}

const HeaderBody = styled(AppBar)({
    backgroundColor: 'red'
});

const HeaderContents = styled(Toolbar)({
    height: '100px'
});

const BackButton = styled(ArrowBackIcon)({
    fontSize: '40px',
    color: 'white'
});

export default OrdersPage;