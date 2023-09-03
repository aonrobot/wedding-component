import type { V2_MetaFunction } from "@remix-run/node";
import FlipCountdown from '@rumess/react-flip-countdown';

import styles from "~/styles/index.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <FlipCountdown
      hideYear='true'
      theme='green'
      size="small"
      endAt={'2023-11-25 01:26:58'} // Date/Time
    />
  );
}
