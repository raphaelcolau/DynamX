import { Box } from '@mui/material';
import Image from 'next/image';
import logo from '../../assets/images/icon.png';
import logoHorizontal from '../../assets/images/head-logo.png';
import { useTheme } from '@mui/material/styles';

interface LogoProps {
    variant?: 'vertical' | 'horizontal';
    size?: number;
}

export default function Logo(props: LogoProps) {
    const theme = useTheme();

    return (
        props.variant === 'vertical' ?
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
    :
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: theme => theme.spacing(0.9),
            width: props.size ? theme.spacing(props.size) : '100%',
        }}>
            <Image 
                src={logoHorizontal}
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