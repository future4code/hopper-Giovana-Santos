import express, {Request, Response} from 'express';
import cors from 'cors'

//Ex 1
const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from Express")
})

//Ex 2
type Dados = {
    id: string,
    name: string,
    phone: string,
    email: string,
    website: string
}

//Ex 3
const usuarios: Dados[] = [
  {
    id: 'abc',
    name: 'Alex',
    phone: '40028922',
    email: 'alexLaranja@gatinhos.com',
    website: 'https://www.universodegatos.com/gato-laranja/'
  },
  {
    id: 'def',
    name: 'Edgard',
    phone: '40072121',
    email: 'Edgard@caramelo.com',
    website: 'https://www.cozinhatecnica.com/2018/05/caramelo/'
  },
  {
    id: 'ghi',
    name: 'Simba',
    phone: '988934215',
    email: 'simba@reidelas.com',
    website: 'https://pt.wikipedia.org/wiki/Rei'
  }
]

//Ex 4
app.get("/usuarios", (req: Request, res: Response) => {
  res.send(usuarios)
})

//Ex 5
type Posts = {
  id: string,
  title: string,
  body: string,
  userId: string
}

//Ex 6
const posts: Posts[] = [
  {
    id: '1',
    title: 'Gatos Laranjas',
    body: 'Os gatos laranjas, são os mais procurados em feiras de adoção, por sua coloração exuberante.',
    userId: 'abc'
  },
  {
    id: '2',
    title: 'Perigo nas ruas',
    body: 'Os cães caramelos, são os maiores vilões dos motociclistas, por seus ataques ferozes, atrás de uma canela fina.',
    userId: 'def'
  },
  {
    id: '3',
    title: 'A importancia da castração',
    body: 'Simba o terror dos telhados, foi apartir dele que surgiu multirão de castração, após ter engravidado, todas as gatas do bairro',
    userId: 'ghi'
  }
]

//Ex 7
app.get("/posts", (req: Request, res: Response) => {
  res.send(posts)
})

//Ex 8
app.get("/user/posts", (req: Request, res: Response) => {
  const idUser = req.query.id
  if(!idUser){
    res.status(400).send("Necessario o fornecimento do id")
  }
  const postUser = posts.filter(post => post.userId === idUser)
  res.send(postUser)
})

//

app.listen(3003, () => {
    console.log("server is running in http://localhost:3003")
})

