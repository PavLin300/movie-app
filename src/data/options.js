const apiKey =
	"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzVhNGQ5ZDQ3ODA1ZTQxYjYwM2NiMjZhNjU2ODY5NiIsIm5iZiI6MTczMjUzMjg3Mi44NjIwNjc1LCJzdWIiOiI2NzQ0NTk4OWQ0MDE0YzJkYjc3MDk1MGIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WEDWszx05EJjBxmaXDJed1IGmzLZViy367Zdb5MjNPs";

const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: apiKey,
	},
};

export default options;
