'use client';

import { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Card } from './components';

interface ListItemProps {
  id: string;
  content: string | number;
  revealed: boolean;
}

interface TempProps {
  id: string;
  content: string | number;
}

export default function Home() {
  // variables init
  const [list, setList] = useState<ListItemProps[]>([]);
  const [temp, setTemp] = useState<TempProps[]>([]);

  useEffect(() => {
    // game logic
    if (temp.length == 2) {
      if (temp[0].content != temp[1].content) {
        // conceal the cards
        setTimeout(() => {
          setList((list) => {
            return list.map((item) => {
              if (item.id == temp[0].id || item.id == temp[1].id) {
                return { ...item, revealed: false };
              }

              return item;
            });
          });
        }, 500);
      }

      setTemp([]);
    }

    // end game logic
    /* under development, continue write the codes here. the game will end when all the cards is revealed, it would show a game over message and restart game button */
  }, [temp]);

  // automatically fill the list with some static item
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

  const handleReveal = (id: string, content: string | number) => {
    if (temp.length < 2) setTemp((prev) => [...prev, { id, content }]);

    // reveal the content
    setList((list) => {
      return list.map((item) => {
        if (item.id == id && !item.revealed) {
          return { ...item, revealed: true };
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
              <Card
                {...item}
                fluid
                onClick={() => handleReveal(item.id, item.content)}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
