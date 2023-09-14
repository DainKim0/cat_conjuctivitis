import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { ReactComponent as Close } from "../asset/icons/Close.svg";
import InspectHeader from "../components/InspectHeader";
import { useNavigate } from "react-router-dom";
import DragDrop from "../components/DragDrop";
import axios from "axios";
import { API } from "../config";
import { useRecoilState } from "recoil";
import { userState } from "../components/atom.js";

const UploadBox = styled.div`
  background: #faf5f1;
  width: 100vw;
  min-height: 100vh;
  padding: 0 30px;
  box-sizing: border-box;
  font-family: math;
  @media (max-width: 600px) {
    padding: 0;
  }
`;

const UploadMain = styled.main`
  display: flex;
  padding: 40px 0;
  gap: 40px;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const UploadCotainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  max-width: 1000px;
`;

const ImageButton = styled.div`
  background: #9f9388;
  padding: 15px 0;
  border: 2px #746b62 solid;
  text-align: center;
  border-radius: 20px;
`;

const ProcessBar = styled.div`
  width: 100%;
  height: 8px;
  background: #e3b88e;
`;
const ProcessInfo = styled.div`
  & > div:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const ProcessText = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProcessList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height calc(100vh - 400px);
  overflow-y: auto;
}
`;

const ProcessItem = styled.li`
  display: flex;
  gap: 30px;
  align-items: center;
  border-bottom: 4px solid #ebe0d5;
  padding: 25px 20px;
`;

const ProcessButton = styled.div`
  background: #d4ab85;
  padding: 15px 0;
  border: 2px #746b62 solid;
  text-align: center;
  border-radius: 20px;
  color: rgba(0, 0, 0, 0.51);
`;

const ProcessImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const ProcessRemove = styled.div`
  align-self: baseline;
  cursor: pointer;
`;

const ProcessItemBox = ({ file, setFiles }) => {
  const [imageurl, setImageUrl] = useState();
  const { id, object: fileData } = file;
  const reader = new FileReader();
  reader.readAsDataURL(fileData);

  reader.onload = () => {
    setImageUrl(reader.result);
  };
  return (
    <ProcessItem key={id}>
      <ProcessImage src={imageurl} />
      <ProcessInfo>
        <div>{fileData.name}</div>
        <ProcessBar></ProcessBar>
        <ProcessText>100% done</ProcessText>
      </ProcessInfo>
      <ProcessRemove
        onClick={() => setFiles((cur) => cur.filter((f) => f !== file))}
      >
        <Close />
      </ProcessRemove>
    </ProcessItem>
  );
};

export default function Upload() {
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);

  return (
    <UploadBox>
      <InspectHeader text="Image Upload" />
      <UploadMain>
        <UploadCotainer files={!files.length}>
          <div>
            <span>펫을 선택해주세요</span>
            <select>
              <option></option>
            </select>
          </div>
          <DragDrop files={files} setFiles={setFiles} />
        </UploadCotainer>
        {files.length > 0 && (
          <UploadCotainer files={!files.length}>
            <ProcessList>
              {files.map((file) => (
                <ProcessItemBox file={file} setFiles={setFiles} />
              ))}
            </ProcessList>
            <ProcessButton
              onClick={() => {
                const formData = new FormData();
                formData.append("petIdx", 4);
                files.map((f) => formData.append("photo", f.object));
                files.map((f) => console.log(f.object));

                axios
                  .post(API.DIAGNOSIS_IMAGE_UPLOAD, formData, {
                    headers: {
                      Authorization: `Bearer ${user}`,
                      "Content-Type": "multipart/form-data", // 이것 필수
                    },
                  })
                  .then((res) => console.log(res));
              }}
            >
              AI 진단 시작
            </ProcessButton>
          </UploadCotainer>
        )}
      </UploadMain>
    </UploadBox>
  );
}
