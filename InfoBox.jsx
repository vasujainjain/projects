import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css"; 
export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
const COLD_URL="https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
const RAIN_URL="https://media.istockphoto.com/id/498063665/photo/rainy-landscape.jpg?s=612x612&w=is&k=20&c=sEtg3kiGcREzfi0k_FWwv81Edp9sEs18NtNPJltDLBY=";
    return (
        <div className="InfoBox">

<div className="cardContainer">
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL} 
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {
            info.humidity>80?<ThunderstormIcon/>:info.temp>15?<SunnyIcon/>:<AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2"  color="text.secondary" component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min Temp = {info.tempMin}</p>
         <p>Max Temp = {info.tempMax}</p>
         <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
</div>
</div>

    );
}
