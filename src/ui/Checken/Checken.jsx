import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
export default function CheckboxLabels() {
  return (
    <FormGroup>
      <FormControlLabel   control={<Checkbox  defaultChecked sx={{
        color: "black",
        '&$checked': {
          color: "black",
          border: "1px solid black",
        },
      }} />} label="Футболки" />
      <FormControlLabel  control={<Checkbox  />} label="Джинсы" />
      <FormControlLabel  control={<Checkbox />} label="Обувь" />
      <FormControlLabel  control={<Checkbox />} label="Пиджаки" />
      <FormControlLabel  control={<Checkbox />} label="Рубашки" />
      <FormControlLabel  control={<Checkbox />} label="Брюки" />
    </FormGroup>
  );
}
