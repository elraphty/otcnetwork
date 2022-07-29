import app from "./app";
import {apiPort} from "./config";

app.listen(apiPort, (): void => {
  console.log(`Server Running here 👉 https://localhost:${apiPort}`);
});