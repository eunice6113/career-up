// career-up/apps/edu/src/pages/page-list.tsx

import React from "react";
import CourseListItem from "../components/course-list-item";
import { coursesAtom } from "../atoms";
import { useAtomValue } from "jotai";

const PageList: React.FC = () => {
  const courses = useAtomValue(coursesAtom);

  return (
    <>
      {courses.map((course) => (
        <CourseListItem key={course.id} {...course} />
      ))}
    </>
  );
};

export default PageList;