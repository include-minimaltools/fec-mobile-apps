"use client";

import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";
import { FC } from "react";

type Props = {
  children: React.ReactNode;
  session: Session | null;
};

const SessionProvider: FC<Props> = ({ children, session }: Props) => {
  return <Provider>{children}</Provider>;
};

export default SessionProvider;
