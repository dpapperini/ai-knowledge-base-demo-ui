import React from 'react';
import { SvgIcon } from '@mui/material';
import { commonColors } from '../styles/styles';

export const ErrorIcon: React.FC = () => (
  <SvgIcon sx={{ color: commonColors.error }}>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.08301 12.7497H10.9163V14.583H9.08301V12.7497ZM9.08301 5.41634H10.9163V10.9163H9.08301V5.41634ZM9.99051 0.833008C4.93051 0.833008 0.833008 4.93967 0.833008 9.99967C0.833008 15.0597 4.93051 19.1663 9.99051 19.1663C15.0597 19.1663 19.1663 15.0597 19.1663 9.99967C19.1663 4.93967 15.0597 0.833008 9.99051 0.833008ZM9.99967 17.333C5.94801 17.333 2.66634 14.0513 2.66634 9.99967C2.66634 5.94801 5.94801 2.66634 9.99967 2.66634C14.0513 2.66634 17.333 5.94801 17.333 9.99967C17.333 14.0513 14.0513 17.333 9.99967 17.333Z"
        fill="#E45F5D"
      />
    </svg>
  </SvgIcon>
);
