import {  createTheme } from '@mui/material/styles';
import {  responsiveFontSizes } from "@mui/material/styles";


let theme = createTheme({
    palette:{
        // background: {
        //     default: "#050517",
        //   },
        primary : {
            main: '#fff'
        },
        secondary : {
          main:"#3BD4ED"
            // main : '#08203a'
        },
        background : {
            default : '#f7f7f7'
        }

    },
    typography: {
        // fontFamily: ["Inter", "sans-serif"].join(","),
        h3: {
          color: '##3BD4ED',
          // color:'#ffcc00' 
        },
    
        h2: {
          color: "##3BD4ED",
        },
        h4: {
            color: "##3BD4ED",
          fontWeight: 'bold',
          },
        h5: {
          color: "##3BD4ED",
          fontWeight: 'bold',
        },
        h6: {
          color: '##3BD4ED'
        },
      },
})

theme = responsiveFontSizes(theme);
// export default theme;
export default theme