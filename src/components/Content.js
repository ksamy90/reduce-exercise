import Part from "./Part";

const Content = ({ course }) => {
  const num = course.parts.reduce(
    (start, current) => start + current.exercises,
    0
  );
  return (
    <div>
      {course.parts.map((item) => {
        return <Part key={item.id} item={item} />;
      })}
      <p>total of {num} exercises</p>
    </div>
  );
};

export default Content;
