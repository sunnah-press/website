import { useRouter } from "next/router";

export default function hadits() {
  const router = useRouter();
  const { id } = router.query;
  return <div>hadits: {id}</div>;
}
