import { FC, PropsWithChildren  }  from "react";
import PageHeader from "./Header";
import PageFooter from "./Footer";

const PageLayout:FC<PropsWithChildren> = ({ children }) => {
  return (
    <div id="wrapper">
      <PageHeader />
        <div className="3xl:container mx-10">{children}</div>
      <PageFooter />
    </div>
  );
}

export default PageLayout;