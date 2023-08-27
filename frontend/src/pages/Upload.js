import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { ReactComponent as ImageIcon } from "../asset/ImageIcon.svg";
import InspectHeader from "../components/InspectHeader";
import { useNavigate } from "react-router-dom";
import DragDrop from "../components/DragDrop";

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

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const UploadCotainer = styled.div`
  width: ${({ files }) => (files ? 50 : 100)}%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
`;
const ImageText = styled.span``;

const ImageButton = styled.div`
  & > label > div {
    background: #9f9388;
    padding: 15px 0;
    border: 2px #746b62 solid;
    text-align: center;
    border-radius: 20px;
  }

  & > input {
    width: 0;
    height: 0;
  }
`;
const ImageInputBox = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f4ece6;
  border-radius: 20px;
  border: 5px #ddc7b2 dashed;
  box-sizing: border-box;
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
`;

const ProcessItem = styled.li`
  display: flex;
  gap: 30px;
  align-items: center;
  border-bottom: 4px solid #ebe0d5;
  padding: 25px 0;
`;

const ProcessButton = styled.div`
  background: #d4ab85;
  padding: 15px 0;
  border: 2px #746b62 solid;
  text-align: center;
  border-radius: 20px;
  color: rgba(0, 0, 0, 0.51);
`;

export default function Upload() {
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(files);
  }, [files]);
  return (
    <UploadBox>
      <InspectHeader text=" Image Upload" />
      <UploadMain>
        <UploadCotainer files={!files.length}>
          <DragDrop files={files} setFiles={setFiles} />
          <ImageButton>
            <input
              type="file"
              id="upload"
              accept="image/gif, image/jpeg, image/png"
            />
            <label htmlFor="upload">
              <div>Image Upload</div>
            </label>
          </ImageButton>
        </UploadCotainer>
        {files.length > 0 && (
          <UploadCotainer files={!files.length}>
            <ProcessList>
              {files.map((file) => {
                const {
                  id,
                  object: { name },
                } = file;
                return (
                  <ProcessItem key={id}>
                    <ImageIcon width="60px" height="60px" />
                    <ProcessInfo>
                      <div>{name}</div>
                      <ProcessBar></ProcessBar>
                      <ProcessText>
                        <div>50% done</div>
                        <div>90KB/sec</div>
                      </ProcessText>
                    </ProcessInfo>
                  </ProcessItem>
                );
              })}
            </ProcessList>
            <ProcessButton onClick={() => navigate("/result")}>
              AI 진단 시작
            </ProcessButton>
          </UploadCotainer>
        )}
      </UploadMain>
    </UploadBox>
  );
}
