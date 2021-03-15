import Banner from "components/Banner/Banner";
import PhotoForm from "features/Photo/components/PhotoForm";
import { addPhoto, updatePhoto } from "features/Photo/photoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Container } from "reactstrap";

AddEditPage.protoTypes = {

};
function AddEditPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { photoId } = useParams();

    const isAddMode= !photoId;
    const editedPhoto = useSelector(state => state.photos.find(x => x.id === +photoId));
    const initialValues = isAddMode ? 
    {  
        title: "",
        categoryId: null,
        photo: ""
    } :  editedPhoto;
    const handleSubmit = (values) => {
        if(isAddMode){
            const action = addPhoto(values);
            dispatch(action);
        } else {
            const action = updatePhoto(values);
            console.log(action);
            dispatch(action);
        }
        history.push('/photos');
       
    }
    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo" />
            <Container>
                <PhotoForm 
                    isAddMode = {isAddMode}
                    initialValues={initialValues}
                    onSubmit={handleSubmit} />
            </Container>
        </div>
    )
}
export default AddEditPage;