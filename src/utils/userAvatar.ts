export default function userAvatar(author: string) : string {
  const color = [
    "##99ccff",
    "#99ffff",
    "#ffdb4d",
    "#b3ff66",
    "#66ff66",
    "#80b3ff",
    "#ff66b3",
    "#ff66a3",
    "#a366ff",
    "#66ffb3",
  ];
  let hash = 0;
  author.split("").map((char) => (hash += char.charCodeAt(0)));
  hash = hash % 10;
  return `backgroundColor: ${color[hash]}`;
}
