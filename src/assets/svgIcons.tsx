import type { SVGProps } from "react";

export function TrashRestore(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      viewBox="0 0 24 24"
      fill="#ee4747"
      {...props}
    >
      <path d="M 14 4 C 13.477 4 12.9415 4.1835 12.5625 4.5625 C 12.1845 4.9405 12 5.477 12 6 L 12 7 L 5 7 L 5 9 L 6.09375 9 L 8 27.09375 L 8.09375 28 L 23.90625 28 L 24 27.09375 L 25.90625 9 L 27 9 L 27 7 L 20 7 L 20 6 C 20 5.477 19.8165 4.9415 19.4375 4.5625 C 19.0595 4.1845 18.523 4 18 4 L 14 4 z M 14 6 L 18 6 L 18 7 L 14 7 L 14 6 z M 8.125 9 L 23.875 9 L 22.09375 26 L 9.90625 26 L 8.125 9 z M 16 12 L 12 16 L 15 16 L 15 23 L 17 23 L 17 16 L 20 16 L 16 12 z" />
    </svg>
  );
}

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={8}
      height={8}
      viewBox="0 0 12 12"
      fill="#ee4747"
      {...props}
    >
      <path d="M15 6H9M20 21H19M19 21H5M19 21C19 18.4898 17.7877 16.1341 15.7451 14.675L12 12M5 21H4M5 21C5 18.4898 6.21228 16.1341 8.25493 14.675L12 12M20 3H19M19 3H5M19 3C19 5.51022 17.7877 7.86592 15.7451 9.32495L12 12M5 3H4M5 3C5 5.51022 6.21228 7.86592 8.25493 9.32495L12 12" />
    </svg>
  );
}
