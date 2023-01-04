import { HeaderCard } from "../../../components/card/HeaderCard";
import { ListProductCard } from "../../../components/card/ListProductCard";
import style from "./cardPage.module.css";
const page = () => {
  return (
    <div className={style.container}>
      <div className={style.principalContent}>
        <HeaderCard  />
        <ListProductCard />
      </div>
    </div>
  );
};

export default page;
