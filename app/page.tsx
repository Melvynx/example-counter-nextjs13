import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { Counter } from './Counter';

const filePath = path.join(process.cwd(), '/src/store/text.txt');

export default async function Home() {
  const file = await readFile(filePath, 'utf-8');

  const fileCount = Number(file);

  console.log({ fileCount });

  writeFile(filePath, String(fileCount + 1), 'utf-8');

  return (
    <div className="m-auto w-fit my-8">
      <Counter count={fileCount} />
    </div>
  );
}
