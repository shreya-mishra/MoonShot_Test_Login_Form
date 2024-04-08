import Head from "next/head";
import Link from "next/link";
import Header from "~/components/Header";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <div className="content grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="login-section">{/* <LoginForm /> */}</div>
        <div className="create-account-section">
          {/* <CreateAccountForm /> */}
        </div>
      </div>
    </div>
  );
}
