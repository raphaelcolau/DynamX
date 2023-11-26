import { Box } from '@mui/material';
import Image from 'next/image';
import logo from '../../assets/images/icon.png';


export default function Logo() {
    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: theme => theme.spacing(0.9),
        }}>
            <Image 
                src={logo}
                alt="DynamX Logo"
                style={{
                    width: '100%',
                    height: '100%',
                }}
                priority={true}
                placeholder='blur'
            />
        </Box>
    );
}