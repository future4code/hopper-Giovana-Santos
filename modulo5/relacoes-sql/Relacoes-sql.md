Exercicio 1
### A)Explique o que é uma chave estrangeira
R:Uma chave estrangeira em SQL é uma restrição no banco de dados que liga duas tabelas. Pode ser simplesmente entendido como uma coluna (ou uma combinação de colunas) em uma tabela cujos valores devem corresponder aos da coluna de outra tabela.

------------------------------------------------------
### B)Crie a tabela e, ao menos, uma avaliação para cada um dos filmes.
R:
```sql
CREATE TABLE Rating (
id VARCHAR(255) PRIMARY KEY,
comment TEXT NOT NULL,
rate FLOAT NOT NULL,
movie_id VARCHAR(255),
FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating (id, comment, rate, movie_id)
Values("001", "Muito Satisfeito com o filme!", "10", "001"),
	    ("002", "Nada demais, assistivel.", "7", "002"),
      ("003", "Filme pessímo, não indicavel.", "1", "003"),
      ("004", "Apaga que é melhor, seloc","0", "004");
    
SELECT * FROM Movie
JOIN Rating ON Rating.movie_id = Movie.id;
```

------------------------------------------------------
### C)Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.
R:Ocorrerá um erro, pois a chave estrangeira necessita de um movie_id válido.
```sql
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`Turma-labenumero-nome-sobrenome`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```
------------------------------------------------------
### D)Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.
R:
```sql
ALTER TABLE Movie
DROP COLUMN Rating;
```
-------------------------------------------------------
### E)Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.
R:Não será possivel deletar valores de uma tabela, pois esta sendo utilizada em outra tabela.
```sql
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`Turma-labenumero-nome-sobrenome`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```

------------------------------------------------------
Exercicio 2
### A)Explique, com as suas palavras, essa tabela
R:A tabela MovieCast, irá receber dois valores de outra tabela, os valores são movie_id e actor_id.

------------------------------------------------------
### B)Crie, ao menos, 6 relações nessa tabela 
R:
```sql
INSERT INTO MovieCast (movie_id, actor_id)
VALUES("001", "001"),
      ("002", "003"),
      ("003","002"),
      ("004", "004"),
      ("003", "004"), 
      ("002", "001");
```

------------------------------------------------------
### C)Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query 
R:A chave estrangeira não permite a criação com id inexistente de tabelas.
```sql
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`Turma-labenumero-nome-sobrenome`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```

------------------------------------------------------
### D)Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query
R:Não será possivel deletar valores de uma tabela, pois esta sendo utilizada em outra tabela.
```sql
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`Turma-labenumero-nome-sobrenome`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```

------------------------------------------------------
Exercicio 3
### A)Explique, com suas palavras, a query acima. O que é o operador ON?
R:O ON é utilizado quando se tem nomes de colunas diferentes ou iguais entre as tabelas, já o USING é utilizando quando ambas as tabelas compartilham uma coluna com o mesmo nome exato.

------------------------------------------------------
### B)Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.
R:
```sql
SELECT Movie.id, Movie.title, Rating.rate FROM Movie
JOIN Rating ON Rating.movie_id = Movie.id;
```
