const express = require("express");
const cors = require("cors");

const { v4: uuid, validate: isUuid, v4 } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  const { title, url, techs } = request.query;

  const results = title ? repositories.filter(repository => repository.title.includes(title)) : (url ? repositories.filter(repository => repository.url.includes(url)) : (techs ? repositories.filter(repository => repository.techs.includes(techs)) : repositories))   

  return response.json(results);

});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  const repository = {
    id: v4(),
    title,
    url,
    techs,
    likes: 0
  }

  repositories.push(repository);

  return response.json(repository);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const {title , url, techs } = request.body;

  const repositoryToUpdate = repositories.findIndex(repository => repository.id === id);

  if (repositoryToUpdate < 0)
    return response.status(400).send({error: "repository not found"})
  
  if (title)
    repositories[repositoryToUpdate].title = title;
  if (url)
    repositories[repositoryToUpdate].url = url;
  if (techs)
    repositories[repositoryToUpdate].techs = techs;

  return response.json(repositories[repositoryToUpdate]);
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if (repositoryIndex < 0)
    return response.status(400).send({error: "repository not found"});

  repositories.splice(repositoryIndex, 1);

  return response.status(204).send();

});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;
  
  const repositoryToLikeIndex = repositories.findIndex(repository => repository.id === id);

  if (repositoryToLikeIndex < 0)
    return response.status(400).send({error: "repository not found"});

  repositories[repositoryToLikeIndex].likes++;

  return response.json(repositories[repositoryToLikeIndex]);
});

module.exports = app;
