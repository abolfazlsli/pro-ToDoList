from fastapi import *
from database import *
from sqlalchemy.orm import Session


app = FastAPI()


def get_db () :
        db = SessionLocal()
        try: 
              yield db
        finally:
              db.close()

@app.post("/login")
def Login (request : Request) :
    form = request.json()
    return {
        "data" : "loginapi"
    }