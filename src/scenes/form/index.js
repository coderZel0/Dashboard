import React from "react";
import { Formik,Form } from "formik";
import { Box, useMediaQuery ,Grid} from "@mui/material";
import Header from "../../components/Header";
import TextField from './textfield';
import * as yup from 'yup';

const phoneRegx = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

const CreationForm = ()=>{
    const INIT_FORM_STATE = {
        firstName:"",
        lastName:"",
        email:"",
        contact:"",
        address1:"",
        address:""
    }
    const VALIDATION_SCHEMA = yup.object().shape({
        firstName: yup.string().required("Required field"),
        lastName: yup.string().required("Required field"),
        email: yup.string().email("invalid Email").required("Email is required"),
        contact: yup.string().matches(phoneRegx,"Phone number is not valid").required(),
        address: yup.string().required(),
        address: yup.string()
    })

    const isNonMobile = useMediaQuery("minWidth(600px)");

    const handleSubmit = (values)=>{
        console.log(values);
    }

    return (
        <Box m="20px">
            <Header title={"Create User"} subtitle={"Create a new user"}/>
            <Box
            p={3}
            display='flex'
            justifyContent='center'
            >
                <Formik
                initialValues={INIT_FORM_STATE}
                validationSchema={VALIDATION_SCHEMA}
                onSubmit={()=>handleSubmit()}
                >
                    <Form>
                        <Grid container spacing={2} maxWidth='sm'>
                            <Grid item xs={12}>
                                <TextField name="firstName" label="First Name" />
                            </Grid>
                        </Grid>
                    </Form>
                </Formik>
            </Box>
        </Box>
    )
}

export default CreationForm;