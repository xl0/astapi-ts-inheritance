import fastapi
from pydantic import BaseModel


class PersonPublic(BaseModel):
    name: str

class PersonPrivate(PersonPublic):
    ssn: str

db = [ PersonPrivate(name="John", ssn="123-45-6789"),  PersonPrivate(name="Jane", ssn="987-65-4321"), ]

app = fastapi.FastAPI()

@app.post("/person_list/", response_model=list[PersonPublic])
async def person_list( ):
    return db

@app.post("/person/{idx}", response_model=PersonPrivate)
async def person(idx: int):
    return db[idx]