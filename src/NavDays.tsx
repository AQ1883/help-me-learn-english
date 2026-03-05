import { Button, ButtonGroup } from "@material-tailwind/react";

function NavDays() {
  return (
    <>
      <div className="flex justify-center my-10">
        <ButtonGroup  color="primary">
          <a href="#day1">
            <Button>Day 1</Button>
          </a>
          <a href="#day2">
            <Button>day 2</Button>
          </a>
          <a href="#day3">
            <Button>day 3</Button>
          </a>
        </ButtonGroup>
        
      </div>
    </>
  );
}

export default NavDays;
