import React from "react";
import style from "./Style.module.css";

function FeCard() {
  const datas = [
    {
      img: "https://media-assets.grailed.com/prd/detail-page/ba0a537963b94639a95d060fd78d20a7?w=378&h=230&fit=clip&q=40&auto=format",
      title: "On location:Berlin",
      collectionName: "CURTED COLLECTONS",
      path: "/reads/",
    },
    {
      img: "https://media-assets.grailed.com/prd/misc/bd83ecd60f7c4104b24de3aca504bba2?w=1600&fit=clip&q=90&auto=format",
      title: "Kintweare Essentials",
      collectionName: "STREET STYLE",
      path: "/collectoins/",
    },

    {
      img: "https://media-assets.grailed.com/prd/misc/61b30e1cb1934deea578bca185449aa8?w=1600&fit=clip&q=90&auto=format",
      title: "EveryThing Vintage",
      collectionName: "CURTED COLLECTONS",
      path: "",
    },
    {
      img: "https://media-assets.grailed.com/prd/misc/2be1e00a21434e3ea82c835d02c0a0bd?w=1600&fit=clip&q=90&auto=format",
      title: "Post-Sneaker World",
      collectionName: "CURTED COLLECTONS",
      path: "",
    },
  ];
  return (
    <div className={style.sec}>
      <div className={style.Col}>
        <h2 >releted Collections</h2>

        <div>
          <div className={style.wrapper}>
            {datas.map((x) => {
              return (
                <div className={style.Card} key={x.title}>
                  <div className={style.imgaeCol}>
                    <img src={x.img} alt="" />
                    <h2 className={style.title}>{x.title}</h2>
                  </div>

                  <div className={style.desc}>
                    <h4>{x.collectionName}</h4>
                    <button>SHOP + FOLLOW</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeCard;
