import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Table from './components/Table';
import { Accounts, AccountsTypes } from './types';

export const data: Accounts[] = [
  {
    _id: 'id',
    id: 1,
    name: 'test',
    default: false,
    funds: 100,
    isDemo: false,
    accountType: 'type',
    currency: '$',
    profitLoss: 0.23,
  },
];

export const dataTypes: AccountsTypes[] = [
  {
    _id: 'id',
    id: 'id',
    title: 'title',
  },
];
test('renders a name', () => {
  render(<Table data={data} dataTypes={dataTypes} />);
  const IntrinsicElements = screen.getAllByRole('columnheader');
  expect(IntrinsicElements[0]).toHaveTextContent('Name');
  expect(IntrinsicElements[1]).toHaveTextContent('Profit & Loss');
  expect(IntrinsicElements[2]).toHaveTextContent('Account Type');
  const HTMLTableRowElement = screen.getAllByRole('cell');
  expect(HTMLTableRowElement[0]).toHaveTextContent(data[0].name);
  expect(HTMLTableRowElement[1]).toHaveTextContent(data[0].currency);
});
