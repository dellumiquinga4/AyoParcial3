import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

const whiteLogos = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png',
  'https://i.blogs.es/e7b69c/java_logo/450_1000.webp',
  'https://c0.klipartz.com/pngpicture/252/959/gratis-png-servidor-de-bases-de-datos-mysql-microsoft-sql-server.png',
  'https://cdn.worldvectorlogo.com/logos/react-1.svg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png',
  'https://midu.dev/images/tags/node.png',
];

const darkLogos = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png',
  'https://i.blogs.es/e7b69c/java_logo/450_1000.webp',
  'https://c0.klipartz.com/pngpicture/252/959/gratis-png-servidor-de-bases-de-datos-mysql-microsoft-sql-server.png',
  'https://cdn.worldvectorlogo.com/logos/react-1.svg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png',
  'https://midu.dev/images/tags/node.png',
];

const logoStyle = {
  width: '100px',
  height: '80px',
  margin: '0 32px',
  opacity: 0.7,
};

export default function LogoCollection() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        color="text.secondary"
      >
        Ofreciendo los mejores proyectos, utilizando lenguajes de programacion y 
        aplicando variedad de librerias de frond-end y back-end, ademas del uso de bases de datos.
      </Typography>
      <Grid container justifyContent="center" sx={{ mt: 0.5, opacity: 0.6 }}>
        {logos.map((logo, index) => (
          <Grid item key={index}>
            <img
              src={logo}
              alt={`Fake company number ${index + 1}`}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
