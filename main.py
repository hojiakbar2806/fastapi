from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "It works test5"}


@app.post("/{query}")
async def query(query: str):
    return {"message": query}
