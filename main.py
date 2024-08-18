from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "It works test4"}


@app.post("/{query}")
async def query(query: str):
    return {"message": query}
