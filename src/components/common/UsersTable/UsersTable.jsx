import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import FirstPageIcon from '@material-ui/icons/FirstPage'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import LastPageIcon from '@material-ui/icons/LastPage'
import { ImgContainer, ImgTable } from './styles'
import './styles-custom.css'

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}))

const Pagination = (props) => {
  const classes = useStyles1()
  const theme = useTheme()
  const { count, page, rowsPerPage, onChangePage } = props

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0)
  }

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1)
  }

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1)
  }

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  )
}

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
}

function createData(name, calories, fat) {
  return { name, calories, fat }
}

const rows = [
  createData('Cupcake', 305, 3.7),
  createData('Donut', 452, 25.0),
  createData('Eclair', 262, 16.0),
  createData('Frozen yoghurt', 159, 6.0),
  createData('Gingerbread', 356, 16.0),
  createData('Honeycomb', 408, 3.2),
  createData('Ice cream sandwich', 237, 9.0),
  createData('Jelly Bean', 375, 0.0),
  createData('KitKat', 518, 26.0),
  createData('Lollipop', 392, 0.2),
  createData('Marshmallow', 318, 0),
  createData('Nougat', 360, 19.0),
  createData('Oreo', 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1))

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
})

export default function UsersTable({ users }) {
  const classes = useStyles2()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead style={{ backgroundColor: 'rgb(30, 174, 223)' }}>
          <TableRow>
            <TableCell className="custom-row">Foto</TableCell>
            <TableCell className="custom-row" align="left">
              Nombres
            </TableCell>
            <TableCell className="custom-row" align="left">
              Apellidos
            </TableCell>
            <TableCell className="custom-row" align="left">
              Documento
            </TableCell>
            <TableCell className="custom-row" align="left">
              Correo
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : users
          ).map((row, key) => (
            <TableRow key={row.documentIdUser || key}>
              <TableCell
                className="custom-cell"
                component="th"
                scope="row"
                style={{ width: '100px' }}
              >
                <ImgContainer>
                  <ImgTable src={row.profile_picture} alt="picture" />
                </ImgContainer>
              </TableCell>
              <TableCell className="custom-cell" align="left">
                {row.firstNameUser}
              </TableCell>
              <TableCell className="custom-cell" align="left">
                {row.lastNameUser}
              </TableCell>
              <TableCell className="custom-cell" align="left">
                {row.documentIdUser}
              </TableCell>
              <TableCell className="custom-cell" align="left">
                {row.emailUser || 'El usuario aun no ingresa su correo'}
              </TableCell>
              {/* <TableCell align="right">{row.fat}</TableCell> */}
              {/* <TableCell align="right">{row.carbs}</TableCell> */}
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow align="left">
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={5}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'Filas por pagina' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={Pagination}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}

// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import Table from '@material-ui/core/Table'
// import TableBody from '@material-ui/core/TableBody'
// import TableCell from '@material-ui/core/TableCell'
// import TableContainer from '@material-ui/core/TableContainer'
// import TableHead from '@material-ui/core/TableHead'
// import TableRow from '@material-ui/core/TableRow'
// import Paper from '@material-ui/core/Paper'
// import { ImgContainer, ImgTable } from './styles'
// import './styles-custom.css'

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// })

// let cellStyle = {
//   fontWeight: '400 !important',
//   fontSize: '19px !important',
// }

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein }
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ]

// const UsersTable = ({ users }) => {
//   const classes = useStyles()
//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell className="custom-row">Foto</TableCell>
//             <TableCell className="custom-row" align="left">
//               Nombres
//             </TableCell>
//             <TableCell className="custom-row" align="left">
//               Apellidos
//             </TableCell>
//             <TableCell className="custom-row" align="left">
//               Documento
//             </TableCell>
//             <TableCell className="custom-row" align="left">
//               Correo
//             </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {users.map((row, key) => (
// <TableRow key={row.documentIdUser || key}>
//   <TableCell component="th" scope="row" style={{ width: '100px' }}>
//     <ImgContainer>
//       <ImgTable src={row.profile_picture} alt="picture" />
//     </ImgContainer>
//   </TableCell>
//   <TableCell align="left">{row.firstNameUser}</TableCell>
//   <TableCell align="left">{row.lastNameUser}</TableCell>
//   <TableCell align="left">{row.documentIdUser}</TableCell>
//   <TableCell align="left">
//     {row.emailUser || 'El usuario aun no ingresa su correo'}
//   </TableCell>
//   {/* <TableCell align="right">{row.fat}</TableCell> */}
//   {/* <TableCell align="right">{row.carbs}</TableCell> */}
//   {/* <TableCell align="right">{row.protein}</TableCell> */}
// </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   )
// }

// export default UsersTable
