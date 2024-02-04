import Image from "next/image";
import { getTest } from "./action";

export default async function Home() {
  const data = await getTest();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.map((item: any) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </main>
  );
}
