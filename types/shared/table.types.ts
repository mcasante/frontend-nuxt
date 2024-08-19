export interface TableSort<Column, Direction extends "asc" | "desc"> {
  column: Column;
  direction: Direction;
}
