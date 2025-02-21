from sqlalchemy import String , Integer , Column , create_engine 
from sqlalchemy.ext.declarative import  declarative_base
from sqlalchemy.orm import sessionmaker


Base = declarative_base()



class User (Base):
    __tablename__ = "users"
    id = Column(Integer , primary_key=True)
    name = Column(String)
    lastname = Column(String , nullable=False)
    password = Column(String , nullable=False)
    digiid = Column(String , unique=True)
    

DATABASE_URL = "sqlite:///./database.db"

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)



Base.metadata.create_all(bind=engine)

