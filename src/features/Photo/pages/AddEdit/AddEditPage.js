import Banner from "components/Banner/Banner";
import PhotoForm from "features/Photo/components/PhotoForm";
import { Container } from "reactstrap";

AddEditPage.protoTypes = {

}
function AddEditPage() {
    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo" />
            <Container>
                <PhotoForm onSubmit={values => console.log('Form submit'.values)} />
            </Container>
        </div>
    )
}
export default AddEditPage;