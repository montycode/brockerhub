import React from 'react';
import { Formik, Form } from 'formik';
import { authenticationService, userService } from '@/_services'

class ImageForm extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue
        };
    }
    
    handleSubmit = (values) => {
        let data = new FormData();
        data.append("photo1", values.photo1);
        let userId = this.state.currentUser.user.id;
        userService.updatePhoto(userId, data)
            .catch((error) => console.log(error));
  };

  render() {
    return(
    <div className="w-11/12 mx-auto">
      <Formik 
        initialValues={{ photo1: ''}}
        onSubmit={this.handleSubmit}>
        {(formProps) => (
          <Form>              
            <div className="w-11/12 mx-auto">
                <div className="xl:w-9/12 mx-auto xl:mx-0">
                    <div className="flex flex-col xl:w-2/6 lg:w-2/6 w-full space-y-2" >
                        <input className="w-full py-4 sm:px-12 px-4 flex justify-end rounded-bl rounded-br" 
                            type="file" name="file" id="file" 
                            accept=".jpeg, .png, .jpg" 
                            onChange={(event) =>{
                                formProps.setFieldValue("photo1", event.target.files[0]);
                            }} 
                        />
                        <button className="bg-orange transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm focus:outline-none" type="submit">
                        Actualizar Imagen
                        </button>
                    </div>
                </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
    );
  }
}

export { ImageForm };