import React, { memo, useState } from 'react';
import { Box, Container } from '@material-ui/core';
import informationLogo from '../images/woofresh_logo1.png';
import informationPicture2 from '../images/woofresh_pitcure_2.png';

interface InformationViewProps {

}

const InformationView: React.FC<InformationViewProps> = memo(({  }: InformationViewProps) => {
    const [columnTitle, setTitle] = useState();


    return (
        <Box 
            component={Container} 
            style={{ backgroundColor: '#dbe6dc', display:"flex"}} 
            flex="1 1 0px" 
            flexDirection="column" 
            alignItems="center"
        >
            <Box>
                <img  alt="woofresh-logo" src={informationLogo} width="300px" height="180px" />
            </Box>
            <Box textAlign='center'>
                <Box component={'h1'} color="primary.dark">Let's build pupper's box</Box>
                <Box component={'p'} fontWeight="bold" fontSize="20px" color="primary.dark">Because every dog is unique</Box>
                <img  alt="woofresh-inf-2" src={informationPicture2} width="320px" height="320px" />
            </Box>
        </Box>
    )
});

export default InformationView;