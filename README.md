# Expense-management-using-mern

QUESTION : how api work in this prject
1. frontend sends a request using = await axios.post("api/v1/transections/get-transection", {...});

2. The proxy in the vite.config.js file intercepts the request and forwards it to the backend.
3. The proxy notices that the request starts with /api, so it forwards the request to http://localhost:8080.
4. It rewrites the path by removing /api, so the request becomes /v1/transections/get-transection for the backend.

5. This line in the backend sets up the routing for anything under /v1/transections.
