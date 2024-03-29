import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { CircleDollarSign, File, LayoutDashboard, ListChecks } from "lucide-react";

import { db } from "@/lib/db";
// import { IconBadge } from "@/components/icon-badge";
// import { Banner } from "@/components/banner";

import { TitleForm } from "./_components/title-form";
import { DescriptionForm } from "./_components/description-form";
import { ImageForm } from "./_components/image-form";
// import { ImageForm } from "./_components/image-form";
// import { CategoryForm } from "./_components/category-form";
// import { PriceForm } from "./_components/price-form";
// import { AttachmentForm } from "./_components/attachment-form";
// import { ChaptersForm } from "./_components/chapters-form";
// import { Actions } from "./_components/actions";

const CourseIdPage = async ({
  params
}: {
  params: { subjectId: string }
}) => {
  
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }
  const course = await db.subject.findUnique({
    where: {
      id: params.subjectId,
      userId
    },
  });

  if (!course) {
    return redirect("/");
  }

  const requiredFields = [
    course.title,
    course.description,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  return (
    <>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium">
              Course setup
            </h1>
            <span className="text-sm text-slate-700">
              Complete all fields {completionText}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div>
            <div className="flex items-center gap-x-2">
              <h2 className="text-xl">
                Customize your course
              </h2>
            </div>
            <TitleForm
              initialData={course}
              subjectId={course.id}
            />
            <DescriptionForm
              initialData={course}
              subjectId={course.id}
            />
            <ImageForm
              initialData={course}
              subjectId={course.id}
            />
          </div>
        </div>
      </div>
    </>
   );
}
 
export default CourseIdPage;
