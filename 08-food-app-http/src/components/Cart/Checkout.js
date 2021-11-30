import classes from './Checkout.module.css';
import { useRef, useState } from 'react';

const Checkout = (props) => {

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true, 
    postal: true
  });

  const isEmpty = value => value.trim() === '';
  const isFiveChars = value => value.trim().length === 5;

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid =  !isEmpty(enteredStreet);
    const enteredPostalIsValid =   isFiveChars(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid, 
      postal: enteredPostalIsValid
    });

    const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalIsValid && enteredCityIsValid;

    
    if(!formIsValid){
      return;
    }
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${!formInputsValidity.name ? classes.invalid : ''} ${classes.control}`}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' />
        {!formInputsValidity.name && <p>Invalid</p>}
      </div>
      <div className={`${!formInputsValidity.street ? classes.invalid : ''} ${classes.control}`}>
        <label htmlFor='street'>Street</label>
        <input ref={streetInputRef} type='text' id='street' />
        {!formInputsValidity.street && <p>Invalid</p>}
      </div>
      <div  className={`${!formInputsValidity.postal ? classes.invalid : ''} ${classes.control}`}>
        <label htmlFor='postal'>Postal Code</label>
        <input ref={postalInputRef} type='text' id='postal' />
        {!formInputsValidity.postal && <p>Invalid</p>}
      </div>
      <div  className={`${!formInputsValidity.city ? classes.invalid : ''} ${classes.control}`}>
        <label htmlFor='city'>City</label>
        <input ref={cityInputRef} type='text' id='city' />
        {!formInputsValidity.city && <p>Invalid</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' >
          Cancel
        </button>
        <button className={classes.submit} onClick={props.onConfirm()}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;