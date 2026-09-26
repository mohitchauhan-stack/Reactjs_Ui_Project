import "./App.css";
import Container from "./components/Container";

function App() {
  const cardData = [
    {
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sunt. Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consect",
      tag: "Satisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661741416773-8751741873a3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4fHx8ZW58MHx8fHx8",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sunt. Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consect",
      tag: "Underserved",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661506425012-b781fe828e02?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sunt. Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consect",
      tag: "Underbanked",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661506425012-b781fe828e02?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sunt. Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consect",
      tag: "Underbanked",
    },
  ];

  return (
    <>
      <Container cardData={cardData} />
    </>
  );
}

export default App;
