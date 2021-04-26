interface IGlobalData {
  system: string; // 设备信息
  ppu: string;
  [propName: string]: any;
}
// 全局信息存储
export const globalData: IGlobalData = {
  system: "",
  ppu: "",
  cofferPub: false
};
