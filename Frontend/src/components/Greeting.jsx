import React, { useState, useEffect } from "react";
import useAuthStore from "../store";
import { Box, Typography, Container } from "@mui/material";

const Greeting = () => {
  const token = useAuthStore((state) => state.token);
  const firstName = useAuthStore((state) => state.firstName);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hours = time.getHours();
    if (hours < 12) {
      return "Good morning";
    } else if (hours < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 4,
      }}
    >
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>
          {time.toLocaleTimeString()}
        </Typography>
      </Box>
      {token && (
        <Box mt={2}>
          <Typography variant="h5" component="h2">
            {getGreeting()}, {firstName}!
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default Greeting;
