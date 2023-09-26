import styled, { css } from "styled-components";
import { Avatar } from "../components/Avatar";

const Component = ({ text, isSender, hasAvatar }) => {
  return (
    <Wrapper isSender={isSender} hasAvatar={hasAvatar}>
      {!isSender && (
        <AvatarWrapper hasAvatar={hasAvatar}>
          {hasAvatar ? (
            <Avatar
              src="https://randomuser.me/api/portraits/men/3.jpg"
              size="36px"
            ></Avatar>
          ) : (
            <Space></Space>
          )}
        </AvatarWrapper>
      )}

      <TextMessage isSender={isSender} hasAvatar={hasAvatar}>
        {text}
      </TextMessage>
    </Wrapper>
  );
};

const Space = styled.div`
  height: 100%;
  width: 44px;
  background-color: white;
`;

const AvatarWrapper = styled.div`
  ${(props) => {
    if (props.hasAvatar) {
      return css`
        background-color: white;
        padding-right: 8px;
      `;
    }
  }};
`;

const Wrapper = styled.li`
  display: flex;
  border-style: solid;
  border-color: white;
  border-width: 4px 16px 8px 8px;
  list-style-type: none;
  overflow: hidden;
  flex: 0 0 auto;
  flex-direction: ${(props) => (props.isSender ? "row-reverse" : "none")};

  border-right-width: ${(props) => (props.isSender ? "8px" : "100px")};
  border-left-width: ${(props) => (props.isSender ? "100px" : "8px")};
  ::after {
    content: "";
    flex: 1;
    background: white;
    pointer-events: none;
  }
`;

const TextMessage = styled.span`
  padding: 8px;
  overflow-wrap: anywhere;
  position: relative;
  background: ${(props) => (props.isSender ? "none" : "#eee")};
  color: ${(props) => (props.isSender ? "white" : "none")};
  ::before {
    content: "";
    position: absolute;
    left: -8px;
    top: -8px;
    bottom: -8px;
    right: -8px;
    border: 8px solid white;
    border-radius: 16px;
    pointer-events: none;
  }
`;

export { Component as TextMessage };
