import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
  const [inputs, setIpnuts] = useState({
    email: "",
    password: "",
  });

  const handleAuth = () => {
    console.log("inputs", inputs);
    if (!inputs.email || !inputs.password) {
      alert("Please input all the fields ");
      return;
    }
    navigate("/");
  };
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
      <Button
        w={"full"}
        colorScheme="blue"
        size="sm"
        fontSize={14}
        onClick={handleAuth}
      >
        Log in
      </Button>
    </>
  );
};

export default Login;
