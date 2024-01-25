import { Box, Fab, Stack } from '@mui/material';
import type { FC } from 'react';
import React from 'react';
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton } from '@mui/material';
import NextLink from 'next/link';

export const Floating: FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 1000,
      }}
    >
      <Stack direction="column" spacing={2}>
        <NextLink href="tel:7845217303">
          <Fab size="small" color="success" aria-label="add">
            <IconButton>
              <CallIcon sx={{ color: 'rgba(255, 255, 255, 0.8)' }} />
            </IconButton>
          </Fab>
        </NextLink>
        <NextLink href="mailto:eggfoodcourt@gmail.com">
          <Fab size="small" color="warning" aria-label="add">
            <IconButton>
              <MailOutlineIcon sx={{ color: 'rgba(255, 255, 255, 0.9)' }} />
            </IconButton>
          </Fab>
        </NextLink>
        <NextLink href="https://www.instagram.com/eggfoodcourt/" passHref>
        <Fab size="small" sx={{ backgroundColor: '#f50057', color: '#fff' }} aria-label="Instagram">
  <IconButton>
    <InstagramIcon  sx={{ color: '#fff' }} />
  </IconButton>
</Fab>
</NextLink>
<Fab size="small" sx={{ backgroundColor: '#1877f2', color: '#fff' }} aria-label="Facebook">
  <IconButton
    component="a"
    href="https://www.facebook.com/profile.php?id=61555580112719"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FacebookIcon sx={{ color: '#fff' }}/>
  </IconButton>
</Fab>

      </Stack>
    </Box>
  );
};
