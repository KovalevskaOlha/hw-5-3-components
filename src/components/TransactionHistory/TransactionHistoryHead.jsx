export const TransactionHistoryHead = () => {
    return (
          <thead className="transaction_head">
                <tr>
                    <th className="transaction__caption">Type</th>
                    <th className="transaction__caption">Amount</th>
                    <th className="transaction__caption">Currency</th>
                </tr>
            </thead>
    );
};