import React from 'react';
import { Card } from '../Card';
import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableSortDirection,
} from './';

export default {
  component: Table,
  title: 'Table',
};

export const Default = () => {
  const rows = [
    [
      'Lorem ipsum dolor sit amet consectetur',
      'Lorem ipsum dolor',
      'Lorem ipsum dolor',
      'Lorem ipsum',
    ],
    [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor',
      'Lorem ipsum dolor',
      'Lorem ipsum',
    ],
    [
      'Lorem ipsum dolor',
      'Lorem ipsum dolor',
      'Lorem ipsum dolor',
      'Lorem ipsum',
    ],
    [
      'Lorem ipsum dolor sit amet consectetur',
      'Lorem ipsum dolor',
      'Lorem ipsum dolor',
      'Lorem ipsum',
    ],
    [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor',
      'Lorem ipsum dolor',
      'Lorem ipsum',
    ],
    [
      'Lorem ipsum dolor',
      'Lorem ipsum dolor',
      'Lorem ipsum dolor',
      'Lorem ipsum',
    ],
  ];

  return (
    <>
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell
                isSortable
                sortDirection={TableSortDirection.ascending}
              >
                Column
              </TableHeaderCell>
              <TableHeaderCell isSortable>Column</TableHeaderCell>
              <TableHeaderCell>Column</TableHeaderCell>
              <TableHeaderCell>Column</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow key={`row${i}`}>
                {row.map((cell, j) => (
                  <TableCell key={`cell${i}_${j}`}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  );
};
