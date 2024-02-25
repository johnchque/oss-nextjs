import { Button } from "@/components/ui/button";
import Link from "next/link";

const SubjectsPage = () => {
  return (
    <div>
      <Link href="/subject/create">
        <Button>New Subject</Button>
      </Link>
    </div>
  );
};

export default SubjectsPage;
