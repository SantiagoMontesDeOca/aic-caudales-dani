from dataclasses import dataclass, field
from datetime import date
from typing import List, Optional

@dataclass
class Level:
    type: str
    date: date
    min: Optional[int] = None
    max: Optional[int] = None
    dispensed: Optional[int] = None

@dataclass
class Section:
    id: str = ""
    title: str = ""
    order: int = 0
    levels: List[Level] = field(default_factory=list)
    latitude: Optional[float] = None  # Agregado: latitud de la estación
    longitude: Optional[float] = None  # Agregado: longitud de la estación

@dataclass
class Sections:
    version: str
    last_update: date
    sections: List[Section] = field(default_factory=list)
