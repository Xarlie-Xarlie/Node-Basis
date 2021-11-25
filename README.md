# First Node Api

## Application Routes

- **`POST /repositories`**: The route must be received `title`, `url` and `techs` inside the request body,  with the URL being the link to the github of this repository. When registering a new project, it must be stored inside an object in the following format: `{ id: "uuid", title: 'Desafio Node.js', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 }`; Make sure the ID is a UUID, and always start the likes as 0.

- **`GET /repositories`**: Route listing all repositories;

- **`PUT /repositories/:id`**: The route should only change the `title`, `url` and `techs` of repository that have the `id` equal to the `id` present in the route parameters;

- **`DELETE /repositories/:id`**: The route must delete the repository with the `id` present in the route parameters;

- **`POST /repositories/:id/like`**: The route must increase the number of likes inside a specific repository chosen through the `id` present inside the route parameters, at each call of this route, the number of likes must be increased by 1;

## Tests Especications

- **`should be able to create a new repository`**: For this test to pass, your app must allow a repository to be created, returning a json with the project created.

- **`should be able to list the repositories`**: For this test to pass, your app must allow an array with all repositories that have be created so far to be returned.

- **`should be able to update repository`**: For this test to pass, your app must allow you to change only the `url`, `title` and `techs` fields.

- **`should not be able to update a repository that does not exist`**: For this test to pass, you must validate in your update route whether the repository id sent by url exists or not. If not, return an error with status `400`.

- **`should not be able to update repository likes manually`**: For this test to pass, you not allow that your update route to directly change the likes of that repository, keeping the same number of likes that the repository already had before the update. This is because the only place that should update this information is the route responsible for increasing the number of likes.

- **`should be able to delete the repository`**: For this test to pass, you must allow your delete route to delete a project, and when you do the deletion, it returns an empty response, with stats `204`.

- **`should not be able to delete a repository that does not exist`**: For this test to pass, you must validate in your delete route whether the repository id sent by the url exists or not. If not, return an error with status `400`.

- **`should be able to give a like to the repository`**: For this test to pass, your app must allow a repository with the given ID to receive likes. The likes value must be incremented by 1 for each request, and as a result, return a repository json with the number of likes updated.

- **`should not be able to like a repository that does not exist`**: For this test to pass, you must validate in your like route whether the repository id sent by the url exists or not. If not, return an error with status `400`.
