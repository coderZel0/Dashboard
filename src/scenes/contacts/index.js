import React from "react";
import { Box,useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockdata";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";


const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field:"id",headerName:"ID",flex:0.5},
        {field:"registrarId",headerName:"RegistrarId"},
        {field:"name",headerName:"Name",flex:1,cellClassName:"name-column--cell"},
        {field:"age",headerName:"Age",type:"number",headerAlign:"left",align:"left"},
        {field:"email",headName:"Email",flex:1},
        {field:"phone",headerName:"Phone Number",flex:1},
        {field:"address" , headerName:"Address" ,flex:1},
        {field:"city",headerName:"City",flex:1},
        {field:"zipCode",headerName:"Zip Code",flex:1}
    ];

    return (
        <Box m="20px">
            <Header title="Contacts" subtitle="List of contacts for future reference" />
            <Box m="20px 0px 0px 0px" height="73vh"
            sx={{
                "& .MuiDataGrid-root":{
                    border:"none"
                },
                "& .MuiDataGrid-cell":{
                    borderBottom:"none"
                },
                "& .name-column--cell":{
                    color:colors.greenAccent[300]
                },
                "& .MuiDataGrid-columnHeaders":{
                    backgroundColor:colors.blueAccent[700],
                    borderBottom:""
                },
                "& .MuiDataGrid-virtualScroller":{
                    backgroundColor:colors.primary[400]
                },
                "& .MuiDataGrid-footerContainer":{
                    borderTop:"none",
                    backgroundColor:colors.blueAccent[700]
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
                    color:colors.grey[100]
                }
            }}
            >
                <DataGrid rows={mockDataContacts} columns={columns} slots={{toolbar:GridToolbar}} />
            </Box>
        </Box>
    )
}


export default Contacts;