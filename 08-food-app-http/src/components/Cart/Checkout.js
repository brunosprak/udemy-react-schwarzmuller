import classes from './Checkout.module.css';

const Checkout = (props) => {
  return (
    <form>
      <div className={classes.control}>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name'></input>
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street'></input>
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal code</label>
        <input type='text' id='postal'></input>
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city'></input>
      </div>
      <button type='button'>Confirm</button>
    </form>
  );
};

export default Checkout;
