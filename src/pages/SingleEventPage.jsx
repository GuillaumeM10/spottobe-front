import React from "react";

const SingleEventPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Single Event {{ id }}</h1>
    </div>
  );
};

export default SingleEventPage;
<h1>Single Event</h1>;
