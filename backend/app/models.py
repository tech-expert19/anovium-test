from sqlalchemy import TIMESTAMP, Column, String, text, Integer

from .database import Base


class Package(Base):
    __tablename__ = 'package'
    id = Column(Integer, primary_key=True, nullable=False, unique=True, index=True)
    return_address = Column(String,  nullable=False, index=True)
    destination_address = Column(String, nullable=False, index=True)
    created_at = Column(TIMESTAMP(timezone=True),
                        nullable=False, server_default=text("now()"))
    updated_at = Column(TIMESTAMP(timezone=True),
                        nullable=False, server_default=text("now()"))
