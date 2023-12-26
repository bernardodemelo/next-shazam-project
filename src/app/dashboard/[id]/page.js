"use client";

import { useParams } from "next/navigation";

export default function ExampleClientComponent() {
  const params = useParams();

  return <div>{params.id}</div>;
}
