'use client';

import { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Card } from './components';

interface ListItemProps {
  id: string;
  content: string | number;
  revealed: boolean;
}

export default function Home() {
  const [list, setList] = useState<ListItemProps[]>([]);

  if (list.length == 0) {
    setList((current) => {
      return [
        ...current,
        { id: crypto.randomUUID(), content: 1, revealed: false },
        { id: crypto.randomUUID(), content: 3, revealed: false },
        { id: crypto.randomUUID(), content: 2, revealed: false },
        { id: crypto.randomUUID(), content: 3, revealed: false },
        { id: crypto.randomUUID(), content: 1, revealed: false },
        { id: crypto.randomUUID(), content: 2, revealed: false },
      ];
    });
  }

  const handleReveal = (id: string) => {
    setList((list) => {
      return list.map((item) => {
        if (item.id == id) {
          return { ...item, revealed: !item.revealed };
        }

        return item;
      });
    });
  };

  return (
    <Box
      sx={{
        padding: '2rem',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#121212',
      }}
    >
      {list.length == 0 && (
        <Typography>The game stopped due to an unexpected error</Typography>
      )}
      <Grid container spacing={4}>
        {list.map((item) => {
          return (
            <Grid item xs key={item.id}>
              <Card {...item} fluid onClick={() => handleReveal(item.id)} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
