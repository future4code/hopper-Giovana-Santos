import { MovieDatabase } from "../data/MovieDatabase"
import { v4 as generateId } from 'uuid'
import { Movie } from "../types/Movie"

export class MovieBusiness {
  async create({ title, description, duration_in_minutes, year_of_release }: any):Promise<void> {
    if (!title || !description || !duration_in_minutes || !year_of_release) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    const id = generateId()

    const movieDatabase = new MovieDatabase()
    await movieDatabase.create({
      id,
      title,
      description,
      duration_in_minutes,
      year_of_release
    })
  }
  async get():Promise<Movie[]> {
    const movieDatabase = new MovieDatabase()
    return await movieDatabase.get()
  }

}
