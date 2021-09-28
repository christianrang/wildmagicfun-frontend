import React, { useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from '@mui/material/Typography';
import styled from "styled-components"
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

/**
 * Handles APi calls to the video info api. It then stores the data
 * using the setFunc passed. Intended for use with React Hooks
 * @param {string} url The url used to make the API call
 * @param {function} setFunc setter function for the React Hook
 */
function apiCall(url, setFunc) {

    axios.get("http://localhost:8080"+ url).then(
        result => 
        setFunc({
            isLoaded: true,
            data: result.data
        }),
        error => 
        console.log(error)
            // setFunc({
            //     isLoaded: true,
            //     error: error
            // })
    );
}

const AffectDiv = styled.div`
    font-color: #320866; 
    color: #3f0a81;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`

function getAffect(d20, d100, setFunc) {
    apiCall("/roll/" + d20 + "/" + d100, setFunc)
}

export default function Display(props) {

    const [affect, setAffect] = useState({
        "isLoaded": false,
        "data": null,
        "error": null
    });
    const {d20, d100, setShowDisplay} = props

    !affect.isLoaded && getAffect(d20, d100, setAffect)

    if (!affect.isLoaded) {
        return <AffectDiv></AffectDiv>

    } else {

    return (
        <AffectDiv>
            <Card sx={{ 
                width: '225px',
                height: '175px',
                backgroundColor: '#320866',
                fontColor: '#a160f2',
            }}
            raised={true}
            >
                <CardContent>
                    <Typography sx={{ fontSize: 14, color: '#a160f2'}} gutterBottom>
                        Wild Magic Affect
                    </Typography>
                    <Typography variant="body2" sx={{color: '#e0cafb'}}>
                        {affect.isLoaded && affect.data.affect}
                    </Typography>
                </CardContent>
            </Card>
            <Button variant="text" sx={{color: "#a160f2"}} onClick={() => setShowDisplay(false)}><ArrowBackIcon /></Button>
        </AffectDiv>
    )
    }
}