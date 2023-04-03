export default function generatePassword(length: number): string {
  const options =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const arr = Array(length)
    .fill("")
    .map(() => options[Math.floor(Math.random() * options.length)]);
  return arr.join("");
}
