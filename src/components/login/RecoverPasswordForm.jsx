import { IconArrowLeft } from '@tabler/icons-react';
import {
  Anchor,
  Box,
  Button,
  Center,
  Container,
  Group,
  Paper,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import classes from './ForgotPassword.module.css';
import axios from "axios";



 const ForgotPasswordForm = () => {
    
    const recoverPasswordRequest = async (e) => {
        
        e.preventDefault();

        const formData = {
            email: e.target.email.value
        }

        try {
            await axios.post(`${import.meta.env.VITE_SERVER_API}/api/v1/auth/recoverPassword`, formData);

        } catch (error) {

            console.error("Error recovering password:", error);
        }
    } 
  
  
    return (
    <Container size={460} my={30}>
      <Title className={classes.title} ta="center">
        Forgot your password?
      </Title>
      <Text c="dimmed" fz="sm" ta="center">
        Enter your email to get a reset link
      </Text>

      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <form onSubmit={recoverPasswordRequest} method="post">
        <TextInput name="email" label="Your email" placeholder="me@mantine.dev" required />
        <Group justify="space-between" mt="lg" className={classes.controls}>
          <Anchor c="dimmed" href="/auth/login" size="sm" className={classes.control}>
            <Center inline>
              <IconArrowLeft size={12} stroke={1.5} />
              <Box ml={5}>Back to the login page</Box>
            </Center>
                
          </Anchor>
          <Button type="submit" className={classes.control}>Reset password</Button>
        </Group>
        </form>
      </Paper>
    </Container>
  );
}

export default ForgotPasswordForm;