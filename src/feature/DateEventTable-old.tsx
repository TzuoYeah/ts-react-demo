import {useState,useMemo,MouseEvent,ChangeEvent} from "react"
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Typography from '@mui/material/Typography'
import { visuallyHidden } from '@mui/utils';

import {randomCreatedDate} from '@mui/x-data-grid-generator';

import { createTheme,ThemeProvider, useTheme } from '@mui/material/styles';
import * as locales from '@mui/material/locale';

interface Data {
    date: string;
    title: string;
    text: string;
}

function createData(
    date: string,
  title: string,
  text: string
): Data {
  return {
    date,
    title,
    text
  };
}

const rows = [
  createData('Cupcake', "標題", "3.7",),
  createData('Donut', "標題1", "25.0",),
  createData('Eclair', "標題2", "16.0",),
  createData('Frozen yoghurt', "標題3", "6.0",),
  createData('Gingerbread', "標題4", "16.0",),
  createData('Honeycomb', "標題5", "3.2",),
  createData('Ice cream sandwich', "標題6", "9.0",),
  createData('Jelly Bean', "標題7", "0.0",),
  createData('KitKat', "標題8", "26.0",),
  createData('Lollipop', "標題9", "0.2",),
  createData('Marshmallow', "標題10", "0",),
  createData('Nougat', "標題11", "19.0",),
  createData('Oreo', "標題12", "18.0",),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

interface HeadCell {
  id: keyof Data;
  label: string;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'date',
    label: '日期',
  },
  {
    id: 'title',
    label: '標題',
  },
  {
    id: 'text',
    label: '內文',
  }
];

interface EnhancedTableProps {
  onRequestSort: (event: MouseEvent<unknown>, property: keyof Data) => void;
  order: Order;
  orderBy: string;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof Data) => (event: MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function EnhancedTable() {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof Data>('date');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const locale = 'zhTW';

  const handleRequestSort = (
    event: MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (event: MouseEvent<unknown>, name: string) => {
    //自訂點擊事件
    console.log(name)
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0
  
  const theme = useTheme();
  const themeWithLocale = useMemo(
    () => createTheme(theme, locales[locale]),
    [locale, theme],
  );

  return (
      <ThemeProvider theme={themeWithLocale}>
        <Typography m={0} variant="h6" gutterBottom >
          <b>搜尋結果</b>
        </Typography>
        <TableContainer>
            <Table
            sx={{ minWidth: 450 }}
            aria-labelledby="tableTitle"
            size='small'
            >
                <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                />
                <TableBody>
                    {rows.sort(getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                        return (
                        <TableRow
                            hover
                            onClick={(event) => handleClick(event, row.title)}
                            tabIndex={-1}
                            key={row.date}
                        >
                            <TableCell
                                component="th"
                                id={`${index}`}
                                scope="row"
                                padding="none"
                                align="left"
                                width={20}
                            >{row.date}</TableCell>
                            <TableCell align="left" width={40}>{row.title}</TableCell>
                            <TableCell align="left" width={40}>{row.text}</TableCell>
                        </TableRow>
                        );
                    })}
                    {emptyRows > 0 && (
                    <TableRow
                        style={{
                        height: 33 * emptyRows,
                        }}
                    >
                        <TableCell colSpan={6} />
                    </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </ThemeProvider>
  );
}
