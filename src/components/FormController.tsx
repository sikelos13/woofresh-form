import React, { memo, useState, useEffect } from 'react';
import { Box, Container } from '@material-ui/core';
import PetInfo from './FormComponents/PetInfo';
import CustomerInfo from './FormComponents/CustomerInfo';

interface FormControllerProps {

}

const FormController: React.FC<FormControllerProps> = memo(({  }: FormControllerProps) => {
    const [columnTitle, setTitle] = useState();


    return (
        <Box 
            component={Container} 
            style={{ backgroundColor: '#f8f7f4', display:"flex"}} 
            flex="1 1 0px" 
            flexDirection="column" 
            alignItems="flex-start"
        >
            <Box>
                <PetInfo />
            </Box>
        </Box>
    )
});

export default FormController;