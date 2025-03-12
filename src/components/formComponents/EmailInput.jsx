import { TextInput } from '@mantine/core';

function EmailInput() {
  return (
    <TextInput
      label="Email"
      description="Please enter your email address"
      placeholder="example@example.com"
      required
      type="email"
    />
  );
}

export default EmailInput;