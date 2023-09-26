import styled from "styled-components";
import { Avatar } from "../components/Avatar";

const Component = () => {
  return (
    <Wrapper>
      <Item>
        <Avatar
          src="https://randomuser.me/api/portraits/men/3.jpg"
          size="60px"
        />
        <Content>
          <Sender>Huyen</Sender>
          <Summary>
            Huyen cute Huyen cuteHuyen cuteHuyen cuteHuyen cuteHuyen cuteHuyen
            cuteHuyen cuteHuyen cute
          </Summary>
        </Content>
        <Avatar
          src="https://randomuser.me/api/portraits/men/3.jpg"
          size="16px"
        />
      </Item>
      <Item>
        <Avatar
          src="https://randomuser.me/api/portraits/men/3.jpg"
          size="60px"
        />
        <Content>
          <Sender>Huyen</Sender>
          <Summary>
            Huyen cute Huyen cuteHuyen cuteHuyen cuteHuyen cuteHuyen cuteHuyen
            cuteHuyen cuteHuyen cute
          </Summary>
        </Content>
        <Avatar
          src="https://randomuser.me/api/portraits/men/3.jpg"
          size="16px"
        />
      </Item>
      <Item>
        <Avatar
          src="https://randomuser.me/api/portraits/men/3.jpg"
          size="60px"
        />
        <Content>
          <Sender>Huyen</Sender>
          <Summary>
            Huyen cute Huyen cuteHuyen cuteHuyen cuteHuyen cuteHuyen cuteHuyen
            cuteHuyen cuteHuyen cute
          </Summary>
        </Content>
        <i className="fa-sharp fa-regular fa-circle-check"></i>
      </Item>
      <Item>
        <Avatar
          src="https://randomuser.me/api/portraits/men/3.jpg"
          size="60px"
        />
        <Content>
          <Sender>Huyen</Sender>
          <Summary>
            Huyen cute Huyen cuteHuyen cuteHuyen cuteHuyen cuteHuyen cuteHuyen
            cuteHuyen cuteHuyen cute
          </Summary>
        </Content>
        <i className="fa-sharp fa-regular fa-circle-check"></i>
      </Item>
      <Item>
        <Avatar
          src="https://randomuser.me/api/portraits/men/3.jpg"
          size="60px"
        />
        <Content>
          <Sender>Huyen</Sender>
          <Summary>
            Huyen cute Huyen cuteHuyen cuteHuyen cuteHuyen cuteHuyen cuteHuyen
            cuteHuyen cuteHuyen cute
          </Summary>
        </Content>
        <i className="fa-sharp fa-regular fa-circle-check"></i>
      </Item>
      <Item>
        <Avatar
          src="https://randomuser.me/api/portraits/men/3.jpg"
          size="60px"
        />
        <Content>
          <Sender>Huyen</Sender>
          <Summary>
            Huyen cute Huyen cuteHuyen cuteHuyen cuteHuyen cuteHuyen cuteHuyen
            cuteHuyen cuteHuyen cute
          </Summary>
        </Content>
        <i className="fa-sharp fa-regular fa-circle-check"></i>
      </Item>
      <Item>
        <Avatar
          src="https://randomuser.me/api/portraits/men/3.jpg"
          size="60px"
        />
        <Content>
          <Sender>Huyen</Sender>
          <Summary>
            Huyen cute Huyen cuteHuyen cuteHuyen cuteHuyen cuteHuyen cuteHuyen
            cuteHuyen cuteHuyen cute
          </Summary>
        </Content>
        <i className="fa-sharp fa-regular fa-circle-check"></i>
      </Item>
      <Item>
        <Avatar
          src="https://randomuser.me/api/portraits/men/3.jpg"
          size="60px"
        />
        <Content>
          <Sender>Huyen</Sender>
          <Summary>
            Huyen cute Huyen cuteHuyen cuteHuyen cuteHuyen cuteHuyen cuteHuyen
            cuteHuyen cuteHuyen cute
          </Summary>
        </Content>
        <i className="fa-sharp fa-regular fa-circle-check"></i>
      </Item>
      <Item>
        <Avatar
          src="https://randomuser.me/api/portraits/men/3.jpg"
          size="60px"
        />
        <Content>
          <Sender>Huyen</Sender>
          <Summary>
            Huyen cute Huyen cuteHuyen cuteHuyen cuteHuyen cuteHuyen cuteHuyen
            cuteHuyen cuteHuyen cute
          </Summary>
        </Content>
        <i className="fa-sharp fa-regular fa-circle-check"></i>
      </Item>
      <Item>
        <Avatar
          src="https://randomuser.me/api/portraits/men/3.jpg"
          size="60px"
        />
        <Content>
          <Sender>Huyen</Sender>
          <Summary>
            Huyen cute Huyen cuteHuyen cuteHuyen cuteHuyen cuteHuyen cuteHuyen
            cuteHuyen cuteHuyen cute
          </Summary>
        </Content>
        <i className="fa-sharp fa-regular fa-circle-check"></i>
      </Item>
    </Wrapper>
  );
};

const Sender = styled.div`
  font-size: 18px;
`;

const Summary = styled.div`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  column-gap: 16px;
  margin-bottom: 24px;
`;

const Content = styled.span`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  flex-grow: 1;
  color: #9e9a9a;
  min-width: 0;
`;

const Wrapper = styled.ul`
  overflow: auto;
  margin-bottom: 54px;
`;
export { Component as MessageList };
