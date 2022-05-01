import React, { FC, memo } from 'react'
import Typography from '@mui/material/Typography';

interface IHome {
    item?: number
}
const Home: FC<IHome> = ({ item }) => {
    console.warn("Home component ( Child )");
    return (
        <div>
            <Typography variant="h5" gutterBottom component="div">
                {`Home Component ( Child )`} {`Update item value: ${item}`}
            </Typography>
        </div>
    )
}

export default memo(Home)