import { PHOTO_CATEGORY_OPTIONS } from "constants/globals";
import InputField from "custom-field/InputField/InputField";
import RandomPhotoField from "custom-field/RandomPhotoField/RandomPhotoField";
import SelectField from "custom-field/SelectField/SelectField";
import { Formik, Form, FastField } from "formik";
import { Button, FormGroup } from "reactstrap";
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import Loading from "components/Loading/Loading";

PhotoForm.propTypes = {
    onSubmit : PropTypes.func
}

PhotoForm.defaultProps = {
    onSubmit : null,
}
function PhotoForm(props) {
    const { initialValues , isAddMode} = props;

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('This field is required.'),
        
        categoryId: Yup.number().required('This field is required.').nullable(),
        
        photo: Yup.string().required('This field is required.'),
        // Yup.string().when('categoryId'),{
        //     is: 1,
        //     then: Yup.string().required('This field is required.'),
        //     otherwise: Yup.string().notRequired
        // }
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
            >
            {formikProps => {
                const { values, errors, touch, isSubmitting } = formikProps;
                console.log({ values, errors, touch });
                return (
                    <Form>
                        <FastField
                            name="title"
                            component={InputField}

                            label="Title"
                            placeholder="Eg: Wow nature..."
                        />

                        <FastField
                            name="categoryId"
                            component={SelectField}

                            label="Category" 
                            placeholder="What's your photo category?" 
                            options={PHOTO_CATEGORY_OPTIONS}
                        />
                        
                        <FastField
                            name="photo"
                            component={RandomPhotoField}
                            label="Photo"
                        />
                        <FormGroup>
                            <Button type="submit" color={isAddMode ? "primary" : "success"}>{isAddMode ? "Add to album" : "Update your photo"}</Button>
                        </FormGroup>
                        {isSubmitting && <Loading/>}
                    </Form>
                   
                )
            }

            }
        </Formik>
    )
}
export default PhotoForm;