import React from "react";
import styledComp from "styled-components"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import Button from "@mui/material/Button";

const RollDiv = styledComp.div`
    // font-color: #320866; 
    // color: #3f0a81;
    // margin: 0;
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // margin-right: -50%;
    // transform: translate(-50%, -50%);
`

const ButtonDiv = styledComp.div`
  margin-right: -50%
  transform: translate(-50%, -50%);
`

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(2),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      border: '1px solid #320866',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      color: '#9146f0',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#580eb6',
        boxShadow: '0 0 0 0.2rem rgba(50, 8, 102,.25)',
      },
    },
  }));

export default function Roll(props) {
    const [d20, setD20] = props.d20Obj
    const [d100, setD100] = props.d100Obj
    const {setShowDisplay} = props
  
    const handleChange = (event) => {
        switch (event.target.name) {
            case "d20-selector":
                setD20(event.target.value);
                break
            case "d100-selector":
                setD100(event.target.value);
                break
            default:
                break
        }
    };

    function handleButtonClick(event) {
        event.preventDefault()
        if (d20 > 0 && d100 > 0) {
            setShowDisplay(true);
        }
    }
  
    return (
      <RollDiv>
        <FormControl sx={{ m: 1, minWidth: 120}} variant="standard">
          <InputLabel id="d20-select-helper-label" focused={false} sx={{color: '#9146f0'}}>D20</InputLabel>
          <Select
            labelId="d20-select-helper-label"
            id="d20-selector"
            name="d20-selector"
            value={d20}
            onChange={handleChange}
            input={<BootstrapInput />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {Array.from({ length: 20}).map((_, index) => (
                <MenuItem value={index + 1}>{index + 1}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120}} variant="standard">
          <InputLabel id="d100-select-helper-label" focused={false} sx={{color: '#9146f0'}} >D100</InputLabel>
          <Select
            labelId="d100-select-helper-label"
            id="d100-selector"
            value={d100}
            onChange={handleChange}
            input={<BootstrapInput />}
            name="d100-selector"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {Array.from({ length: 100}).map((_, index) => (
                <MenuItem value={index + 1}>{index + 1}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <ButtonDiv>
          <Button variant="text" sx={{color: "#a160f2"}} onClick={handleButtonClick}>Roll</Button>
        </ButtonDiv>
      </RollDiv>
    );
  }

