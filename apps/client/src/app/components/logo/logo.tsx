import { Box } from '@mui/material';
import Image from 'next/image';
import logo from '../../assets/images/icon.png';
import Link from 'next/link';


export default function Logo() {
    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: theme => theme.spacing(0.9),
        }}>
            <Link href="/">
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
            </Link>
        </Box>
    );
}