from datetime import datetime
from typing import List
import uuid
from pydantic import BaseModel, constr

class BaseResponse(BaseModel):
    status: int
    message: str
    data: str

    class Config:
        orm_mode = True

class PackageBaseSchema(BaseModel):
    id: int
    return_address: str
    destination_address: str

    class Config:
        orm_mode = True


class CreatePackageSchema(PackageBaseSchema):
    pass


class PackageResponse(PackageBaseSchema):
    created_at: datetime
    updated_at: datetime


class ListPackageResponse(BaseModel):
    results: int
    total: int
    packages: List[PackageResponse]
