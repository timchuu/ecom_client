export const validate = (element, formdata = []) =>{

    let error = [true, ""];

    //CHECK VALIDATION
    if(element.validation.email){
        const valid =  /\S+@\S+\.\S+/.test(element.value);
        const message = `${!valid ? "Email is not valid" : ""}`;
        error = !valid ? [valid, message] : error;
    }
    if(element.validation.confirm) {
        const valid = element.value.trim() === formdata[element.validation.confirm].value;
        const message = `${!valid ? "Passwords must match" : ""}`;
        error = !valid ? [valid, message] : error;
    }
    if(element.validation.required) {
        const valid = element.value.trim() !== "";
        const message = `${!valid ? "This field is required" : ""}`;
        error = !valid ? [valid, message] : error;

    }
    return error

}//END VALIDATE

//UPDATE FORM WITH NEW DATA

export const update = (element, formdata, formname) =>{

    //CREATE CLONE OF STATE
    const newformdata = {
        ...formdata
    }
    const newElement = {
        ...newformdata[element.id]
    }

    newElement.value = element.event.target.value;

    if(element.blur){
        let validData = validate(newElement, formdata);
        newElement.valid = validData[0];
        newElement.valdationMessage = validData[1];
    }
    newElement.touched = element.blur;
    newformdata[element.id] = newElement;
    return newformdata;

}//END UPDATE

//GENERATE DATA
export const generateData = (formdata, formname) =>{

    //VAR THAT WILL HOLD OUR SUBMIT DATA
    let dataToSubmit = {};

    for(let key in formdata){
        if(key !== "confirmPassword"){
            dataToSubmit[key] = formdata[key].value
        }
    }
    return dataToSubmit;

}//END GENERATE DATA

//FORM VALID
export const isFormValid = (formdata, fromname) =>{

    let formIsValid = true;

    for(let key in formdata) {
        formIsValid = formdata[key].valid && formIsValid;
    }
    return formIsValid;
    
}//END FORM IS VALID