import './Account.css';
import { PropTypes } from 'prop-types';

const Account = (props) => {


  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{null}</h3>
        <p className="account-amount">{props.amount}</p>
        <p className="account-amount-description">{props.description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

export default Account;

Account.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.string,
  description: PropTypes.string,
};