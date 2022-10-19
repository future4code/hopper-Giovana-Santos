import {app} from "./app"
import {userRouter} from "./routes/userRouter"
import {movieRouter} from "./routes/MovieRouter"

app.use("/user", userRouter)
app.use("/movie", movieRouter)
