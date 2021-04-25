import React, { useState, useEffect } from 'react'
import { useTable } from 'react-table'
import { Alert, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listUsers } from '../redux/userDetails/userDetailsAction'
import { toastNotification } from '../components/ToastNotif'

const StudentListScreen = ({ location, history }) => {
  const dispatch = useDispatch()
  const [data, setData] = useState([])
  const [dataloading, setDataLoading] = useState(true)

  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (!userInfo) {
      history.push(redirect)
    }

    if (dataloading || users === undefined) {
      dispatch(listUsers())
      setDataLoading(false)
    } else {
      setData(users)
    }
  }, [dispatch, dataloading, users, data, history, redirect, userInfo])

  const columns = React.useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Email Address',
        accessor: 'email',
      },
    ],

    []
  )

  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })

  return (
    <div>
      <Alert className='heading-button text-center font-weight-bolder'>
        My Profile
      </Alert>
      <div className='container'>
        {loading ? (
          <h2>loading</h2>
        ) : error ? (
          toastNotification(error, 'error')
        ) : (
          <Table striped bordered hover size='sm' {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {rows.map((row, i) => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  )
}

export default StudentListScreen
