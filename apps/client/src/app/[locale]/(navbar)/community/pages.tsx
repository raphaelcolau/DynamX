import {Box, Typography} from "@mui/material";

export default function Page() {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Typography variant="h1">404</Typography>
            <Typography variant="body1">Page not found</Typography>
        </Box>
    )
}