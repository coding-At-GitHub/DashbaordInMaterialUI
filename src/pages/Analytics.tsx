import React from 'react'
import Typography from '@mui/material/Typography';
import { Box, Grid, Stack, Card } from "@mui/material";
import "./../css/home.css";
import GeoChart from '../charts/geochart';
import PieChart from '../charts/piechart';
import HBarChart from '../charts/hbarcart';

function Analytics() {
  return (
    <div className='bgcolor'>

      <Stack spacing={2}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Card sx={{ height: 40 + "vh" }} >

              <Box sx={{ minHeight: 19 + "vh", }}>
                <Stack direction="row" spacing={1}>
                  <Card sx={{ minHeight: 49 + "%", }} className=''>
                    <Typography variant="body2" >
                      Total Income 1
                    </Typography>
                  </Card>
                  <Card sx={{  minHeight: 49 + "%",}} className=''>
                    <Typography variant="body2" >
                      Total Income 2
                    </Typography>
                  </Card>
                </Stack>
              </Box>
              <Box sx={{ minWidth: 49 + "%", }}>
                <Stack direction="row" spacing={1}>
                <Card sx={{ minHeight: 49 + "%", }} className=''>
                    <Typography variant="body2" >
                      Total Income 3
                    </Typography>
                  </Card>
                  <Card sx={{ minHeight: 49 + "%", }} className=''>
                    <Typography variant="body2" >
                      Total Income 4
                    </Typography>
                  </Card>
                </Stack>
              </Box>


            </Card>
          </Grid>

          <Grid item xs={7}>
            <Card sx={{ height: 40 + "vh" }} >
              <HBarChart />
            </Card>
          </Grid>

        </Grid>


        <Grid container spacing={2}>

          <Grid item xs={8}>
            <Card sx={{ height: 60 + "vh" }} >
              <GeoChart />
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card sx={{ height: 60 + "vh" }} >
              <PieChart />
            </Card>
          </Grid>

        </Grid>


      </Stack>
    </div>
  )
}

export default Analytics;
