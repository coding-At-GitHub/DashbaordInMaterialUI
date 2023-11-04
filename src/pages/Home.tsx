import { Grid, Box, Typography, Stack } from '@mui/material/';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import "./../css/home.css";
import AccordionDash from '../components/AccordionDash';
import BarCharts from '../charts/BarCharts';
import CountUp from 'react-countup';

function Home() {
  return (
    <>
    <div className='bgcolor'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Stack direction="row" spacing={2}>
              <Card sx={{ minWidth: 49 + "%", height: 140 }} className='gradient1'>
                <CardContent>
                  <div>
                    <CreditCardIcon sx={{ fontSize: '2rem', color:'#ffffff' }} />
                  </div>
                  <Typography gutterBottom variant="h5" component="div" >
                    $
                    <CountUp delay={0.4} end={500}  duration={1} />
                  </Typography>
                  <Typography variant="body2" >
                    Total Earning
                  </Typography>

                </CardContent>
              </Card>
              <Card sx={{ minWidth: 49 + "%", height: 140 }} className='gradient2'>
                <CardContent>
                  <div>
                    <ShoppingBasketIcon sx={{ fontSize: '2rem', color:'#ffffff' }} />
                  </div>
                  <Typography gutterBottom variant="h5" component="div">
                    $<CountUp delay={0.4} end={900}  duration={1} />
                  </Typography>
                  <Typography variant="body2" >
                    Total Income
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={2}>
              <Card sx={{ maxWidth: 345 }} className='gradient2'>
                <div className='iconStyle'>
                  <Stack direction="row" spacing={2}>
                    <MonetizationOnIcon sx={{ fontSize: '2rem', color:'#ffffff' }} />
                    <div className=''>
                      <span className='priceTitle'>$<CountUp delay={0.4} end={100}  duration={1} />K</span>
                      <br />
                      <span className='priceText'>Total Income</span>
                    </div>
                  </Stack>
                </div>
              </Card>
              <Card sx={{ maxWidth: 345 }} className=''>
                <div className='iconStyle'>
                  <Stack direction="row" spacing={2}>
                    <PriceChangeIcon sx={{ fontSize: '2rem' ,}} />
                    <div className=''>
                      <span className='priceTitle'> $<CountUp delay={0.4} end={200}  duration={1} />K</span>
                      <br></br>
                      <span className='priceText' >Total Expense</span>
                    </div>
                  </Stack>
                </div>
              </Card>
            </Stack>
          </Grid>
        </Grid>
        <Box sx={{ height: 20 }}></Box>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Card sx={{ height: 60 + "vh" }} >
              <CardContent>
                <BarCharts />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ height: 60 + "vh" }} >
              <CardContent>
              <div className=''>
                      <span className='priceTitle'> Popular Products</span>
                      </div>
                <AccordionDash />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      </div>
    </>
  )
}

export default Home;

