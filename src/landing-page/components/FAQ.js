import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Formulario from './Form';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        py: { xs: 8, sm: 16 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
    <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Contacto y Preguntas Frecuentes
      </Typography>
    <Grid container spacing={6}>
      <Grid item xs={12} md={6}>
        <Box sx={{ width: '100%' }}>
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography component="h3" variant="subtitle2">
              ¿Cómo te mantienes actualizado/a sobre las últimas tendencias y avances en tecnologías de la información?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: '100%', md: '70%' } }}
              >
                Para estar al tanto de las últimas tendencias, participo regularmente en cursos en línea, 
                conferencias y comunidades en línea especializadas. Además, soy miembro activo de grupos de discusión 
                y plataformas como GitHub, donde puedo colaborar en proyectos de código abierto y aprender de otros 
                profesionales del sector.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography component="h3" variant="subtitle2">
              ¿Cuáles son tus enfoques y estrategias para asegurar la calidad en el desarrollo de software?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: '100%', md: '70%' } }}
              >
                Mi enfoque para garantizar la calidad en el desarrollo de software implica la implementación 
                rigurosa de pruebas unitarias, pruebas de integración y pruebas de aceptación del usuario. 
                Además, abogo por la adopción de metodologías ágiles, lo que permite una entrega continua 
                y una retroalimentación rápida, garantizando así la excelencia en cada fase del desarrollo.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography component="h3" variant="subtitle2">
              ¿Qué tecnologías y herramientas específicas dominas en el ámbito de las Tecnologías de la Información?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: '100%', md: '70%' } }}
              >
                Mi experiencia abarca el dominio de lenguajes de programación como Java, Python y JavaScript, 
                así como el uso avanzado de herramientas como Docker para la gestión de contenedores y 
                Kubernetes para la orquestación. Además, tengo habilidades sólidas en el desarrollo de 
                bases de datos con tecnologías como MySQL y MongoDB.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel4'}
            onChange={handleChange('panel4')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Typography component="h3" variant="subtitle2">
              ¿Cómo abordas la seguridad de la información en tus proyectos?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: '100%', md: '70%' } }}
              >
                La seguridad de la información es una prioridad en mis proyectos. Implemento prácticas
                 de codificación segura, realizo evaluaciones de vulnerabilidades periódicas y estoy
                 al tanto de las mejores prácticas en ciberseguridad.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
        </Grid>
        <Grid item xs={12} md={6}>
        <Box sx={{ width: '100%' }}>
          <Formulario></Formulario>
        </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
