const page = ({ params: { id } }: { params: { id: string } }) => {
  return <h1>공지사항 {id} 페이지</h1>;
};

export default page;
