import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as ImageIcon } from "../asset/icons/ImageIcon.svg";

const ImageInputBox = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ isDragging }) => (isDragging ? "red" : "#f4ece6")};
  border-radius: 20px;
  border: 5px #ddc7b2 dashed;
  box-sizing: border-box;
  position: relative;
`;

const ImageButton = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  & > label {
    width: 100%;
    height: 100%;
    display: block;
  }

  & > input {
    width: 0;
    height: 0;
  }
`;

export default function DragDrop({ setFiles, files }) {
  // 드래그 중일때와 아닐때의 스타일을 구분하기 위한 state 변수
  const [isDragging, setIsDragging] = useState(false);
  // 각 선택했던 파일들의 고유값 id
  const fileId = useRef(0);
  // 드래그 이벤트를 감지하는 ref 참조변수 (label 태그에 들어갈 예정)
  const dragRef = useRef();

  const onChangeFiles = useCallback(
    (e) => {
      let selectFiles = [];
      let tempFiles = files;
      // temp 변수를 이용하여 선택했던 파일들을 담습니다.

      // 드래그 했을 때와 안했을 때 가리키는 파일 배열을 다르게 해줍니다.
      if (e.type === "drop") {
        // 드래그 앤 드롭 했을때
        selectFiles = e.dataTransfer.files;
      } else {
        // "파일 첨부" 버튼을 눌러서 이미지를 선택했을때
        selectFiles = e.target.files;
      }

      for (const file of selectFiles) {
        // 스프레드 연산자를 이용하여 기존에 있던 파일들을 복사하고, 선택했던 파일들을 append 해줍니다.
        tempFiles = [
          ...tempFiles,
          {
            id: fileId.current++, // fileId의 값을 1씩 늘려주면서 각 파일의 고유값으로 사용합니다.
            object: file, // object 객체안에 선택했던 파일들의 정보가 담겨있습니다.
          },
        ];
      }

      setFiles(tempFiles);
    },
    [files]
  ); // 위에서 선언했던 files state 배열을 deps에 넣어줍니다.

  const handleDragIn = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files) {
      setIsDragging(true);
    }
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();

      onChangeFiles(e);
      setIsDragging(false);
    },
    [onChangeFiles]
  );

  const initDragEvents = useCallback(() => {
    // 앞서 말했던 4개의 이벤트에 Listener를 등록합니다. (마운트 될때)

    if (dragRef.current !== null) {
      dragRef.current.addEventListener("dragenter", handleDragIn);
      dragRef.current.addEventListener("dragleave", handleDragOut);
      dragRef.current.addEventListener("dragover", handleDragOver);
      dragRef.current.addEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = useCallback(() => {
    // 앞서 말했던 4개의 이벤트에 Listener를 삭제합니다. (언마운트 될때)

    if (dragRef.current !== null) {
      dragRef.current.removeEventListener("dragenter", handleDragIn);
      dragRef.current.removeEventListener("dragleave", handleDragOut);
      dragRef.current.removeEventListener("dragover", handleDragOver);
      dragRef.current.removeEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  return (
    <>
      <ImageInputBox ref={dragRef}>
        <ImageButton>
          <input
            multiple
            type="file"
            id="upload"
            accept="image/gif, image/jpeg, image/png"
            onChange={(event) => {
              const selected = Array.from({
                length: event.target.files.length,
              }).map((_, index) => {
                return {
                  id: files.length + 1 + index,
                  object: event.target.files[index],
                };
              });
              console.log(selected);
              setFiles([...files, ...selected]);
            }}
          />
          <label htmlFor="upload" />
        </ImageButton>
        <ImageIcon />
        <span>Drag images to upload</span>
      </ImageInputBox>
    </>
  );
}
