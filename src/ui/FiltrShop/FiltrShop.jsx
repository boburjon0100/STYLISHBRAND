import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checken from '../Checken/Checken'
import ColorsCheck from '../ColorsCheck/ColorsCheck'
import Color from '../Color/Color';
import Volume from '../Volume/Volume';


export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion   expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header">
          <Typography sx={{ width: '100%', flexShrink: 0  ,fontSize:"20px"}}>
          Категории
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Checken/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 , fontSize:"20px"}}>Размеры</Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 , fontSize:"20px"}}>
          Бренд
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 , fontSize:"20px"}}>Цвета</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{display:"flex", alignItems:"center" , justifyContent:"center",}}>
          <ColorsCheck/>
          <Color/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 , fontSize:"20px"}}>Цены</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{display:"flex" , alignItems:"center" , justifyContent:"center", gap:"10px"}}>
            <div className="narx">
              <p style={{color:"black" , fontWeight:"400" ,fontSize:"14px"}}>От</p><p><span style={{color:"black" , fontWeight:"600" ,fontSize:"20px"}}>$120</span></p></div>
            <Volume/>
            <div className="narx">
              <p style={{color:"black" , fontWeight:"400" ,fontSize:"14px"}}>До</p>
              <p><span style={{color:"black" , fontWeight:"600" ,fontSize:"16px"}}>$500</span></p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
