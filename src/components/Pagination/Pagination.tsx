import PaginationComponent from "react-bootstrap/Pagination";
import { getArrayOfNumbers } from "../../utils";

interface Props {
  start: number;
  end: number;
  active: number;
  onClick: (page: number) => void;
}

export function Pagination({ start, end, active, onClick }: Props) {
  return (
    <PaginationComponent>
      {getArrayOfNumbers(start, end).map((number) => (
        <PaginationComponent.Item
          key={number}
          active={number === active}
          onClick={() => onClick(number)}
        >
          {number}
        </PaginationComponent.Item>
      ))}
    </PaginationComponent>
  );
}
