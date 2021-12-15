import React, { useState, useEffect } from "react";
import Title from "./Title";
import CircularProgress from "@mui/material/CircularProgress";
import {DataGrid} from '@mui/x-data-grid'

const rows = [
  {
    id: 314,
    uuid: "6ac1a9d5-7477-428b-9da0-3ffd636bdf2a",
    firstName: "Leontyne",
    lastName: "Iacovacci",
    email: "Leontyne@technorati.com",
    role: "MANAGER",
    isFirsttime: true,
    isActive: true,
    isBlocked: false,
    createdAt: "2021-12-11T09:11:30.775Z",
    updatedAt: "2021-12-11T09:11:30.775Z",
  },
  {
    id: 313,
    uuid: "93106f63-6be1-496d-92dd-47ce44abeac2",
    firstName: "Melita",
    lastName: "Lillecrop",
    email: "MelitaLillecrop@yopmail.com",
    role: "MANAGER",
    isFirsttime: true,
    isActive: true,
    isBlocked: false,
    createdAt: "2021-12-11T09:11:11.391Z",
    updatedAt: "2021-12-11T09:11:11.391Z",
  },
  {
    id: 312,
    uuid: "a5844fa9-c20a-4f6f-bec6-601e27a5b454",
    firstName: "Alisa",
    lastName: "Feehily",
    email: "AlisaFeehily@yopmail.com",
    role: "MANAGER",
    isFirsttime: true,
    isActive: true,
    isBlocked: false,
    createdAt: "2021-12-11T09:10:43.118Z",
    updatedAt: "2021-12-11T09:10:43.118Z",
  },
  {
    id: 311,
    uuid: "8e6e9e4f-9741-46f7-a1fc-8e5827c45b26",
    firstName: "Anabella",
    lastName: "Briscoe",
    email: "abriscoe3p@usa.gov",
    role: "VIEWER",
    isFirsttime: true,
    isActive: true,
    isBlocked: false,
    createdAt: "2021-12-11T08:41:49.525Z",
    updatedAt: "2021-12-11T08:41:49.525Z",
  },
  {
    id: 310,
    uuid: "764f413a-b4d6-4bf6-8181-ad75cce49267",
    firstName: "Elvin",
    lastName: "Spriggen",
    email: "espriggen3o@yahoo.co.jp",
    role: "VIEWER",
    isFirsttime: true,
    isActive: true,
    isBlocked: false,
    createdAt: "2021-12-11T08:41:49.422Z",
    updatedAt: "2021-12-11T08:41:49.422Z",
  },
  {
    id: 309,
    uuid: "c0b834f8-520e-4c99-9927-decfff7e1386",
    firstName: "Leesa",
    lastName: "Lucio",
    email: "llucio3n@parallels.com",
    role: "VIEWER",
    isFirsttime: true,
    isActive: true,
    isBlocked: false,
    createdAt: "2021-12-11T08:41:49.319Z",
    updatedAt: "2021-12-11T08:41:49.319Z",
  },
  {
    id: 308,
    uuid: "fde8a543-ca47-4e36-b326-9b83d33a1bf4",
    firstName: "Rickard",
    lastName: "Correa",
    email: "rcorrea3m@blogger.com",
    role: "VIEWER",
    isFirsttime: true,
    isActive: true,
    isBlocked: false,
    createdAt: "2021-12-11T08:41:49.214Z",
    updatedAt: "2021-12-11T08:41:49.214Z",
  },
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const [userData, setUserData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    // setLoader(true);
    // setTimeout(() => {
    //   setUserData(rows);
    //   setLoader(false);
    // }, 3000);
    setLoader(true);
        const payload = {
          method: "GET",
          headers: { "Content-Type": "application/json", "x-access-token":localStorage.getItem("userToken") },

    };
    setTimeout(() => { 
        fetch(
          "https://peaceful-stream-42545.herokuapp.com/api/v1/customer/getUserList?order=ASC&orderBy=firstName&limit=100",
          payload
        )
          .then((response) => response.json())
          .then((data) => {
            setUserData(data.result.rows);
          })
          .catch((e) => {
            console.log(e);
          });
        setLoader(false);
    }, 2000);

  },[]);


  const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name'},
    { field: 'lastName', headerName: 'Last name'},
    { field: 'email', headerName: 'Email'},
    { field: 'role', headerName: 'Role' },

    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${
          params.getValue(params.id, 'lastName') || ''
        }`,
    },
    {field:'id',headerName: 'Edit' },
    { 
      field: 'id', 
      headerName: 'Edit',
      // valueGetter:(params)=>`${params.getValue(params.id,'id')||''}`
    },
  ];

  return (

<>
<Title>User List</Title>
{loader ? <CircularProgress /> : <div style={{ height: 400, width: '100%' }}>
<DataGrid
        rows={userData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </div>
}

</>


    // <React.Fragment>
    //   <Title>User List</Title>
    //   <Table size="small">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>First Name</TableCell>
    //         <TableCell>Last Name</TableCell>
    //         <TableCell>Email</TableCell>
    //         <TableCell>Role</TableCell>
    //         <TableCell align="right">DOJ</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {loader ? <CircularProgress /> : null}
    //       {userData.map((row) => (
    //         <TableRow key={row.id}>
    //           <TableCell>{row.firstName}</TableCell>
    //           <TableCell>{row.lastName}</TableCell>
    //           <TableCell>{row.email}</TableCell>
    //           <TableCell>{row.role}</TableCell>
    //           <TableCell align="right">{`${row.createdAt.substring(
    //             0,
    //             10
    //           )}`}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    //   <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
    //     See more orders
    //   </Link>
    // </React.Fragment>
  );
}
