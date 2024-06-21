function ListDemo() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const evenNumbers = numbers.filter((number) => number % 2 == 0);

  return (
    <ul>
      {evenNumbers.map((number) => (
        <li>{number}</li>
      ))}
    </ul>
  );
}
export default ListDemo;
