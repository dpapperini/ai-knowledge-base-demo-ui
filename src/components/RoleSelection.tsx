import React from 'react';
import { Grid, SvgIcon, Typography } from '@mui/material';
import { commonColors } from '../styles/styles';
import { IPersona, personas } from '../types/Personas';
import { ReactComponent as RoleIcon } from '../images/Role.svg';
import { StyledButton } from '../styles/StyledButton';

export const RoleSelection: React.FC<{
  onSelectPersona: (persona: IPersona) => void;
}> = ({ onSelectPersona }) => (
  <Grid
    container
    item
    display="flex"
    flexDirection="column"
    justifyContent="between"
    sx={{
      p: 2,
      backgroundColor: `${commonColors.purple50}`
    }}>
    <Grid>
      <Typography>
        Hello! Welcome to the AI Knowledge Base. Here you can learn all about This Is Hello.
      </Typography>
      <Grid container direction="row" marginTop="1.5rem">
        <Typography>Before we start, what is</Typography>
        <Typography fontWeight="700">&nbsp;your role</Typography>
        <Typography>?</Typography>
      </Grid>
    </Grid>
    <Grid display="flex" flexDirection="column" alignItems="flex-start" marginTop="0.5rem">
      {Object.values(personas).map((persona: IPersona) => (
        <StyledButton key={persona.value} onClick={() => onSelectPersona(persona)}>
          <SvgIcon
            viewBox="0 0 26 20"
            sx={{
              mr: '0.5rem'
            }}>
            <RoleIcon />
          </SvgIcon>
          <Typography>{persona.label}</Typography>
        </StyledButton>
      ))}
    </Grid>
  </Grid>
);
