export default function Balance({ balance, loan }) {
    return (
        <div className="balance">
            <p>Balance : {balance}$</p>
            <p>Loan : {loan}$</p>
        </div>
    );
}
