import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
export default function CheckboxLabels() {
  return (
    <FormGroup sx={{ width: "80%", height: "auto" ,}}>
      <FormControlLabel  control={<Checkbox  />} label="Черный" />
      <FormControlLabel  control={<Checkbox />} label="Красный" />
      <FormControlLabel  control={<Checkbox />} label="Белый" />
      <FormControlLabel  control={<Checkbox />} label="Желтый" />
      <FormControlLabel  control={<Checkbox />} label="Оранжевый" />
      <FormControlLabel  control={<Checkbox />} label="Зеленый" />
    </FormGroup>
  );
}
