import React, { memo, useState, useEffect } from 'react';
import { Box, Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';

interface PetInfoProps {

}

const PetInfo: React.FC<PetInfoProps> = memo(({  }: PetInfoProps) => {
    const [breedList, setBreedsList] = useState([]);

    useEffect(() => {
        fetch('https://api.thedogapi.com/v1/breeds', {
            method: 'GET', // or 'PUT'
            headers: {
              'X-Api-Key': '6d07143b-7b90-49ee-8833-d61ddb0e6b38',
            },
          })
          .then(response => response.json())
          .then(data => {
            setBreedsList(data)
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }, []);

    const [form, setPetInfo] = useState({
        postal: ""
    });


    return (
            <Box p={2}>
                <Box>
                    <Box component={'h2'} color="primary.dark">Your postal code is:</Box>
                    <TextField
                            placeholder="2000"
                            label="Postal code"
                            name="postal"
                            value={form.postal}
                                // onBlur={handleTaskOnBlur}
                                // onChange={handleEdit}
                        />
                </Box>
                <Box mt="40px">
                    <Box component={'h2'} color="primary.dark">What's your pupper's name:</Box>
                    <TextField
                            placeholder="Patzaris"
                            label="Name"
                            name="name"
                            value={form.postal}
                                // onBlur={handleTaskOnBlur}
                                // onChange={handleEdit}
                        />
                </Box>
                <Box mt="40px">
                <Box component={'h2'} color="primary.dark">Your pupper is:</Box>
                        <NativeSelect
                            // value={sortByPriority}
                            // onChange={handleSortChange}
                            style={{ marginTop: "20px" }}
                        >
                            <option value="pure">Pure Breed</option>
                            <option value="mixed">Mixed Breed</option>
                            <option value="unknown">Unknown</option>
                        </NativeSelect>
                </Box>
                <Box mt="40px">
                <Box component={'h2'} color="primary.dark">Select primary breed:</Box>
                {breedList && breedList.length > 0 &&
                        <NativeSelect
                            // value={sortByPriority}
                            // onChange={handleSortChange}
                            style={{ marginTop: "20px" }}
                        >
                               { breedList.map((breed: any) => {
                                    return (
                                        <option value={breed.name}>{breed.name}</option>
                                    )
                                })}
                            
                        </NativeSelect>
                    }
                </Box>
            </Box>
    )
});

export default PetInfo;