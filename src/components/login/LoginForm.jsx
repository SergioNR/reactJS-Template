import { useState } from "react";
import { useNavigate } from "react-router";
import {
    Anchor,
    Button,
    Checkbox,
    Container,
    Group,
    Paper,
    PasswordInput,
    Text,
    TextInput,
    Title,
  } from '@mantine/core';
  import classes from './AuthenticationTitle.module.css';
import { NavLink } from 'react-router'

  
  export function LoginForm() {
    
    const navigate = useNavigate();

    const [loginResponse, setLoginResponse] = useState(null);


    
    const handleLogin = async (e) => {
        

        e.preventDefault();

        const formData = new FormData(e.target);
        const username = formData.get('username');
        const password = formData.get('password');
        const rememberMe = formData.get('rememberMe');

      console.log(username, password, rememberMe);

        try {

            const response = await fetch(`${import.meta.env.VITE_SERVER_API}/api/v1/auth/login/local`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            })

            const jsonResponse = await response.json();

            if (jsonResponse.success === true) {

                if (jsonResponse.user.role && jsonResponse.user.role === 'admin') {
                    navigate('/admin');
                } else {
                  navigate('/user');
                }                
            }

        } catch (error) {
            console.error(error);  

            if (error.response.status === 401) {
                setLoginResponse(
                    { 
                        message: 'Invalid username or password' 
                    }
                );
            }
            else {
                setLoginResponse({
                    message: error.message
            });
            }
        }
    };
    
    return (
      <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
          Welcome back!
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Do not have an account yet?{' '}
          <Anchor size="sm" href="/auth/register">
            Create account
          </Anchor>
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form onSubmit={handleLogin}>
            <TextInput name="username" label="username" placeholder="you@mantine.dev" required defaultValue="username2@gmail.com" />
            <PasswordInput name="password" label="password" placeholder="Your password" required mt="md" defaultValue="password" />
            <Group justify="space-between" mt="lg">
              <Checkbox name="rememberMe" label="Remember me" />
              <Anchor href="/auth/recover-password" size="sm">
                Forgot password?
              </Anchor>
            </Group>
            <Button type="submit" fullWidth mt="xl">
              Sign in
            </Button>
          </form>
        </Paper>
      </Container>
    );
  }

  export default LoginForm