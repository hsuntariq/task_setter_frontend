import React from 'react'
import { Container, Table } from 'react-bootstrap'

const ShowUsers = () => {
  return (
    <>
    <Container>
    <Table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    1
                </td>
                <td>
                    ali
                </td>
                <td>
                    ali1@gmail.com
                </td>
                <td>
                admin
                </td>
            </tr>
            <tr>
                <td>
                    1
                </td>
                <td>
                    ali
                </td>
                <td>
                    ali1@gmail.com
                </td>
                <td>
                admin
                </td>
            </tr><tr>
                <td>
                    1
                </td>
                <td>
                    ali
                </td>
                <td>
                    ali1@gmail.com
                </td>
                <td>
                admin
                </td>
            </tr>
        </tbody>
    </Table>
    </Container>
    </>
  )
}

export default ShowUsers