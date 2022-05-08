import Layout from "./../../components/Layout/Layout";

const NotFound = () => {
  return (
    <Layout
      aside={"aside"}
      content={
        <div
          style={{
            fontFamily: "Tajawal, sans-serif",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "40px",
            height: "100vh",
            maxHeight: "100%",
          }}
        >
          Not Found
        </div>
      }
    />
  );
};

export default NotFound;
