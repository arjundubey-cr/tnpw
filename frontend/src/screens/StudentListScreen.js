import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { useTable } from 'react-table'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { ReactTable } from '../components/ReactTable'
import { listUsers } from '../redux/userDetails/userDetailsAction'

const StudentListScreen = () => {
  const dispatch = useDispatch()
  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList
  const [data, setData] = useState([])
  const [dataloading, setDataLoading] = useState(true)
  useEffect(() => {
    if (dataloading || users === undefined) {
      dispatch(listUsers())
      setDataLoading(false)
    } else {
      setData(users)
      console.log(data)
    }
  }, [dispatch, dataloading, users])

  const columns = React.useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'firstName',
      },

      {
        Header: 'Column 2',
        accessor: 'lastName',
      },
    ],

    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  return (
    <div>
      <h1>Users</h1>
      {loading ? (
        <h2>loading</h2>
      ) : (
        <table {...getTableProps()}>
          <thead>
            {
              // Loop over the header rows

              headerGroups.map((headerGroup) => (
                // Apply the header row props

                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    // Loop over the headers in each row

                    headerGroup.headers.map((column) => (
                      // Apply the header cell props

                      <th {...column.getHeaderProps()}>
                        {
                          // Render the header

                          column.render('Header')
                        }
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>

          {/* Apply the table body props */}

          <tbody {...getTableBodyProps()}>
            {
              // Loop over the table rows

              rows.map((row) => {
                // Prepare the row for display

                prepareRow(row)

                return (
                  // Apply the row props

                  <tr {...row.getRowProps()}>
                    {
                      // Loop over the rows cells

                      row.cells.map((cell) => {
                        // Apply the cell props

                        return (
                          <td {...cell.getCellProps()}>
                            {
                              // Render the cell contents

                              cell.render('Cell')
                            }
                          </td>
                        )
                      })
                    }
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      )}
    </div>
  )
}

export default StudentListScreen
