import { Container } from "@mui/material";
import Home from "./pages/Home";

function App() {
  return (
    <Container
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Home />
    </Container>
  );
}

export default App;
