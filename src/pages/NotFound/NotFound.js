import Layout from "./../../components/Layout/Layout";

const NotFound = () => {
  return (
    <Layout
      aside={"aside"}
      content={
        <div
          style={{
            textAlign: "center",
            fontSize: "30px",
          }}
        >
          Not Found
        </div>
      }
    />
  );
};

export default NotFound;
