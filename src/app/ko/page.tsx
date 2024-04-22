// "use client";
import "../globals.css";
import styles from "../styles.module.css";
import { useTranslations } from 'next-intl';

import Link from "next/link";

export default function Page() {
  const t = useTranslations('Index');

  const items = Array(100)
    .fill("")
    .map((v, i) => i + 1);

  console.log(items);

  return (
    <main>
      <div>
        <h1>{t('title')}</h1>
        {items.map((item, index) => {
          return (
            <div key={index} className={styles.wrap}>
              <Link href={`/items/${item}`}>open {item} modal</Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}