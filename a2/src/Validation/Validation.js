import React from 'react';

const Validation = (props) => {
   let validationMessage = 'Text is long enough';

   if (props.UserInputlenght < 5) {
      validationMessage = 'Text is short';
   }
  return (
     <div>
      <p>{validationMessage}</p>
     </div>
  );
}

export default Validation;
 
