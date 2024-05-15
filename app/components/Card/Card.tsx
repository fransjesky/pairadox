import { Box, Typography } from '@mui/material';

interface CardProps {
  content: string | number;
  color?: string;
  bgColor?: string;
  onClick?: () => void;
}

export const Card = (props: CardProps) => {
  const { content, color = '#121212', bgColor = '#ffffff', onClick } = props;

  return (
    <Box
      onClick={onClick}
      sx={{
        height: '18.5rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: color,
        backgroundColor: bgColor,
        borderRadius: '0.55rem',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-0.25rem)',
        },
      }}
    >
      <Typography variant='h2' fontWeight={700}>
        {content}
      </Typography>
    </Box>
  );
};
