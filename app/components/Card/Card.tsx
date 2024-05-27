import { Box, Typography } from '@mui/material';

interface CardProps {
  content: string | number;
  revealed: boolean;
  fluid?: boolean;
  color?: string;
  bgColor?: string;
  onClick?: () => void;
}

export const Card = (props: CardProps) => {
  const {
    content,
    revealed,
    fluid,
    color = '#121212',
    bgColor = '#ffffff',
    onClick,
  } = props;

  return (
    <Box
      onClick={onClick}
      sx={{
        height: '18.5rem',
        width: fluid ? '100%' : '15rem',
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
      <Typography
        variant='h1'
        fontWeight={700}
        sx={{ opacity: revealed ? 1 : 0, transition: 'all 0.3s ease' }}
      >
        {content}
      </Typography>
    </Box>
  );
};
