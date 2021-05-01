import React, { memo, useState, useEffect } from 'react';
import { Box, Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

interface CustomerInfoProps {

}

const CustomerInfo: React.FC<CustomerInfoProps> = memo(({  }: CustomerInfoProps) => {
    const [form, setPetInfo] = useState({
        postal: ""
    });


    return (
            <Box>
                <Box component={'h1'} color="#005648">Your postal code is:</Box>
                <TextField
                            placeholder="Type your code here"
                            label="Postal code"
                            name="postal"
                            value={form.postal}
                            // onBlur={handleTaskOnBlur}
                            // onChange={handleEdit}
                        />
            </Box>
    )
});

export default CustomerInfo;