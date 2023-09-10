const STATETEXT = {
  INPUT: "추가 하실 펫 정보를 입력해주세요",
  ERROR: "이미 존재하는 펫 이름입니다. 이름을 다시 입력해주세요",
  SUCESS(name) {
    return `${name} 펫을 성공적으로 추가했습니다.`;
  },
};

const GENDEROPTIONS = [
  { VALUE: "", NAME: "==선택==" },
  { VALUE: "neutrality", NAME: "중성" },
  { VALUE: "female", NAME: "암컷" },
  { VALUE: "male", NAME: "수컷" },
  { VALUE: "noanswer", NAME: "모름" },
];

const PETCREATEPLACEHOLDER = {
  NAME: "이름을 입력해주세요",
  AGE: "나이를 입력해주세요",
  GENDER: "성별을 선택해주세요",
  REMARK: "특이사항을 입력해주세요",
};

module.exports = { STATETEXT, GENDEROPTIONS, PETCREATEPLACEHOLDER };
