import type { NextPage } from "next";
import { Input } from "party-starter";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Input />
    </div>
  );
};

export default Home;
