import React from "react";

export const initialState = {
  profile: {
    name: "赵远",
    about: "",
    email: "15261816175@139.com",
    mobile: "15261816175",
    github: "https://github.com/zhaoxiaobao",
    home: "https://doc.hawjs.cn/",
    workPlace: "南京",
    positionTitle: "高级前端工程师",
  },
  avatar: {
    url: "https://p6-passport.byteacctimg.com/img/user-avatar/585e1491713363bc8f67d06c485e8260~300x300.image",
    display: false,
    circle: false,
    theme: "1",
  },
  skillList: [
    {
      name: "JS / HTML / CSS",
      desc: "",
      level: 5,
    },
    {
      name: "NodeJS / TypeScript ",
      desc: "",
      level: 4,
    },
    {
      name: "React",
      desc: "",
      level: 4,
    },
    {
      name: "Vue",
      desc: "",
      level: 4,
    },
    {
      name: "前端工程化",
      desc: "",
      level: 4,
    },
    {
      name: "其他",
      desc: "",
      level: 4,
    },
  ],
  educationList: [
    {
      time: ["2013.09", "2017.06"],
      school: "南京大学金陵学院",
      major: "软件工程",
      degree: "全日制本科",
    },
  ],
  awardList: [
    {
      info: "阿里云ACP",
      time: "2023.07",
    },
  ],
  workExpList: [
    {
      company: "毕马威",
      department: "税务科技",
      time: ["2020.11", "2023.10"],
      desc: `
        - 负责毕马威税务科技海内外产品前端开发工作；
        - 多个项目负责人，经历过0~50人规模的团队；
        - 有跨国跨城市多地区，远程高效协作开发经验；
        - 在公司有较强职业素养，也获得比较好的绩效认可;
      `,
    },
    {
      company: "车300",
      department: "研发中心",
      time: ["2017.06", "2020.10"],
      desc: `
         - 负责车300多个产品线前端开发工作；
         - 参与车300前端团队基础建设；
         - 参与车300前端团队nodejs建设;
      `,
    },
  ],
  projectList: [
    {
      name: "毕马威电子会计凭证平台",
      role: "前端负责人",
      time: ["2022.12", "2023.10"],
      desc: "旨在打造一个财税领域的数据湖",
      content: 
      `
        - 项目中引入过graphql，封装通用request请求；
        - 提供各类文档预览方案；
      `
    },
    {
      name: "毕马威财税在线小程序",
      role: "前端负责人",
      time: ["2022.9", "2022.12"],
      desc: "微信搜“毕马威财税在线”小程序",
      content: 
      `
      
      `,
    },
    {
      name: "毕马威日本税务TaxX项目",
      role: "核心主程",
      time: ["2021.10", "2022.09"],
      desc: "KPMG 日本税务数字化平台",
      content: `
      
      `,
    },
  ],
};

export type State = typeof initialState;

type ACTIONTYPE = { type: "save"; payload: any } | { type: "restore" };

interface AppContextInterface {
  state: State;
  dispatch: React.Dispatch<ACTIONTYPE>;
}

export const ResumeContext = React.createContext<AppContextInterface>({
  state: initialState,
  dispatch: (action) => action,
});

export function reducer(state: State, action: ACTIONTYPE): State {
  switch (action.type) {
    case "save":
      localStorage.setItem(
        "refuseme_data",
        JSON.stringify({ ...state, ...action.payload })
      );
      return { ...state, ...action.payload };
    case "restore":
      localStorage.removeItem("refuseme_data");
      return initialState;
    default:
      throw new Error();
  }
}
