from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "It works with CI/CD"}
