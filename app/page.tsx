import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { Counter } from './Counter';
import styles from './page.module.css';

const filePath = path.join(process.cwd(), '/src/store/text.txt');

export default async function Home() {
  const file = await readFile(filePath, 'utf-8');

  const fileCount = Number(file);

  console.log({ fileCount });

  writeFile(filePath, String(fileCount + 1), 'utf-8');

  return (
    <div>
      <h1 className={styles.title}>Bonjour NextJS 13</h1>
      <Counter count={fileCount} />
    </div>
  );
}
