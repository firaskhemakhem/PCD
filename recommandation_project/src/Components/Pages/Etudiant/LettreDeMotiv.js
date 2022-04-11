import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();
export default function LettreDeMotiv() {
    return (
        <ThemeProvider theme={theme}>

            <CssBaseline />


            <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
               
                    <Typography component="h1" variant="h5" >
                        Lettre De Motivation
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '50ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-multiline-static"
                            label="De"
                            placeholder=" Nom & Prénom, 
                            Adresse
                            CodePostal/Gouv
                            Numéro de Telephone"
                            multiline
                            rows={4}
                        />

                        <Grid container justifyContent="flex-end">
                            <TextField
                                id="outlined-multiline-static"
                                label="A"
                                placeholder=" Nom de l'Entreprise, 
                                Adresse de l'Entreprise
                                CodePostal/Gouv
                                Date de Lettre"
                                multiline
                                rows={4}
                            /></Grid>
                    </Box>

                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '120ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-multiline-static"
                            label="Objet"
                            
                            multiline
                            fullWidth
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Corps/Contenu"
                            multiline
                            rows={9}
                            fullWidth
                        />
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '50ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >   <Grid container justifyContent="flex-end">
                            <TextField
                                id="outlined-multiline-static"
                                label="Signature"
                                multiline
                                rows={1}
                            />
                            
                        </Grid>
                        <Grid container justifyContent="flex-end">
                            <button class="btn btn-outline-secondary">
                                Envoyer
                            </button>
                        </Grid>
                    </Box>
                </Paper>
            </Container>

        </ThemeProvider>
    );
}
