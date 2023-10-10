from dotenv import load_dotenv

from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    DATABASE_PORT: int
    POSTGRES_PASSWORD: str
    POSTGRES_USER: str
    POSTGRES_DB: str
    POSTGRES_HOST: str
    POSTGRES_HOSTNAME: str

    CLIENT_ORIGIN: str

    class Config:
        env_file = './.env'

load_dotenv()
settings = Settings()
