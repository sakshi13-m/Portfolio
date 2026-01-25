import React from 'react';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

export const ResumeDownload = () => {
  const handleDownload = () => {
    // For now, this will open a placeholder. You can replace with actual resume URL
    const resumeUrl = '/resume.pdf'; // Add your resume PDF to public folder
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Sakshi_Mahajan_Resume.pdf';
    link.click();
  };

  return (
    <Button
      variant="outlined"
      color="secondary"
      startIcon={<DownloadIcon />}
      onClick={handleDownload}
      aria-label="Download Sakshi Mahajan's resume as PDF"
      sx={{ margin: 2 }}
    >
      Download Resume
    </Button>
  );
};