import { PasswordInput } from '@mantine/core';

function PasswordInputA() {
  return (
    <PasswordInput
      label="Password"
      description="Please enter your password"
      placeholder="Password"
        required
    />
  );
}

export default PasswordInputA;