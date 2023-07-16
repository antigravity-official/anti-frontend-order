interface DivLinesProps {
  output: string[];
}

export default function DivLines({ output }: DivLinesProps) {
  let key = 0;

  return (
    <>
      {output.map((line) => (
        <div key={key++}>{line}</div>
      ))}
    </>
  );
}
