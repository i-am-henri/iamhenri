import Component from "./component";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "henri | portfolio",

}
export default function Home() {
  return (
    <div className="bg-white dark:bg-black dark:text-white">
      <Component />
    </div>
  )
}