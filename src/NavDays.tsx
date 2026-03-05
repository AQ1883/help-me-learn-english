import { Button } from "@material-tailwind/react";

function NavDays() {
  return (
    <div className="flex justify-center my-10 gap-2">
      <a href="#day1">
        <Button className="bg-blue-500 text-white hover:bg-blue-600">Day 1</Button>
      </a>
      <a href="#day2">
        <Button className="bg-blue-500 text-white hover:bg-blue-600">Day 2</Button>
      </a>
      <a href="#day3">
        <Button className="bg-blue-500 text-white hover:bg-blue-600">Day 3</Button>
      </a>
    </div>
  );
}

export default NavDays;