import React from "react";
import CourseModulesWithProps from "../../components/exercises/03_props";

export default {
  title: "Exercises/03 - component with props",
  component: CourseModulesWithProps,
};

export const Basic = () => {
  const name = "MSC Enterprise Software Systems";
  const twoModules = [
    {
      name: "Cloud Architecture",
      noLectures: 2,
      noPracticals: 3,
    },
    {
      name: "Enterprise Web Dev",
      noLectures: 2,
      noPracticals: 2,
    },
  ];
  return <CourseModulesWithProps modules={twoModules} course={name} />;
};
