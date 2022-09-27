import { Accounts, AccountsTypes } from '../types';

type DataProps = {
  data: Accounts[];
  dataTypes: AccountsTypes[];
};

const Table = ({ data, dataTypes }: DataProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={1}>Name</th>
          <th colSpan={1}>Profit & Loss</th>
          <th colSpan={1}>Account Type</th>
        </tr>
      </thead>

      <tbody>
        {data.map((account) => {
          return (
            <tr key={account.id}>
              <td>{account.name}</td>
              <td>
                {account.currency} {account.profitLoss}
              </td>
              {dataTypes.map((item) => {
                return (
                  account.accountType === item.id && (
                    <td key={item.id}>{item.title}</td>
                  )
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
