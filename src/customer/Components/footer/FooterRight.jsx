import { memo } from "react";
import styled from "styled-components";

const Stores = styled.a`
  flex: 1;
  position: relative;
  letter-spacing: 0.4px;
  line-height: 17.5px;
  text-transform: uppercase;
  font-weight: 700;
  color: inherit;
  text-decoration: none;
`;
const Link = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0px 0.8px;
`;
const FindAStore = styled.a`
  flex: 1;
  position: relative;
  letter-spacing: 0.4px;
  line-height: 17.5px;
  color: inherit;
  text-decoration: none;
`;
const Item = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 11.3px 0px 0px;
`;
const List = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const Item1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
`;
const Itemmargin = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 34.8px 0px 0px;
`;
const List1 = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const List2 = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 57px;
`;
const List3 = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 145.5px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 16px;
  box-sizing: border-box;
  gap: 32px;
  @media (max-width: 1000px) {
    gap: 20px;
  }
`;
const ContainerRoot = styled.div`
  width: 60%;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 31.3px 0px 61.5px;
  text-align: left;
  font-size: 14px;
  color: #000;
  font-family: Roboto;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const FooterRight = memo(() => {
  return (
    <ContainerRoot>
      <Container>
        <List1>
          <Item1>
            <Link>
              <Stores href="s">Stores</Stores>
            </Link>
            <List>
              <Item>
                <Link>
                  <FindAStore href="s">Find A Store</FindAStore>
                </Link>
              </Item>
            </List>
          </Item1>
          <Itemmargin>
            <Item1>
              <Link>
                <Stores href="">About Us</Stores>
              </Link>
              <List>
                <Item>
                  <Link>
                    <FindAStore href="">About Jacqui E</FindAStore>
                  </Link>
                </Item>
                <Item>
                  <Link>
                    <FindAStore href="">Careers</FindAStore>
                  </Link>
                </Item>
                <Item>
                  <Link>
                    <FindAStore href="">{`Terms & Conditions`}</FindAStore>
                  </Link>
                </Item>
                <Item>
                  <Link>
                    <FindAStore href="">Better Practices</FindAStore>
                  </Link>
                </Item>
              </List>
            </Item1>
          </Itemmargin>
        </List1>
        <List2>
          <Item1>
            <Link>
              <Stores href="">{`Help & Information`}</Stores>
            </Link>
            <List>
              <Item>
                <Link>
                  <FindAStore href="">Delivery Information</FindAStore>
                </Link>
              </Item>
              <Item>
                <Link>
                  <FindAStore href="">Track My Order</FindAStore>
                </Link>
              </Item>
              <Item>
                <Link>
                  <FindAStore href="">{`Returns & Exchanges`}</FindAStore>
                </Link>
              </Item>
              <Item>
                <Link>
                  <FindAStore href="">Size Guide</FindAStore>
                </Link>
              </Item>
              <Item>
                <Link>
                  <FindAStore href="">{`Help & Contact Us`}</FindAStore>
                </Link>
              </Item>
            </List>
          </Item1>
        </List2>
        <List1>
          <Item1>
            <Link>
              <Stores href="">Gift Cards</Stores>
            </Link>
            <List>
              <Item>
                <Link>
                  <FindAStore href="">Shop Gift Cards</FindAStore>
                </Link>
              </Item>
              <Item>
                <Link>
                  <FindAStore href="">Balance Enquiry</FindAStore>
                </Link>
              </Item>
              <Item>
                <Link>
                  <FindAStore href="">Gift Card Help</FindAStore>
                </Link>
              </Item>
            </List>
          </Item1>
          <Itemmargin>
            <Item1>
              <Link>
                <Stores href="">SHOP</Stores>
              </Link>
              <List>
                <Item>
                  <Link>
                    <FindAStore href="">About Jacqui E</FindAStore>
                  </Link>
                </Item>
                <Item>
                  <Link>
                    <FindAStore href="">{`Terms & Conditions`}</FindAStore>
                  </Link>
                </Item>
              </List>
            </Item1>
          </Itemmargin>
        </List1>
        <List3>
          <Item1>
            <Link>
              <Stores href="">Denim Fit Guide</Stores>
            </Link>
            <List>
              <Item>
                <Link>
                  <FindAStore href="">Women</FindAStore>
                </Link>
              </Item>
              <Item>
                <Link>
                  <FindAStore href="">Men</FindAStore>
                </Link>
              </Item>
            </List>
          </Item1>
        </List3>
      </Container>
    </ContainerRoot>
  );
});

export default FooterRight;
