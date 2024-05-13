import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function MultiAutoComplete({
    value,
    setValue,
    options,
    placeholder,
    heading
}) {
  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={options}
        getOptionLabel={(option) => option?.label}
        defaultValue={value}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
                '.MuiInputBase-root':{
                    borderBottom:"none !important",
                    padding:"6px 8px !important"
                },
                '.MuiInputBase-root':{
                    border:"1px solid #cccccc !important",
                },
                '.MuiInput-root::before':{
                    borderBottom:"none !important"
                },
                '.MuiInput-root::after':{
                    borderBottom:"none !important"
                },
            }}
            variant="standard"
            label={heading}
            placeholder={placeholder}
          />
        )}
      />
    </Stack>
  );
}
