import React from 'react'
import '../../Components/Contact/Contact.css'



const FormFields = ({formdata, id, change}) => {

    //SHOW ERROR MESSAGE
    const showError = () =>{
        let errorMessage = null;
        if(formdata.validation && !formdata.valid){
            errorMessage = (
                <div className="error_label">{formdata.validationMessage}</div>
            );
        }
        return errorMessage;
    }


    //TEMPLATE SWITCH
    const renderTemplates = () =>{
        let formTemplate = '' 
       
        switch(formdata.element) {
            case 'input':
            formTemplate = (
               <>   
               <div className="form_block ">
                    
                    <input
                        
                        {...formdata.config}
                        value={formdata.value}
                        onBlur={
                            (event) => change({event, id, blur:true}) 
                        }
                        onChange={(event) => change({event, id})}
                    />
                    {showError()}
                    </div>
               </>
            )
                break;

                
                default:
                formTemplate = null;
        }
            return formTemplate;
        
    }
    

    
    

    return (
       <>
           <div>{renderTemplates()}</div>
      </>  
    )
}


export default FormFields