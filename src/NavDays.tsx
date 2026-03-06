function NavDays() {
  return (
    <div className="flex justify-center my-10 gap-3">
      <a href="#day1">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Day 1
        </button>
      </a>

      <a href="#day2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Day 2
        </button>
      </a>

      <a href="#day3">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Day 3
        </button>
      </a>
    </div>
  );
}

export default NavDays;