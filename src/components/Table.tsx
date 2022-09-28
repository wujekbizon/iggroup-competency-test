import { Accounts, AccountsTypes } from '../types';

export type DataProps = {
  data: Accounts[];
  dataTypes: AccountsTypes[];
};

const Table = ({ data, dataTypes }: DataProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th role="columnheader" colSpan={1}>
            Name
          </th>
          <th role="columnheader" colSpan={1}>
            Profit & Loss
          </th>
          <th role="columnheader" colSpan={1}>
            Account Type
          </th>
        </tr>
      </thead>

      <tbody>
        {data.map((account) => {
          return (
            <tr key={account.id}>
              <td role={'cell'}>{account.name}</td>
              <td role={'cell'}>
                {account.currency} {account.profitLoss}
              </td>
              {dataTypes.map((item) => {
                return (
                  account.accountType === item.id && (
                    <td role={'cell'} key={item.id}>
                      {item.title}
                    </td>
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
