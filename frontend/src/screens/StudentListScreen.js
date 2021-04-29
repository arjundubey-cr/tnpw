import React, { useState, useEffect, useMemo } from 'react'
import { useTable, useSortBy } from 'react-table'
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
    if (!userInfo || !userInfo.isAdmin) {
      history.push(redirect)
    }

    if (dataloading || users === undefined) {
      dispatch(listUsers())
      setDataLoading(false)
    } else {
      setData(users)
    }
  }, [dispatch, dataloading, users, data, history, redirect, userInfo])

  const columns = useMemo(
    () => [
      {
        Header: 'Roll Number',
        accessor: 'rollNumber',
      },
      {
        Header: 'First Name',
        accessor: 'firstName',
        disableSortBy: true,
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
        disableSortBy: true,
      },
      {
        Header: 'Email Address',
        accessor: 'email',
        disableSortBy: true,
      },
      {
        Header: 'CGPA',
        accessor: 'cgpa',
      },
      {
        Header: 'Year of Study',
        accessor: 'year',
        disableSortBy: true,
      },
      {
        Header: 'Resume Link',
        accessor: 'resumeLink',
        disableSortBy: true,
      },
    ],

    []
  )
  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  )

  return (
    <div>
      <Alert className='heading-button text-center font-weight-bolder'>
        Student List
      </Alert>
      <div className='p-3'>
        {loading ? (
          <h2>loading</h2>
        ) : error ? (
          toastNotification(error, 'error')
        ) : (
          <Table responsive='md' bordered hover {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className='text-center bg-black'>
                      {column.render('Header')}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? '🔻'
                            : '🔺'
                          : ''}
                      </span>
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
