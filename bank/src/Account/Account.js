import './Account.css';
import AccountComposant from "../AccountComposant/AccountComposant";

const Account = () => {

  const accounts = [
    { title: 'Argent Bank Checking', accountNumber: 'x8349', amount: '$2,082.79', description: 'Available Balance' },
    { title: 'Argent Bank Savings', accountNumber: 'x6712', amount: '$10,928.42', description: 'Available Balance' },
    { title: 'Argent Bank Credit Card', accountNumber: 'x8349', amount: '$184.30', description: 'Current Balance' }
  ];


  return (
    <section>
    <h2 className="sr-only">Accounts</h2>
    {accounts.map(account => (
      <AccountComposant
        key={account.accountNumber}
        title={account.title}
        accountNumber={account.accountNumber}
        amount={account.amount}
        description={account.description}
      />
    ))}
  </section>
  );
};

export default Account;

