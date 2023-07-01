import  React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

/*******************   
@purpose : Used For display author card details
@Parameter : {}
@Author : hardik
***************** */
const DeatilCard = ({ author, date, title }) => {
//used for format date  
const originalDate = new Date(date);
const formattedDate = originalDate.toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric"
});

  //used for display card details
   return (
    <Card style={{margin:"70px",width:"300px" ,display:"flex"}} >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Title Of the Story :{title}
        </Typography>
    <Typography variant="h5" component="div">
          
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Created Date:{formattedDate}
        </Typography>
        <Typography variant="body2">
         Author Name : {author}
        </Typography>
      </CardContent>
    
    </Card>
  );
}

export default DeatilCard;






