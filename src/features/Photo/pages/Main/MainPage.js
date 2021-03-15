import Banner from "components/Banner/Banner";
import Images from "constants/images";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
MainPage.protoTypes = {
    
}
function MainPage(props) {
    return (
        <div className="photo-main">
            <Banner title="Your awesome photos <3" backgroundUrl={Images.PINK_BG}></Banner>
            <Container className="text-center">
                <Link to="/photos/add">Add new photos</Link>
            </Container>
        </div>

    )
}
export default MainPage;