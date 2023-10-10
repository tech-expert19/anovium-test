from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from sqlalchemy import or_, cast, String
from sqlalchemy.sql import func

from fastapi import Depends, HTTPException, status, APIRouter, Response

from .database import get_db
from .models import Package
from .schemas import PackageResponse, CreatePackageSchema, ListPackageResponse

router = APIRouter()


@router.get('/', response_model=ListPackageResponse)
def get_packages(db: Session = Depends(get_db), limit: int = 10, page: int = 1, search: str = ''):
    skip = (page - 1) * limit

    packages = db.query(Package,)
    packages = packages.group_by(Package.id).filter(
            or_(cast(Package.id, String) == search, Package.return_address.ilike(f"%{search}%"), Package.destination_address.ilike(f"%{search}%"))
            )
    packages_count = packages.count()
    packages_query = packages.limit(limit).offset(skip).all()

    return {'status': 'success', 'results': len(packages_query), 'total': packages_count, 'packages': packages_query}


@router.post('/', status_code=status.HTTP_201_CREATED, response_model=PackageResponse)
def create_package(post: CreatePackageSchema, db: Session = Depends(get_db)):
    new_package = Package(**post.dict())
    db.add(new_package)
    try:
        db.commit()
        db.refresh(new_package)
    except IntegrityError as e:
        db.rollback()
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=e.orig.diag.message_detail)

    return new_package
