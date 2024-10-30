import { Box, Button, Container, Grid, InputBase, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import charkha from './assests/charkha.jpeg'
import imgdata from './assests/redbg.png';
import sign from './assests/signimage.png';
import './print-styles.css';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import vasu from './assests/vasu-removebg-preview_prev_ui.png'

function App() {
  const [val1, setVal1] = useState(() => Math.floor(1000 + Math.random() * 9000));
  const [val2, setVal2] = useState(() => Math.floor(Math.random() * 90 + 10));
  const [screen, setScreen] = useState(true)
  const [data, setData] = useState({
    image: imgdata,
    name: "",
    district: "",
    mobile: "",
    date: ""
  })

  // console.log(val2)

  const handleFileChange = (e) => {
    setData({ ...data, image: URL.createObjectURL(e.target.files[0]) })
  }

  const handleSetValue = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }

  const handleSavePdf = () => {

    const firstBox = document.querySelector('.first');
    if (firstBox) {
      firstBox.style.display = 'none';
    }

    window.print();
    setScreen(true);
    window.location.reload()
  };

  useEffect(() => {
    // Save the random numbers in localStorage
    localStorage.setItem('val1', val1);
    localStorage.setItem('val2', val2);
  }, [val1, val2]);


  console.log(data)

  return (

    <Container disableGutters maxWidth={'xl'}>

      <Grid container sx={{ justifyContent: "center", alignItems: "center", height: "100vh", p: "5px" }}>
        <Grid item xs={12} sm={11} md={10} lg={8} sx={{}}>
          <Paper elevation={3}>
            <Grid container sx={{ zIndex: 9999 }}>
              <Grid item xs={5} sx={{backgroundRepeat: "no-repeat", backgroundSize: "100% 100%",borderRight:"1px solid #eeeeee",height:"fit-content" }}>
                <Box className="first" sx={{ display: screen ? "flex" : "none", justifyContent: "space-around",mb:{lg:"15px",md:"15px",sm:"8px",xs:"3px"}, alignItems: "center", height: { lg: "65px", md: "60px", sm: "50px", xs: "40px" } }}>
                  <Button
                    className="print-only-button hide-on-print"
                    sx={{
                      display: screen ? { xs: 'flex', sm: 'flex', md: 'flex', lg: 'flex' } : 'none',
                      color: 'white',
                      bgcolor: 'black',
                      '&:hover': { bgcolor: 'black' },
                      border: '1.5px solid gray',
                      borderRadius: '20px',
                      whiteSpace: 'nowrap',
                      fontSize: { xs: '7px', sm: '8px', md: '11px', lg: '12px' },
                      position: "relative",
                      '@media print': {
                        display: 'none',
                      }
                    }}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      style={{ border: "1px solid white", position: "absolute", height: "100%", width: "100%", opacity: 0 }}
                      onChange={handleFileChange}
                    />
                    Upload Image
                  </Button>

                  <Button
                    className="print-only-button hide-on-print"
                    onClick={() => { handleSavePdf(); }}
                    sx={{
                      display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'flex' },
                      color: "white",
                      bgcolor: "black",
                      "&:hover": { bgcolor: "black" },
                      border: "1.5px solid gray",
                      borderRadius: "20px",
                      whiteSpace: "nowrap",
                      fontSize: { xs: "7px", sm: "8px", md: "11px", lg: "12px" },
                      position: "relative",
                      '@media print': {
                        display: 'none'
                      }
                    }}
                  >
                    Print pdf
                  </Button>
                </Box>

                <Box  sx={{height:{lg:"50%",md:"50%",sm:"40%",xs:"30%"}}}>
                   <Box sx={{height:"100%"}}>
                     <img src={charkha} height={"100%"} width={"100%"}/>
                   </Box>
                </Box>
                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                   
                   <Box sx={{height:{lg:"130px",md:"130px",sm:"100px",xs:"100px"},width:{lg:"300px",md:"300px",sm:"200px",xs:"150px"}}}>
                    <img src={vasu} style={{height:"100%",width:"100%"}}/>
                   </Box>
                </Box>
              </Grid>

              <Grid item xs={7} sx={{ height: "fit-content", zIndex: 999999999, p: "10px" }}>
                <Grid item xs={12} sx={{ height: "fit-content", display: "flex", justifyContent: "center", mb: "6px" }}>
                  <Box sx={{  width: { lg: "120px", md: "120px", sm: "80px", xs: "60px" }, height: { lg: "120px", md: "120px", sm: "80px", xs: "60px" }, mt: { lg: "15px", md: "25px", sm: "8px", xs: "" } }}>
                    <img alt='img' src={data.image} height={"100%"} width={"100%"} />
                  </Box>

                </Grid>
                <Grid container >
                  <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography sx={{ textTransform: "uppercase", fontSize: { lg: "20px", md: "17px", sm: "12px", xs: "11px" }, fontWeight: { lg: 600, md: 600, sm: 800, xs: 800 }, color: "black", letterSpacing: "0.5px" }}>
                      Registration no {val1}/{val2}
                    </Typography>
                  </Grid>

                  <Grid container sx={{ alignItems: "center", justifyContent: "center",mt:{lg:"10px",md:"10px",sm:"5px",xs:""}}}>
                    <Grid item xs={12}  >
                      <Typography sx={{ fontSize: { lg: '19px', md: '17px', sm: '12px', xs: '11px' }, mr: "15px", }}>
                        Name:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} >
                      <InputBase placeholder='Type here...' name='name' value={data.name} fullWidth sx={{ borderRadius: "5px", pl: "4px", border: screen == true ? "1px solid #e0e0e0" : "", fontSize: { lg: '13px', md: '13px', sm: '13px', xs: '12px' }, border: "1px solid #e0e0e0", height: { lg: "40px", md: "40px", sm: "30px", xs: "25px" }, pt: "4px" }} onChange={handleSetValue} />
                    </Grid>

                    <Grid item xs={12} sx={{mt:{lg:"10px",md:"10px",sm:"7px",xs:"3px"}}}>
                      <Typography sx={{ whiteSpace: 'nowrap',fontSize: { lg: '19px', md: '17px', sm: '12px', xs: '11px' }, mr: "15px", }}>
                        Mobile:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} >
                      <InputBase placeholder='Type here...' style={{ border: screen ? "1px solid #e0e0e0" : "", pl: "4px" }} type='number' name='mobile' value={data.mobile} onChange={handleSetValue} sx={{ borderRadius: "5px", pl: "4px", border: screen ? "1px solid #e0e0e0" : "", fontSize: { lg: '13px', md: '13px', sm: '13px', xs: '12px' }, border: "1px solid #e0e0e0", height: { lg: "40px", md: "40px", sm: "30px", xs: "25px" }, pt: "4px" }} fullWidth />
                    </Grid>


                    <Grid item xs={12} sx={{mt:{lg:"10px",md:"10px",sm:"7px",xs:"3px"}}}>
                      <Typography sx={{ whiteSpace: 'nowrap', fontSize: { lg: '19px', md: '17px', sm: '12px', xs: '11px' }, mr: "15px", }}>
                        District-State/Country:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} >
                      <InputBase placeholder="Type here..." name='district' value={data.district} fullWidth sx={{ borderRadius: "5px", pl: "4px", border: screen ? "1px solid #e0e0e0" : "", fontSize: { lg: '13px', md: '13px', sm: '13px', xs: '12px' }, border: "1px solid #e0e0e0", height: { lg: "40px", md: "40px", sm: "30px", xs: "25px" }, pt: "4px" }} onChange={handleSetValue} />
                    </Grid>
                  </Grid>


                  <Grid container sx={{mt:{lg:"20px",md:"15px",sm:"7px",xs:"7px"}}}>

                    <Grid item xs={12} sm={12} md={8} lg={8} sx={{  zIndex: 999999}}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography sx={{ fontSize: { lg: "22px", md: "19px", sm: "16px", xs: "13px" }, color: "black", fontWeight: "700" }}>
                            दिनांक -
                          </Typography>
                          <Box sx={{ ml: "3px" }}>
                            <input
                              placeholder='dd/mm/yy'
                              name='date'
                              type='date'
                              value={data.date}
                              onChange={handleSetValue}/>
                          </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} sx={{ display: "flex", justifyContent:{ lg:"center",md:"center",sm:"left",xs:"left"}, zIndex: 999999,mt:{lg:"0px",md:"0px",sm:"10px",xs:"10px"} }}>
                      <Box>
                          <Typography  sx={{ fontSize: { lg: "22px", md: "19px", sm: "16px", xs: "13px" }, color: "black", whiteSpace: "nowrap", fontWeight: "700" }}>
                            वैध है
                          </Typography>
                        </Box>
                    </Grid>
                      
                    
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>

        </Grid>
      </Grid>
    </Container>

  );
}

export default App;
