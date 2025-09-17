export const TransactionHistoryBody = ({transaction: {id, type, amount, currency}}) => {
 return (
    <tbody className="transaction__body">
        <tr className="transaction__line" id={id}>
            <td className="transaction__type">{type}</td>
            <td className="transaction__amount">{amount}</td>
            <td className="transaction__currency">{currency}</td>
        </tr>
    </tbody>
 )
}