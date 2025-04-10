

export const validationObject = {
    type: "",
    message: ""
}
export const validateFields = (fields, values) => {
    let isError = false;
    let error = {
        title: {...validationObject},
        description: {...validationObject},
        status: {...validationObject},
    
    }
    if (fields.includes("title")) {
        if(!values.title){
            error.title.type = "required";
            error.title.message = "Title Required";
            isError = true;
        }
    }

    if (fields.includes("description")) {
        if(!values.description){
            error.description.type = "required";
            error.description.message = "Description Required";
            isError = true;
        }
    }

    if (fields.includes("status")) {
        if(values.status === 'No Option'){
            error.status.type = "required";
            error.status.message = "Please Select a Valid Status";
            isError = true;
        }
    }
    return isError ? error : {}
}