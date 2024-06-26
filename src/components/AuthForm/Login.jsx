import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [inputs, setIpnuts] = useState({
    email: "",
    password: "",
  });

  const { loading, error, login } = useLogin();

 
  return (
    <>
      <Input
        placeholder="Email"
        fontSize={14}
        type="email"
        value={inputs.email}
        size={"sm"}
        onChange={(e) => setIpnuts({ ...inputs, email: e.target.value })}
      />
      <Input
        placeholder="Password"
        fontSize={14}
        type="password"
        size={"sm"}
        value={inputs.password}
        onChange={(e) => setIpnuts({ ...inputs, password: e.target.value })}
      />
       {error && (
        <Alert status="error" fontSize={13} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}
      <Button
        w={"full"}
        colorScheme="blue"
        size="sm"
        fontSize={14}
        isLoading={loading}
        onClick={()=> login(inputs)}
      >
        Log in
      </Button>
    </>
  );
};

export default Login;
