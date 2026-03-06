import { Button } from "@material-tailwind/react";

function NavDays() {
  const days = [1, 2, 3];

  return (
    <div className="flex justify-center my-10 gap-3">
      {days.map((day) => (
        <a key={day} href={`#day${day}`}>
          <Button className="bg-blue-500 text-white hover:bg-blue-600">
            Day {day}
          </Button>
        </a>
      ))}
    </div>
  );
}

export default NavDays;